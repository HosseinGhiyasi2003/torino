import { getCookie } from "@/utils/cookie";
import axios from "axios";

const api = axios.create({
  // baseURL: process.env.BASE_URL,
  baseURL: 'http://localhost:6500/',
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((request) => {
  const token = getCookie("accessToken");

  if (token) {
    request.headers["Authorization"] = `Bearer ${token}`;
  }
  return request
});

export default api