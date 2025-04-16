import React, { useState, useCallback } from "react";
import { documentService, DocumentResponse } from "../services/documentService";
import ResumeResults from "../components/ResumeResults";
import "./ResumeBuilder.css";

// Template definitions
const templates = {
  academic: [
    { id: "iit", name: "IIT Standard" },
    { id: "iim", name: "IIM Standard" },
  ],
  professional: [
    { id: "software", name: "Software Engineer" },
    { id: "nontech", name: "Non-Technical" },
    { id: "marketing", name: "Marketing Recruit" },
  ],
};

const ResumeBuilder: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState("software");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.size > 5 * 1024 * 1024) {
        // 5MB limit
        setError("File size exceeds 5MB limit");
        return;
      }

      const fileExt = file.name.split(".").pop()?.toLowerCase();
      if (!["pdf", "docx", "txt"].includes(fileExt || "")) {
        setError("Only PDF, DOCX, and TXT files are supported");
        return;
      }

      setSelectedFile(file);
      setError(null);
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.size > 5 * 1024 * 1024) {
        // 5MB limit
        setError("File size exceeds 5MB limit");
        return;
      }

      const fileExt = file.name.split(".").pop()?.toLowerCase();
      if (!["pdf", "docx", "txt"].includes(fileExt || "")) {
        setError("Only PDF, DOCX, and TXT files are supported");
        return;
      }

      setSelectedFile(file);
      setError(null);
    }
  };

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId);
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      setError("Please select a file");
      return;
    }

    try {
      setUploading(true);
      setError(null);
      const response = await documentService.uploadResume(
        selectedFile,
        selectedTemplate
      );
      setResult(response);
    } catch (err: any) {
      console.error("Upload error:", err);
      setError(err.response?.data?.message || "Failed to process resume");
    } finally {
      setUploading(false);
    }
  };

  const resetForm = () => {
    setSelectedFile(null);
    setResult(null);
    setError(null);
  };

  const getTemplateName = (templateId: string): string => {
    return (
      Object.values(templates)
        .flat()
        .find((t) => t.id === templateId)?.name || templateId
    );
  };

  return (
    <div className="resume-builder-container">
      <h1 className="app-title">Professional Resume Builder</h1>

      {!result ? (
        <>
          <div className="template-selection">
            <h2 className="section-title">Choose a Template</h2>
            <div className="templates-grid">
              <div className="template-category">
                <h3 className="category-title">Academic Templates</h3>
                {templates.academic.map((template) => (
                  <div
                    key={template.id}
                    className={`template-card ${
                      selectedTemplate === template.id ? "selected" : ""
                    }`}
                    onClick={() => handleTemplateSelect(template.id)}
                  >
                    <div className="template-icon academic"></div>
                    <span className="template-name">{template.name}</span>
                  </div>
                ))}
              </div>

              <div className="template-category">
                <h3 className="category-title">Professional Templates</h3>
                {templates.professional.map((template) => (
                  <div
                    key={template.id}
                    className={`template-card ${
                      selectedTemplate === template.id ? "selected" : ""
                    }`}
                    onClick={() => handleTemplateSelect(template.id)}
                  >
                    <div className="template-icon professional"></div>
                    <span className="template-name">{template.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="file-upload-section">
            <h2 className="section-title">Upload Your Resume</h2>
            <div
              className="dropzone"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <input
                type="file"
                id="file-input"
                className="file-input"
                onChange={handleFileChange}
                accept=".pdf,.docx,.txt"
              />

              {selectedFile ? (
                <div className="file-success">
                  <div className="success-icon"></div>
                  <p className="file-name">
                    File uploaded: {selectedFile.name}
                  </p>
                </div>
              ) : (
                <label htmlFor="file-input" className="file-label">
                  <div className="upload-icon"></div>
                  <span className="upload-prompt">
                    Drag and drop your resume file here, or click to browse
                  </span>
                </label>
              )}
            </div>

            {error && <p className="error-message">{error}</p>}

            <p className="upload-info">
              Supported formats: PDF, DOCX, TXT (Max size: 5MB)
            </p>

            <button
              className="submit-button"
              onClick={handleSubmit}
              disabled={!selectedFile || uploading}
            >
              {uploading ? (
                <span className="loading-state">
                  <span className="loading-spinner"></span>
                  Processing...
                </span>
              ) : (
                "Generate Resume"
              )}
            </button>
          </div>
        </>
      ) : (
        <div className="results-section">
          <ResumeResults
            documentId={result.document_id || ""}
            templateName={getTemplateName(
              result.template_used || selectedTemplate
            )}
          />

          <button onClick={resetForm} className="reset-button">
            Create Another Resume
          </button>
        </div>
      )}
    </div>
  );
};

export default ResumeBuilder;
