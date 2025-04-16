"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyTemplateFiles = copyTemplateFiles;
// src/utils/setup.ts
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function copyTemplateFiles() {
    const templatesDir = path_1.default.join(__dirname, '../../templates');
    fs_1.default.mkdirSync(templatesDir, { recursive: true });
    const templates = [
        'iit_template.tex',
        'iim_template.tex',
        'software_template.tex',
        'nontech_template.tex',
        'marketing_template.tex'
    ];
    // Templates content based on the provided files
    const templateContent = {
        'iit_template.tex': `\\documentclass[a4paper,10pt]{article}
    
    \\usepackage[top=0.75in, bottom=0.75in, left=0.55in, right=0.85in]{geometry}
    \\usepackage{graphicx, url, hyperref, palatino, tabularx, fontenc, inputenc, color, enumitem}
    \\definecolor{mygrey}{gray}{0.85}
    \\pagestyle{empty}
    
    \\newcommand{\\resitem}[1]{\\item #1}
    \\newcommand{\\resheading}[1]{\\vspace{0.5em} {\\small \\colorbox{mygrey}{{\\begin{minipage}{0.975\\textwidth}{{\\textbf{#1}}}\\end{minipage}}}} \\vspace{0.5em}}
    \\newcommand{\\ressubheading}[3]{\\begin{tabular*}{6.62in}{l @{\\extracolsep{\\fill}} r} \\textbf{#1} & \\textit{[#2]} \\\\ \\end{tabular*}\\vspace{-8pt}}
    
    \\begin{document}
    
    \\begin{center} \\Large{\\textbf{}} \\end{center}
    
    \\vspace{2pt}
    
    \\begin{center} , , - | Email: | Phone: \\end{center}
    
    % Add your sections here using \\resheading and \\resitem
    
    \\end{document}`,
        // Add definitions for other templates
        'iim_template.tex': `\\documentclass[a4paper,10pt]{article}...`,
        'software_template.tex': `\\documentclass[a4paper,10pt]{article}...`,
        'nontech_template.tex': `\\documentclass[a4paper,10pt]{article}...`,
        'marketing_template.tex': `\\documentclass[a4paper,10pt]{article}...`
    };
    // Write template files
    for (const template of templates) {
        const templatePath = path_1.default.join(templatesDir, template);
        fs_1.default.writeFileSync(templatePath, templateContent[template], 'utf-8');
    }
}
