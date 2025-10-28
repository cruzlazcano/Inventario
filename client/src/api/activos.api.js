import axios from "axios";

const apiact = axios.create({baseURL: "http://127.0.0.1:8000/api/equipos/",
});

export const getActivos = () => apiact.get("/");

export const createActivos = (equipos) => apiact.post("/", equipos);
 