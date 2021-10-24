import axios from 'axios'

const api = axios.create({
    baseURL: "https://api.jikan.moe/",
  });
  
  export default api;