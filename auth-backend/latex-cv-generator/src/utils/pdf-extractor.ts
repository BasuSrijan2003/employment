// src/utils/pdf-extractor.ts
import fs from 'fs';
import pdfParse from 'pdf-parse';

// Add the export keyword here
export async function extractTextFromPDF(filePath: string): Promise<string> {
  const dataBuffer = fs.readFileSync(filePath);
  const data = await pdfParse(dataBuffer);
  return data.text;
}
