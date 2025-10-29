import axios from "axios";

// baseURL without trailing slash; include trailing slash on detail endpoints to
// match Django REST Framework's router (which expects /resource/ and /resource/{id}/)
const apiact = axios.create({ baseURL: "http://127.0.0.1:8000/api/equipos" });

export const getActivos = () => apiact.get("/");

export const createActivos = (equipos) => apiact.post("/", equipos);

// use trailing slash for detail endpoints to avoid redirects that break DELETE
export const deleteActivos = (id) => apiact.delete(`/${id}/`);

export const getActivosId = (id) => apiact.get(`/${id}/`);

export const updateActivos = (id, equipos) => apiact.put(`/${id}/`, equipos);
