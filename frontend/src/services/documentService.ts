import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export interface DocumentResponse {
  status: string;
  message: string;
  document_id?: string;
  template_used?: string;
  latex?: string;
}

export const documentService = {
  async uploadResume(file: File, template: string): Promise<DocumentResponse> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('template', template);

    const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    
    return response.data;
  },

  getLatexDownloadUrl(documentId: string): string {
    return `${API_BASE_URL}/download/latex/?doc_id=${documentId}`;
  },

  getPdfDownloadUrl(documentId: string): string {
    return `${API_BASE_URL}/download/pdf/?doc_id=${documentId}`;
  },

  async viewPdf(documentId: string): Promise<Blob> {
    const response = await axios.get(`${API_BASE_URL}/download/pdf/?doc_id=${documentId}`, {
      responseType: 'blob'
    });
    return response.data;
  }
};
