import axios from "axios";

const api = axios.create({
  baseURL: "https://api.npoint.io/",
  timeout: 3500,
});

const getSteps = async () => api.get("55614fb93c3ef732f73b");

export { getSteps };
