import api from "./api";

export const login = credentials => api.user.login(credentials);

export const getCuentas = cliente => api.user.getCuentas(cliente);
