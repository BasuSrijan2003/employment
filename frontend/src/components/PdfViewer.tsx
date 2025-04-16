import React, { useState } from "react";
import { documentService } from "../services/documentService";

interface PdfViewerProps {
  documentId: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ documentId }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleViewPdf = async () => {
    try {
      setLoading(true);
      setError(null);

      const pdfBlob = await documentService.viewPdf(documentId);

      // Create a URL for the blob
      const pdfUrl = URL.createObjectURL(pdfBlob);

      // Open PDF in a new tab
      window.open(pdfUrl, "_blank");

      // Clean up URL object after a delay
      setTimeout(() => URL.revokeObjectURL(pdfUrl), 100);
    } catch (err) {
      console.error("Error viewing PDF:", err);
      setError("Failed to load PDF. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadPdf = () => {
    // Create an anchor element and trigger the download
    const downloadLink = document.createElement("a");
    downloadLink.href = documentService.getPdfDownloadUrl(documentId);
    downloadLink.download = `cv_${documentId}.pdf`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="pdf-viewer-controls">
      <button
        onClick={handleViewPdf}
        disabled={loading}
        className="view-button"
      >
        {loading ? "Loading..." : "View File"}
      </button>

      <button onClick={handleDownloadPdf} className="download-button">
        Download PDF
      </button>

      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default PdfViewer;
