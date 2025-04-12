# # This Python code snippet is setting up a Flask web application that allows users to upload PDF files, store them in MongoDB using GridFS, and download them later. Here's a breakdown of what the code is doing:
from flask import Flask, request, jsonify, send_file
# from flask_cors import CORS
# from datetime import datetime
# import os
# from pymongo import MongoClient
# import gridfs
# from dotenv import load_dotenv
# from bson import ObjectId

# app = Flask(__name__)
# CORS(app)

# # MongoDB setup
# load_dotenv()
# uri = os.getenv("MONGO_URI", "mongodb+srv://myUser:73fQ3IfaE5IjhR1p@code-review-cluster.mcdt7.mongodb.net/")
# client = MongoClient(uri)
# db = client['cv_database']
# fs = gridfs.GridFS(db)

# # Allowed file extensions
# ALLOWED_EXTENSIONS = {'pdf'}

# def allowed_file(filename):
#     return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# #  Upload PDF (No DB storage)
# @app.route('/upload', methods=['POST'])
# def upload_file():
#     try:
#         if 'file' not in request.files:
#             return jsonify({'status': 'error', 'message': 'No file part in request'}), 400

#         file = request.files['file']

#         if file.filename == '':
#             return jsonify({'status': 'error', 'message': 'No file selected'}), 400

#         if not allowed_file(file.filename):
#             return jsonify({'status': 'error', 'message': 'Only PDF files are allowed'}), 400

#         filename = f"{datetime.now().strftime('%Y%m%d_%H%M%S')}_{file.filename}"

#         # Store file in MongoDB GridFS
#         file_id = fs.put(file, filename=filename)
#         print(f"Received and stored file: {filename} with ID: {file_id}")

#         return jsonify({
#             'status': 'success',
#             'filename': filename,
#             'file_id': str(file_id),
#             'message': 'PDF stored in MongoDB successfully'
#         }), 200

#     except Exception as e:
#         print(f"Error: {str(e)}")
#         return jsonify({'status': 'error', 'message': 'Something went wrong'}), 500

# #  Simple home route
# @app.route('/')
# def home():
#     return jsonify({'message': 'PDF Upload API is running (No DB Mode)'})

# # Download file from MongoDB
# @app.route('/download/<file_id>', methods=['GET'])
# def download_file(file_id):
#     try:
#         if not file_id or len(file_id) != 24:
#             return jsonify({'status': 'error', 'message': 'Invalid file ID format'}), 400
            
#         file_data = fs.get(ObjectId(file_id))
#         if not file_data:
#             return jsonify({'status': 'error', 'message': 'File not found'}), 404
            
#         response = send_file(
#             file_data,
#             mimetype='application/pdf',
#             as_attachment=True,
#             download_name=file_data.filename
#         )
#         response.headers['Content-Disposition'] = f'attachment; filename="{file_data.filename}"'
#         return response
        
#     except gridfs.errors.NoFile:
#         return jsonify({'status': 'error', 'message': 'File not found'}), 404
#     except Exception as e:
#         print(f"Download error: {e}")
#         return jsonify({'status': 'error', 'message': 'Download failed', 'error': str(e)}), 500

# if __name__ == '__main__':
#     app.run(debug=True)


from flask import Flask, request, jsonify, send_file, Response
from flask_cors import CORS
from bson import ObjectId
from datetime import datetime
from pymongo import MongoClient
import gridfs
import os
import requests
from bson import ObjectId
from dotenv import load_dotenv
import fitz  # PyMuPDF
import subprocess
from latex_generator import generate_latex_from_cv, store_in_mongodb
from flask import Response

app = Flask(__name__)
CORS(app)

# MongoDB setup
load_dotenv()
uri = os.getenv("MONGO_URI")
client = MongoClient(uri)
db = client['cv_database']
fs = gridfs.GridFS(db)

# Allowed extensions
ALLOWED_EXTENSIONS = {'pdf'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/upload', methods=['POST'])
def upload_file():
    try:
        if 'file' not in request.files:
            return jsonify({'status': 'error', 'message': 'No file uploaded'}), 400

        file = request.files['file']
        if file.filename == '' or not allowed_file(file.filename):
            return jsonify({'status': 'error', 'message': 'Only PDF files are allowed'}), 400

        # Template name from frontend (e.g., "software", "iit", etc.)
        template_choice = request.form.get("template", "software").lower()
        template_map = {
            "software": "software_template.tex",
            "iit": "iit_template.tex",
            "iim": "iim_template.tex",
            "nontech": "nontech_template.tex",
            "offcampus": "offcampus_template.tex"
        }

        template_file = template_map.get(template_choice)
        if not template_file:
            return jsonify({'status': 'error', 'message': f'Invalid template: {template_choice}'}), 400

        template_path = os.path.join("templates", template_file)
        with open(template_path, "r", encoding="utf-8") as f:
            latex_template = f.read()

        # Save uploaded file
        os.makedirs("uploads", exist_ok=True)
        temp_path = f"uploads/{datetime.now().strftime('%Y%m%d_%H%M%S')}_{file.filename}"
        file.save(temp_path)

        # Extract CV text
        doc = fitz.open(temp_path)
        cv_text = "\n".join([page.get_text() for page in doc])
        doc.close()

        # Generate LaTeX
        latex_code = generate_latex_from_cv(cv_text, latex_template, template_name=template_choice.capitalize())

        # Store in MongoDB
        doc_id = store_in_mongodb(cv_text, latex_code, template_choice)

        return jsonify({
            "status": "success",
            "message": f"LaTeX CV generated using {template_choice} template",
            "template_used": template_choice,
            "document_id": doc_id,
            "latex": latex_code
        }), 200

    except Exception as e:
        return jsonify({'status': 'error', 'message': 'Something went wrong', 'error': str(e)}), 500


@app.route('/download/latex/<doc_id>', methods=['GET'])
def download_latex(doc_id):
    try:
        # Strip spaces or newline characters
        clean_id = doc_id.strip()

        # Fetch from MongoDB
        doc = db['latex_cvs'].find_one({"_id": ObjectId(clean_id)})
        if not doc:
            return jsonify({'status': 'error', 'message': 'Document not found'}), 404

        # Save .tex file
        latex_code = doc['latex']
        filename = f"{clean_id}_cv.tex"
        filepath = os.path.join("uploads", filename)

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(latex_code)

        return send_file(filepath, as_attachment=True)

    except Exception as e:
        return jsonify({'status': 'error', 'message': 'Download failed', 'error': str(e)}), 500


@app.route('/download/pdf/<doc_id>', methods=['GET'])
def download_pdf(doc_id):
    try:
        # Check if pdflatex is available
        try:
            subprocess.run(['pdflatex', '--version'], capture_output=True, check=True)
        except (subprocess.CalledProcessError, FileNotFoundError):
            return jsonify({
                'status': 'error',
                'message': 'pdflatex not found. Please install LaTeX distribution.',
                'solution': 'Install TeX Live or MiKTeX on the server'
            }), 500

        clean_id = doc_id.strip()
        doc = db['latex_cvs'].find_one({"_id": ObjectId(clean_id)})
        if not doc:
            return jsonify({'status': 'error', 'message': 'Document not found'}), 404

        # Create unique filenames
        timestamp = str(int(datetime.now().timestamp()))
        tex_file = f"{clean_id}_{timestamp}_cv.tex"
        pdf_file = f"{clean_id}_{timestamp}_cv.pdf"
        tex_path = os.path.join("uploads", tex_file)
        pdf_path = os.path.join("uploads", pdf_file)

        # Write .tex file with error handling
        try:
            with open(tex_path, 'w', encoding='utf-8') as f:
                f.write(doc['latex'])
        except IOError as e:
            return jsonify({
                'status': 'error',
                'message': 'Failed to write LaTeX file',
                'error': str(e)
            }), 500

        # Compile LaTeX with timeout and full error capture
        try:
            result = subprocess.run(
                ['pdflatex', '-interaction=nonstopmode', '-output-directory=uploads', tex_path],
                capture_output=True,
                text=True,
                timeout=30
            )
            
            if result.returncode != 0:
                return jsonify({
                    'status': 'error',
                    'message': 'LaTeX compilation failed',
                    'latex_error': result.stderr,
                    'latex_output': result.stdout
                }), 500

            if not os.path.exists(pdf_path):
                return jsonify({
                    'status': 'error',
                    'message': 'PDF was not generated',
                    'latex_output': result.stdout
                }), 500

            # Return PDF with cleanup
            response = send_file(pdf_path, as_attachment=True)
            
            # Schedule cleanup (in production use a proper task queue)
            def cleanup():
                for ext in ['.tex', '.pdf', '.aux', '.log']:
                    try:
                        os.remove(os.path.join("uploads", f"{clean_id}_{timestamp}_cv{ext}"))
                    except:
                        pass
            
            response.call_on_close(cleanup)
            return response

        except subprocess.TimeoutExpired:
            return jsonify({
                'status': 'error',
                'message': 'LaTeX compilation timed out'
            }), 500

    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': 'PDF generation failed',
            'error': str(e)
        }), 500

@app.route('/download/pdf-remote/<doc_id>', methods=['GET'])
def download_pdf_remote(doc_id):
    try:
        clean_id = doc_id.strip()
        doc = db['latex_cvs'].find_one({"_id": ObjectId(clean_id)})
        if not doc:
            return jsonify({'status': 'error', 'message': 'Document not found'}), 404

        latex_code = doc['latex']

        # Send POST request to latexonline.cc
        response = requests.post(
            'https://latexonline.cc/data',
            files={
                'file': ('cv.tex', latex_code),
            },
            data={
                'compiler': 'pdflatex',
                'output': 'pdf'
            }
        )

        if response.status_code == 200:
            return Response(
                response.content,
                mimetype='application/pdf',
                headers={'Content-Disposition': f'attachment; filename={clean_id}_cv.pdf'}
            )
        else:
            return jsonify({'status': 'error', 'message': 'Failed to compile LaTeX via remote service'}), 500

    except Exception as e:
        return jsonify({'status': 'error', 'message': 'Remote compile failed', 'error': str(e)}), 500





@app.route('/')
def home():
    return jsonify({'message': 'Welcome to LaTeX CV Generator API'}), 200

if __name__ == '__main__':
    os.makedirs("uploads", exist_ok=True)
    app.run(debug=True)
