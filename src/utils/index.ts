import axios from "axios";

export const BASE_URL = import.meta.env.VITE_BASE_URL;
export const API_KEY = import.meta.env.VITE_API_KEY;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});
