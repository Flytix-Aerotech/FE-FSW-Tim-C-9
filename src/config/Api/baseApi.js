import axios from "axios";

const API = axios.create({
  baseURL: "https://flytix-aerotech.up.railway.app/api/v1",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
  },
});

export default API;
