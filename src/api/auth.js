import api from "./api";

export const login = credentials => api.user.login(credentials);

export const cuentas = cliente => api.user.cuentas(cliente);
