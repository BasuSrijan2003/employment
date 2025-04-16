"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileLaTeX = compileLaTeX;
exports.cleanupFiles = cleanupFiles;
// src/utils/latex-compiler.ts
const child_process_1 = require("child_process");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const util_1 = __importDefault(require("util"));
const execPromise = util_1.default.promisify(child_process_1.exec);
async function compileLaTeX(texFilePath) {
    try {
        const directory = path_1.default.dirname(texFilePath);
        const { stdout, stderr } = await execPromise(`pdflatex -interaction=nonstopmode -output-directory=${directory} ${texFilePath}`, { timeout: 30000 } // 30 seconds timeout
        );
        const basename = path_1.default.basename(texFilePath, '.tex');
        const pdfPath = path_1.default.join(directory, `${basename}.pdf`);
        if (fs_1.default.existsSync(pdfPath)) {
            return {
                success: true,
                outputPath: pdfPath,
                stdout,
                stderr
            };
        }
        else {
            return {
                success: false,
                error: 'PDF was not generated',
                stdout,
                stderr
            };
        }
    }
    catch (error) {
        return {
            success: false,
            error: error.message,
            stdout: error.stdout,
            stderr: error.stderr
        };
    }
}
async function cleanupFiles(basename, directory) {
    const extensions = ['.tex', '.pdf', '.aux', '.log'];
    for (const ext of extensions) {
        const filePath = path_1.default.join(directory, `${basename}${ext}`);
        if (fs_1.default.existsSync(filePath)) {
            fs_1.default.unlinkSync(filePath);
        }
    }
}
