import axios from "axios";

const API = axios.create({
  baseURL: "https://flytix-c9.up.railway.app/api/v1",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${
      localStorage.getItem("token") === undefined
        ? "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6InVzZXIiLCJwaG90byI6Imh0dHBzOi8vaWsuaW1hZ2VraXQuaW8vcHVibGljdXJsL0lNR18xNjg4MzcwMzkzODI5X0FWcHpNN05yUS5qcGVnIiwiaWF0IjoxNjg4NTcwNjgwfQ.it6IZ43D2dO0Jdt_bnXrVE7uYgVG30FRnjAJTTGRHQ0"
        : localStorage.getItem("token")
    }`,
  },
});

export default API;
