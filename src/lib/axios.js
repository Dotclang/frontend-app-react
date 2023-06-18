import axios from "axios";

const apiBackend = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});

export default apiBackend;
