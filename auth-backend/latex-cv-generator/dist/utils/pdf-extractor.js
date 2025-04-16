"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractTextFromPDF = extractTextFromPDF;
// src/utils/pdf-extractor.ts
const fs_1 = __importDefault(require("fs"));
const pdf_parse_1 = __importDefault(require("pdf-parse"));
// Add the export keyword here
async function extractTextFromPDF(filePath) {
    const dataBuffer = fs_1.default.readFileSync(filePath);
    const data = await (0, pdf_parse_1.default)(dataBuffer);
    return data.text;
}
