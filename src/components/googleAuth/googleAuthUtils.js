

export const loadGisScript = () => {
  return new Promise((resolve, reject) => {
    if (window.google && window.google.accounts) {
      resolve(window.google.accounts);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = () => resolve(window.google.accounts);
    script.onerror = () => reject(new Error('Failed to load Google Identity Services script'));
    document.head.appendChild(script);
  });
};

let tokenClient = null;

export const authenticateYouTube = async (skipPrompt = false) => {
  try {
    const accounts = await loadGisScript();
    
    return new Promise((resolve, reject) => {
      if (!tokenClient) {
        tokenClient = accounts.oauth2.initTokenClient({
          client_id: '1002730959732-lc7vramqcgk63pbltqd1qh7ehl2llff6.apps.googleusercontent.com',
          scope: 'https://www.googleapis.com/auth/youtube.readonly',
          callback: (response) => {
            if (response && response.access_token) {
              localStorage.setItem('youtube_access_token', response.access_token);
              resolve(response.access_token);
            } else {
              reject(new Error('Failed to get access token'));
            }
          },
        });
      }
      
      tokenClient.requestAccessToken({
        prompt: skipPrompt ? '' : 'consent'
      });
    });
  } catch (error) {
    console.error("Error during YouTube authentication:", error);
    throw error;
  }
};