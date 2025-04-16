import React from "react";
import PdfViewer from "./PdfViewer";
import { documentService } from "../services/documentService";

interface ResumeResultsProps {
  documentId: string;
  templateName: string;
}

const ResumeResults: React.FC<ResumeResultsProps> = ({
  documentId,
  templateName,
}) => {
  if (!documentId) {
    return null;
  }

  // Define styles as JavaScript objects
  const styles = {
    pageBackground: {
      minHeight: "100vh",
      width: "100%",
      padding: "3rem 1rem",
      background:
        "linear-gradient(135deg, rgb(79, 124, 191) 0%, rgb(29, 215, 23) 100%)",
      backgroundAttachment: "fixed",
    },
    resumeResults: {
      position: "relative" as const,
      maxWidth: "1100px",
      margin: "0 auto",
      padding: "2.5rem 2rem",
      backgroundColor: "#ffffff",
      backgroundImage: "radial-gradient(#e6e9f0 1px, transparent 1px)",
      backgroundSize: "20px 20px",
      borderRadius: "12px",
      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15)",
      fontFamily:
        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      overflow: "hidden",
    },
    decorativeBanner: {
      position: "absolute" as const,
      top: 0,
      left: 0,
      right: 0,
      height: "8px",
      background:
        "linear-gradient(90deg, var(--primary, #4a6cf7) 0%, var(--accent, rgb(133, 206, 224)) 100%)",
    },
    resultsHeader: {
      textAlign: "center" as const,
      marginBottom: "2.5rem",
      paddingBottom: "1.5rem",
      borderBottom: "1px solid rgb(208, 34, 34)",
    },
    title: {
      fontSize: "2.4rem",
      color: "#2d3748",
      marginBottom: "0.75rem",
      fontWeight: 700,
      textShadow: "0 1px 2px rgba(0,0,0,0.05)",
    },
    subtitle: {
      fontSize: "1.1rem",
      color: "#4a5568",
      maxWidth: "650px",
      margin: "0 auto",
      lineHeight: 1.6,
    },
    actionsContainer: {
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
      gap: "2rem",
      margin: "2.5rem 0",
      position: "relative" as const,
      zIndex: 1,
    },
    additionalActions: {
      display: "flex",
      justifyContent: "center",
      marginTop: "1.8rem",
    },
    latexDownloadLink: {
      background:
        "linear-gradient(90deg, var(--primary, #4a6cf7) 0%, var(--accent, #00ccff) 100%)",
      backgroundColor: "#4a6cf7", // Fallback color
      color: "rgb(9, 8, 8)",
      border: "none",
      padding: "14px 28px",
      borderRadius: "50px",
      cursor: "pointer",
      fontSize: "1.1rem",
      fontWeight: 600,
      transition: "all 0.3s ease",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 6px 15px rgba(74, 108, 247, 0.3)",
      textDecoration: "none",
      textAlign: "center" as const,
    },
    resultsFooter: {
      textAlign: "center" as const,
      marginTop: "2rem",
      paddingTop: "1.5rem",
      borderTop: "1px solid #eaeaea",
      color: "#718096",
      fontSize: "0.95rem",
      position: "relative" as const,
      zIndex: 1,
    },
    decorativeCircle: {
      position: "absolute" as const,
      bottom: "-100px",
      right: "-100px",
      width: "250px",
      height: "250px",
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(74,108,247,0.08) 0%, rgba(0,204,255,0.03) 70%, rgba(255,255,255,0) 100%)",
      zIndex: 0,
    },
  };

  return (
    <div
      style={styles.pageBackground}
      className="w-full min-h-screen py-12 px-4 bg-gradient-to-br from-blue-500 to-green-400"
    >
      <div
        style={styles.resumeResults}
        className="relative max-w-5xl mx-auto p-10 bg-white rounded-xl shadow-xl overflow-hidden"
      >
        <div
          style={styles.decorativeBanner}
          className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-cyan-400"
        ></div>

        <div
          style={styles.decorativeCircle}
          className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-gradient-radial from-blue-100/10 via-cyan-100/5 to-transparent"
        ></div>

        <div
          style={styles.resultsHeader}
          className="text-center mb-10 pb-6 border-b border-red-500"
        >
          <h2
            style={styles.title}
            className="text-4xl font-bold text-gray-800 mb-2 drop-shadow-sm"
          >
            Your Resume is Ready!
          </h2>
          <p
            style={styles.subtitle}
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Your resume has been successfully processed using the {templateName}{" "}
            template.
          </p>
        </div>

        <div
          style={styles.actionsContainer}
          className="flex flex-col items-center gap-8 my-10 relative z-10"
        >
          <PdfViewer documentId={documentId} />

          <div
            style={styles.additionalActions}
            className="flex justify-center mt-7"
          >
            <a
              href={documentService.getLatexDownloadUrl(documentId)}
              style={styles.latexDownloadLink}
              className="bg-gradient-to-r from-blue-500 to-cyan-400 text-gray-900 py-3.5 px-7 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg shadow-blue-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/40 flex items-center justify-center"
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 20px rgba(74, 108, 247, 0.4)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow =
                  "0 6px 15px rgba(74, 108, 247, 0.3)";
              }}
            >
              Download LaTeX Source
            </a>
          </div>
        </div>

        <div
          style={styles.resultsFooter}
          className="text-center mt-8 pt-6 border-t border-gray-200 text-gray-500 text-sm relative z-10"
        >
          <p>You can view, download, or edit your resume as needed.</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeResults;
