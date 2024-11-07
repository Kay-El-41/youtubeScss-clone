import axios from "axios";


const request = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: {
    key:import.meta.env.VITE_YOUTUBE_API_KEY
  },
  headers: {
    Authorization: `Bearer ${localStorage.getItem('youtube_access_token')}`
  },
})

// Add an interceptor to add the token before each request
request.interceptors.request.use((config) => {
  const token = localStorage.getItem('youtube_access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

 export default request
