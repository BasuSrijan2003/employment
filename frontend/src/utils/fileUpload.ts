export const uploadFileToServer = async (file: File, template: string = 'iit') => {
  if (file.size > 5 * 1024 * 1024) {
    return {
      status: 'error',
      message: 'File too large (max 5MB)'
    };
  }

  try {
    console.log('Starting upload of:', file.name);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('template', template);

    const apiBaseUrl = window.location.origin.includes('localhost') 
      ? 'http://localhost:5000' 
      : process.env.REACT_APP_API_URL || window.location.origin;
    const response = await fetch(`${apiBaseUrl}/upload`, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      try {
        const errorData = await response.json();
        return {
          status: 'error',
          message: errorData.message || 'Upload failed'
        };
      } catch (e) {
        return {
          status: 'error',
          message: `Server error: ${response.status} ${response.statusText}`
        };
      }
    }

    const result = await response.json();
    console.log('Upload success:', result);
    return result;

  } catch (error) {
    console.error('Upload error:', error);
    return {
      status: 'error',
      message: error instanceof Error ? 
        `Upload failed: ${error.message}` : 
        'Failed to process file. Please check console for details.'
    };
  }
};
