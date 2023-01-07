import axios from "axios";

export const instance = axios.create({
  baseURL: "https://themailbox-api.onrender.com/api",
  withCredentials: true,
});
