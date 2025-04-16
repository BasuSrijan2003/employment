"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateLatexFromCV = generateLatexFromCV;
exports.storeInMongoDB = storeInMongoDB;
// src/latex-generator.ts
const mongodb_1 = require("mongodb");
const dotenv_1 = __importDefault(require("dotenv"));
const generative_ai_1 = require("@google/generative-ai");
dotenv_1.default.config();
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/cv_database';
// Initialize Google AI
const genAI = new generative_ai_1.GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
async function generateLatexFromCV(cvText, templateText, templateName = "Software") {
    const prompt = `
    You are an AI that converts resumes into LaTeX.
    Use the template style: ${templateName}.
    Convert the following resume text into a complete LaTeX file using the template provided.
    
    Resume Text:
    
    ${cvText}
    
    LaTeX Template:
    
    ${templateText}
    
    Generate only LaTeX code, without markdown or explanations.
  `;
    const result = await model.generateContent(prompt);
    return result.response.text().trim();
}
async function storeInMongoDB(originalText, latexCode, templateName) {
    const client = new mongodb_1.MongoClient(MONGO_URI);
    try {
        await client.connect();
        const db = client.db('cv_database');
        const collection = db.collection('latex_cvs');
        const doc = {
            cv_text: originalText,
            latex: latexCode,
            template: templateName,
            created_at: new Date()
        };
        const result = await collection.insertOne(doc);
        return result.insertedId.toString();
    }
    finally {
        await client.close();
    }
}
