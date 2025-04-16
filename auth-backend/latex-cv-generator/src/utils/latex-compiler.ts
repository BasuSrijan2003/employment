// src/utils/latex-compiler.ts
import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';
import util from 'util';

const execPromise = util.promisify(exec);

export interface CompilationResult {
  success: boolean;
  outputPath?: string;
  error?: string;
  stdout?: string;
  stderr?: string;
}

export async function compileLaTeX(texFilePath: string): Promise<CompilationResult> {
  try {
    const directory = path.dirname(texFilePath);
    const { stdout, stderr } = await execPromise(
      `pdflatex -interaction=nonstopmode -output-directory=${directory} ${texFilePath}`,
      { timeout: 30000 } // 30 seconds timeout
    );
    
    const basename = path.basename(texFilePath, '.tex');
    const pdfPath = path.join(directory, `${basename}.pdf`);
    
    if (fs.existsSync(pdfPath)) {
      return {
        success: true,
        outputPath: pdfPath,
        stdout,
        stderr
      };
    } else {
      return {
        success: false,
        error: 'PDF was not generated',
        stdout,
        stderr
      };
    }
  } catch (error: any) {
    return {
      success: false,
      error: error.message,
      stdout: error.stdout,
      stderr: error.stderr
    };
  }
}

export async function cleanupFiles(basename: string, directory: string): Promise<void> {
  const extensions = ['.tex', '.pdf', '.aux', '.log'];
  
  for (const ext of extensions) {
    const filePath = path.join(directory, `${basename}${ext}`);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }
}
