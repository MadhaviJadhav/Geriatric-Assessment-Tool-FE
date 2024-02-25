import axios from "axios";

// Ensure you have the necessary types for your environment variables
interface ImportMetaEnv {
  VITE_BASE_URL: string;
  // Add other environment variables as needed
}

const token: string = "";

// Access environment variable using import.meta.env
const baseURL: string = 'http://localhost:3001';

const custom_axios = axios.create({
  baseURL,
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
    Accept: "*/*",
    "Content-Type": "application/json"
  },
  timeout: 5000,
});

export default custom_axios;
