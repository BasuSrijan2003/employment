#!/usr/bin/env python
# coding: utf-8

import os
import google.generativeai as genai
import fitz
import subprocess
from datetime import datetime
import pymongo

# --- Configuration ---
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if not GEMINI_API_KEY:
    print("Warning: GEMINI_API_KEY environment variable not set. Attempting fallback.")

# MongoDB Configuration
MONGO_CONNECTION_STRING = os.getenv("MONGO_URI", "mongodb://localhost:27017/")
MONGO_DB_NAME = "cv_data"
MONGO_COLLECTION_NAME = "generated_cvs"

# Input/Output Files
INPUT_CV_PDF = "/content/ShubhapriyaGhoshResume.pdf"
OUTPUT_TEX_FILE = "document.tex"
OUTPUT_PDF_FILE = "document.pdf"
OUTPUT_LOG_FILE = "document.log"

# LaTeX Templates (truncated for brevity)
iit_latex = r"""\documentclass[a4paper,10pt]{article}..."""
iim_latex = r"""\documentclass[11pt]{article}..."""
software_latex = r"""\documentclass[letterpaper,11pt]{article}..."""
non_tech_latex = r"""\documentclass[10pt]{article}..."""
off_campus_latex = r"""\documentclass[a4paper,11pt]{article}..."""

def format_prompt(template, template_name, text):
    """Format the prompt for the generative AI model"""
    return f"""Convert the following resume text into a professional LaTeX document using the {template_name} template.
    
Resume Text:
{text}

Template:
{template}

Instructions:
1. Maintain all the original content from the resume
2. Format it according to the template structure
3. Keep the LaTeX code clean and well-commented
4. Ensure proper sectioning and organization
5. Include all necessary LaTeX packages
6. Output only the LaTeX code without any additional text"""

def convert_cv_to_latex(input_pdf_path, template_choice='iit'):
    """Convert PDF CV to LaTeX format and return path to generated PDF"""
    # --- Extract Text from PDF ---
    cv_text = ""
    try:
        print(f"Reading CV text from: {input_pdf_path}")
        if not os.path.exists(input_pdf_path):
            raise FileNotFoundError(f"Input CV file not found: {input_pdf_path}")
        with pymupdf.open(input_pdf_path) as doc:
            cv_text = chr(12).join([page.get_text() for page in doc])
        print("CV Text Extracted Successfully.")
    except Exception as e:
        print(f"Error reading PDF file: {e}")
        exit(1)

    # --- Set Template Based on Choice ---
    template_map = {
        'iit': (iit_latex, "IIT"),
        'iim': (iim_latex, "IIM"),
        'software': (software_latex, "Software"),
        'non-tech': (non_tech_latex, "Non-Tech"),
        'off-campus': (off_campus_latex, "Off-Campus")
    }
    
    template, template_choice_name = template_map.get(template_choice.lower(), (iit_latex, "IIT"))
    print(f"Selected {template_choice_name} Template.")

    # --- Configure and Call Generative AI ---
    if not GEMINI_API_KEY:
        raise ValueError("GEMINI_API_KEY is not configured. Cannot proceed.")
    print("Configuring Generative AI model...")
    genai.configure(api_key=GEMINI_API_KEY)

    generation_config = {
        "temperature": 0.7,
        "top_p": 0.95,
        "top_k": 64,
        "max_output_tokens": 8192,
        "response_mime_type": "text/plain",
    }
    model = genai.GenerativeModel(
        model_name="gemini-1.5-flash",
        generation_config=generation_config,
    )

    print("Generating LaTeX code (this may take a moment)...")
    prompt = format_prompt(template, template_choice_name, cv_text)
    generated_latex_code = ""
    try:
        response = model.generate_content(prompt)
        generated_latex_code = response.text
        generated_latex_code = generated_latex_code.strip()
        if generated_latex_code.startswith("```latex"):
            generated_latex_code = generated_latex_code[8:]
        if generated_latex_code.endswith("```"):
            generated_latex_code = generated_latex_code[:-3]
        generated_latex_code = generated_latex_code.strip()
        print("LaTeX code generated successfully.")
    except Exception as e:
        print(f"Error during AI generation: {e}")
        exit(1)

    # --- Save Generated LaTeX to File ---
    output_dir = "output"
    os.makedirs(output_dir, exist_ok=True)
    output_tex = os.path.join(output_dir, "document.tex")
    output_pdf = os.path.join(output_dir, "document.pdf")
    
    try:
        print(f"Saving LaTeX code to: {output_tex}")
        with open(output_tex, 'w', encoding='utf-8') as file:
            file.write(generated_latex_code)
        print("LaTeX file saved.")
    except Exception as e:
        raise IOError(f"Error writing LaTeX file: {e}")

    # --- Store Data in MongoDB ---
    mongo_client = None
    try:
        if MONGO_CONNECTION_STRING and MONGO_DB_NAME and MONGO_COLLECTION_NAME:
            print("Connecting to MongoDB...")
            mongo_client = pymongo.MongoClient(MONGO_CONNECTION_STRING)
            db = mongo_client[MONGO_DB_NAME]
            collection = db[MONGO_COLLECTION_NAME]
            
            document = {
                "timestamp": datetime.datetime.now(),
                "template": template_choice_name,
                "input_pdf": input_pdf_path,
                "output_tex": output_tex,
                "output_pdf": output_pdf,
                "status": "completed"
            }
            
            result = collection.insert_one(document)
            print(f"Saved conversion metadata to MongoDB (ID: {result.inserted_id})")
    except Exception as e:
        print(f"Warning: Failed to save to MongoDB - {e}")
    finally:
        if mongo_client:
            mongo_client.close()

    # --- Compile LaTeX to PDF ---
    try:
        print("\nCompiling LaTeX to PDF...")
        if IN_COLAB:
            print("In Colab, you may need to run: !apt-get update && apt-get install -y texlive-latex-base texlive-fonts-recommended texlive-latex-extra texlive-fonts-extra texlive-pictures")
        
        compile_cmd = ['pdflatex', '-interaction=nonstopmode', '-output-directory', output_dir, output_tex]
        subprocess.run(compile_cmd, capture_output=True, text=True, encoding='utf-8', errors='ignore')
        subprocess.run(compile_cmd, capture_output=True, text=True, encoding='utf-8', errors='ignore')  # Run twice
        
        if not os.path.exists(output_pdf):
            raise RuntimeError("PDF generation failed")
            
        return output_pdf
        
    except Exception as e:
        raise RuntimeError(f"Error during LaTeX compilation: {e}")

if __name__ == "__main__":
    print("--- CV to LaTeX Generator ---")
    input_pdf = input("Enter path to PDF file: ")
    template = input("Choose template (iit/iim/software/non-tech/off-campus): ")
    convert_cv_to_latex(input_pdf, template)
