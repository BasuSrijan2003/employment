import os
from datetime import datetime
from pymongo import MongoClient
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
MONGO_URI = os.getenv("MONGO_URI")

genai.configure(api_key=GEMINI_API_KEY)
model = genai.GenerativeModel("gemini-1.5-flash")

def generate_latex_from_cv(cv_text, template_text, template_name="Software"):
    prompt = f"""
You are an AI that converts resumes into LaTeX.
Use the template style: {template_name}.
Convert the following resume text into a complete LaTeX file using the template provided.

Resume Text:
{cv_text}

LaTeX Template:
{template_text}

Generate only LaTeX code, without markdown or explanations.
"""
    response = model.generate_content(prompt)
    return response.text.strip()

def store_in_mongodb(original_text, latex_code, template_name):
    client = MongoClient(MONGO_URI)
    db = client['cv_database']
    collection = db['latex_cvs']
    doc = {
        "cv_text": original_text,
        "latex": latex_code,
        "template": template_name,
        "created_at": datetime.utcnow()
    }
    file_id = collection.insert_one(doc).inserted_id
    return str(file_id)
