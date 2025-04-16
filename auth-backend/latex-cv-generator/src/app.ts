import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import fs from 'fs';
import { MongoClient, ObjectId } from 'mongodb';
import multer from 'multer';
import { copyTemplateFiles } from './utils/setup';
import { extractTextFromPDF } from './utils/pdf-extractor';
import { compileLaTeX, cleanupFiles } from './utils/latex-compiler';
import { generateLatexFromCV, storeInMongoDB } from './latex-generator';
import axios from 'axios';
import FormData from 'form-data';
import latex from 'node-latex'; 
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001; // Changed from 3000 to 3001
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/cv_database';


// Middleware
// In app.ts, update the cors configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  methods: ['GET', 'POST'],
  credentials: true
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ensure directories and template files exist
const uploadsDir = path.join(__dirname, '../uploads');
fs.mkdirSync(uploadsDir, { recursive: true });
copyTemplateFiles();

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const timestamp = new Date().toISOString().replace(/:/g, '-');
    cb(null, `${timestamp}_${file.originalname}`);
  }
});

const fileFilter = ((
  req: any, 
  file: Express.Multer.File, 
  cb: multer.FileFilterCallback
) => {
  // Your filter logic here
}) as multer.Options['fileFilter'];

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});
// Home route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to LaTeX CV Generator API' });
});

// Upload route - IMPORTANT: Using 'file' as the field name for the file upload
app.post('/upload', (upload.single('file') as any), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        status: 'error',
        message: 'No file uploaded'
      });
    }
    
    // Get template choice from request
    const templateChoice = (req.body.template || 'software').toLowerCase();
    const templateMap: Record<string, string> = {
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
    const templatePath = path.join(__dirname, `../templates/${templateFile}`);
    const latexTemplate = fs.readFileSync(templatePath, 'utf-8');
    
    // Extract text from PDF
    const cvText = await extractTextFromPDF(req.file.path);
    
    // Generate LaTeX code
    const latexCode = await generateLatexFromCV(
      cvText,
      latexTemplate,
      templateChoice.charAt(0).toUpperCase() + templateChoice.slice(1)
    );
    
    // Store in MongoDB
    const docId = await storeInMongoDB(cvText, latexCode, templateChoice);
    
    return res.status(200).json({
      status: 'success',
      message: `LaTeX CV generated using ${templateChoice} template`,
      template_used: templateChoice,
      document_id: docId,
      latex: latexCode
    });
  } catch (error: any) {
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
  const docId = (req.query.doc_id as string || '').trim();
  if (!docId) {
    return res.status(400).json({
      status: 'error',
      message: 'Document ID is required'
    });
  }
  
  const client = new MongoClient(MONGO_URI);
  
  try {
    await client.connect();
    const db = client.db('cv_database');
    const collection = db.collection('latex_cvs');
    
    const doc = await collection.findOne({ _id: new ObjectId(docId) });
    
    if (!doc) {
      return res.status(404).json({
        status: 'error',
        message: 'Document not found'
      });
    }
    
    // Save .tex file
    const filename = `${docId}_cv.tex`;
    const filepath = path.join(uploadsDir, filename);
    
    fs.writeFileSync(filepath, doc.latex, 'utf-8');
    
    return res.download(filepath, filename, (err) => {
      if (err) {
        console.error('Download error:', err);
      }
      
      // Clean up file after download
      try {
        fs.unlinkSync(filepath);
      } catch (unlinkErr) {
        console.error('File cleanup error:', unlinkErr);
      }
    });
  } catch (error: any) {
    console.error('LaTeX download error:', error);
    return res.status(500).json({
      status: 'error',
      message: 'Download failed',
      error: error.message
    });
  } finally {
    await client.close();
  }
});

// Download PDF route
app.get('/download/pdf/', async (req, res) => {
  const docId = (req.query.doc_id as string || '').trim();
  if (!docId) {
    return res.status(400).json({
      status: 'error',
      message: 'Document ID is required'
    });
  }
  
  const client = new MongoClient(MONGO_URI);
  
  try {
    // Check if pdflatex is available
    try {
      const { exec } = require('child_process');
      exec('pdflatex --version', (error: any) => {
        if (error) {
          throw new Error('pdflatex not found');
        }
      });
    } catch (error) {
      return res.status(500).json({
        status: 'error',
        message: 'pdflatex not found. Please install LaTeX distribution.',
        solution: 'Install TeX Live or MiKTeX on the server'
      });
    }
    
    await client.connect();
    const db = client.db('cv_database');
    const collection = db.collection('latex_cvs');
    
    const doc = await collection.findOne({ _id: new ObjectId(docId) });
    
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
    
    const texPath = path.join(uploadsDir, texFile);
    const pdfPath = path.join(uploadsDir, pdfFile);
    
    // Write .tex file with error handling
    try {
      fs.writeFileSync(texPath, doc.latex, 'utf-8');
    } catch (error: any) {
      return res.status(500).json({
        status: 'error',
        message: 'Failed to write LaTeX file',
        error: error.message
      });
    }
    
    // Compile LaTeX
    const compilationResult = await compileLaTeX(texPath);
    
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
        await cleanupFiles(basename, uploadsDir);
      } catch (cleanupErr) {
        console.error('File cleanup error:', cleanupErr);
      }
    });
  } catch (error: any) {
    console.error('PDF generation error:', error);
    return res.status(500).json({
      status: 'error',
      message: 'PDF generation failed',
      error: error.message
    });
  } finally {
    await client.close();
  }
});

// Download PDF via remote service route
app.get('/download/pdf-remote/', async (req, res) => {
  const docId = (req.query.doc_id as string || '').trim();
  if (!docId) {
    return res.status(400).json({
      status: 'error',
      message: 'Document ID is required'
    });
  }
  
  const client = new MongoClient(MONGO_URI);
  
  try {
    await client.connect();
    const db = client.db('cv_database');
    const collection = db.collection('latex_cvs');
    
    const doc = await collection.findOne({ _id: new ObjectId(docId) });
    
    if (!doc) {
      return res.status(404).json({
        status: 'error',
        message: 'Document not found'
      });
    }
    
    // Send POST request to latexonline.cc
    const formData = new FormData();
    formData.append('file', Buffer.from(doc.latex), {
      filename: 'cv.tex',
      contentType: 'text/plain'
    });
    formData.append('compiler', 'pdflatex');
    formData.append('output', 'pdf');
    
    const response = await axios.post('https://latexonline.cc/data', formData, {
      responseType: 'arraybuffer',
      headers: formData.getHeaders()
    });
    
    if (response.status === 200) {
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename=${docId}_cv.pdf`);
      res.send(Buffer.from(response.data));
    } else {
      return res.status(500).json({
        status: 'error',
        message: 'Failed to compile LaTeX via remote service'
      });
    }
  } catch (error: any) {
    console.error('Remote compile error:', error);
    return res.status(500).json({
      status: 'error',
      message: 'Remote compile failed',
      error: error.message
    });
  } finally {
    await client.close();
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
