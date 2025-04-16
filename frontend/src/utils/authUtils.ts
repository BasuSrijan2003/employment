// src/utils/authUtils.ts

// Session timeout in milliseconds (30 minutes)
export const SESSION_TIMEOUT = 30 * 60 * 1000;

// Create a new session
export const createAuthSession = (userType: string): void => {
  const expiresAt = new Date().getTime() + SESSION_TIMEOUT;
  
  localStorage.setItem('authSession', JSON.stringify({
    userType,
    expiresAt
  }));
};

// Check if a session exists and is valid
export const checkAuthSession = (): { isValid: boolean; userType: string | null } => {
  const storedSession = localStorage.getItem('authSession');
  
  if (!storedSession) {
    return { isValid: false, userType: null };
  }
  
  const parsedSession = JSON.parse(storedSession);
  const isValid = new Date().getTime() < parsedSession.expiresAt;
  
  if (!isValid) {
    localStorage.removeItem('authSession');
    return { isValid: false, userType: null };
  }
  
  return { isValid: true, userType: parsedSession.userType };
};

// Refresh the session expiration time
export const refreshAuthSession = (): void => {
  const storedSession = localStorage.getItem('authSession');
  
  if (storedSession) {
    const parsedSession = JSON.parse(storedSession);
    parsedSession.expiresAt = new Date().getTime() + SESSION_TIMEOUT;
    localStorage.setItem('authSession', JSON.stringify(parsedSession));
  }
};

// Clear the session
export const clearAuthSession = (): void => {
  localStorage.removeItem('authSession');
};
