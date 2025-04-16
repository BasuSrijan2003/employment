"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
const mongodb_1 = require("mongodb");
const multer_1 = __importDefault(require("multer"));
const setup_1 = require("./utils/setup");
const pdf_extractor_1 = require("./utils/pdf-extractor");
const latex_compiler_1 = require("./utils/latex-compiler");
const latex_generator_1 = require("./latex-generator");
const axios_1 = __importDefault(require("axios"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/cv_database';
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Ensure directories and template files exist
const uploadsDir = path_1.default.join(__dirname, '../uploads');
fs_1.default.mkdirSync(uploadsDir, { recursive: true });
(0, setup_1.copyTemplateFiles)();
// Set up multer for file uploads
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadsDir);
    },
    filename: (req, file, cb) => {
        const timestamp = new Date().toISOString().replace(/:/g, '-');
        cb(null, `${timestamp}_${file.originalname}`);
    }
});
const fileFilter = (req, file, cb) => {
    const ext = path_1.default.extname(file.originalname).toLowerCase();
    if (ext === '.pdf') {
        cb(null, true);
    }
    else {
        cb(new Error('Only PDF files are allowed'));
    }
};
const upload = (0, multer_1.default)({
    storage,
    fileFilter,
    limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});
// Home route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to LaTeX CV Generator API' });
});
// Upload route
app.post('/upload', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                status: 'error',
                message: 'No file uploaded'
            });
        }
        // Get template choice from request
        const templateChoice = (req.body.template || 'iit').toLowerCase();
        const templateMap = {
            'software': 'software_template.tex',
            'iit': 'iit_template.tex',
            'iim': 'iim_template.tex',
            'nontech': 'nontech_template.tex',
            'marketing': 'marketing_template.tex'
        };
        const templateFile = templateMap[templateChoice];
        if (!templateFile) {
            return res.status(400).json({
                status: 'error',
                message: `Invalid template: ${templateChoice}`
            });
        }
        // Read template file
        const templatePath = path_1.default.join(__dirname, `../templates/${templateFile}`);
        const latexTemplate = fs_1.default.readFileSync(templatePath, 'utf-8');
        // Extract text from PDF
        const cvText = await (0, pdf_extractor_1.extractTextFromPDF)(req.file.path);
        // Generate LaTeX code
        const latexCode = await (0, latex_generator_1.generateLatexFromCV)(cvText, latexTemplate, templateChoice.charAt(0).toUpperCase() + templateChoice.slice(1));
        // Store in MongoDB
        const docId = await (0, latex_generator_1.storeInMongoDB)(cvText, latexCode, templateChoice);
        return res.status(200).json({
            status: 'success',
            message: `LaTeX CV generated using ${templateChoice} template`,
            template_used: templateChoice,
            document_id: docId,
            latex: latexCode
        });
    }
    catch (error) {
        console.error('Upload error:', error);
        return res.status(500).json({
            status: 'error',
            message: 'Something went wrong',
            error: error.message
        });
    }
});
// Download LaTeX route
app.get('/download/latex/', async (req, res) => {
    const docId = (req.query.doc_id || '').trim();
    if (!docId) {
        return res.status(400).json({
            status: 'error',
            message: 'Document ID is required'
        });
    }
    const client = new mongodb_1.MongoClient(MONGO_URI);
    try {
        await client.connect();
        const db = client.db('cv_database');
        const collection = db.collection('latex_cvs');
        const doc = await collection.findOne({ _id: new mongodb_1.ObjectId(docId) });
        if (!doc) {
            return res.status(404).json({
                status: 'error',
                message: 'Document not found'
            });
        }
        // Save .tex file
        const filename = `${docId}_cv.tex`;
        const filepath = path_1.default.join(uploadsDir, filename);
        fs_1.default.writeFileSync(filepath, doc.latex, 'utf-8');
        return res.download(filepath, filename, (err) => {
            if (err) {
                console.error('Download error:', err);
            }
            // Clean up file after download
            try {
                fs_1.default.unlinkSync(filepath);
            }
            catch (unlinkErr) {
                console.error('File cleanup error:', unlinkErr);
            }
        });
    }
    catch (error) {
        console.error('LaTeX download error:', error);
        return res.status(500).json({
            status: 'error',
            message: 'Download failed',
            error: error.message
        });
    }
    finally {
        await client.close();
    }
});
// Download PDF route
app.get('/download/pdf/', async (req, res) => {
    const docId = (req.query.doc_id || '').trim();
    if (!docId) {
        return res.status(400).json({
            status: 'error',
            message: 'Document ID is required'
        });
    }
    const client = new mongodb_1.MongoClient(MONGO_URI);
    try {
        // Check if pdflatex is available
        try {
            const { exec } = require('child_process');
            exec('pdflatex --version', (error) => {
                if (error) {
                    throw new Error('pdflatex not found');
                }
            });
        }
        catch (error) {
            return res.status(500).json({
                status: 'error',
                message: 'pdflatex not found. Please install LaTeX distribution.',
                solution: 'Install TeX Live or MiKTeX on the server'
            });
        }
        await client.connect();
        const db = client.db('cv_database');
        const collection = db.collection('latex_cvs');
        const doc = await collection.findOne({ _id: new mongodb_1.ObjectId(docId) });
        if (!doc) {
            return res.status(404).json({
                status: 'error',
                message: 'Document not found'
            });
        }
        // Create unique filenames
        const timestamp = Math.floor(Date.now() / 1000).toString();
        const basename = `${docId}_${timestamp}_cv`;
        const texFile = `${basename}.tex`;
        const pdfFile = `${basename}.pdf`;
        const texPath = path_1.default.join(uploadsDir, texFile);
        const pdfPath = path_1.default.join(uploadsDir, pdfFile);
        // Write .tex file with error handling
        try {
            fs_1.default.writeFileSync(texPath, doc.latex, 'utf-8');
        }
        catch (error) {
            return res.status(500).json({
                status: 'error',
                message: 'Failed to write LaTeX file',
                error: error.message
            });
        }
        // Compile LaTeX
        const compilationResult = await (0, latex_compiler_1.compileLaTeX)(texPath);
        if (!compilationResult.success) {
            return res.status(500).json({
                status: 'error',
                message: 'LaTeX compilation failed',
                latex_error: compilationResult.stderr,
                latex_output: compilationResult.stdout
            });
        }
        // Return PDF file
        return res.download(pdfPath, pdfFile, async (err) => {
            if (err) {
                console.error('PDF download error:', err);
            }
            // Clean up files after download
            try {
                await (0, latex_compiler_1.cleanupFiles)(basename, uploadsDir);
            }
            catch (cleanupErr) {
                console.error('File cleanup error:', cleanupErr);
            }
        });
    }
    catch (error) {
        console.error('PDF generation error:', error);
        return res.status(500).json({
            status: 'error',
            message: 'PDF generation failed',
            error: error.message
        });
    }
    finally {
        await client.close();
    }
});
// Download PDF via remote service route
app.get('/download/pdf-remote/', async (req, res) => {
    const docId = (req.query.doc_id || '').trim();
    if (!docId) {
        return res.status(400).json({
            status: 'error',
            message: 'Document ID is required'
        });
    }
    const client = new mongodb_1.MongoClient(MONGO_URI);
    try {
        await client.connect();
        const db = client.db('cv_database');
        const collection = db.collection('latex_cvs');
        const doc = await collection.findOne({ _id: new mongodb_1.ObjectId(docId) });
        if (!doc) {
            return res.status(404).json({
                status: 'error',
                message: 'Document not found'
            });
        }
        // Send POST request to latexonline.cc
        const formData = new FormData();
        formData.append('file', new Blob([doc.latex], { type: 'text/plain' }), 'cv.tex');
        formData.append('compiler', 'pdflatex');
        formData.append('output', 'pdf');
        const response = await axios_1.default.post('https://latexonline.cc/data', formData, {
            responseType: 'arraybuffer',
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        if (response.status === 200) {
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', `attachment; filename=${docId}_cv.pdf`);
            res.send(Buffer.from(response.data));
        }
        else {
            return res.status(500).json({
                status: 'error',
                message: 'Failed to compile LaTeX via remote service'
            });
        }
    }
    catch (error) {
        console.error('Remote compile error:', error);
        return res.status(500).json({
            status: 'error',
            message: 'Remote compile failed',
            error: error.message
        });
    }
    finally {
        await client.close();
    }
});
// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
exports.default = app;
