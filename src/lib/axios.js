import axios from "axios";

const apiBackend = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

export default apiBackend;
