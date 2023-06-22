import axios from "axios";

const API = axios.create({
  baseURL: "https://flytix-c9.up.railway.app/api/v1",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
  },
});

export default API;
