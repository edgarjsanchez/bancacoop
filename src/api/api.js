import axios from "axios";
import { API_URL } from "react-native-dotenv";

var axiosrequest = axios.create();
axiosrequest.defaults.timeout = 2500;

export default {
  user: {
    login: credentials =>
      axiosrequest
        .post(API_URL + "/api/auth", { credentials })
        .then(res => res.data.user),
    getCuentas: cliente =>
      axiosrequest
        .post(API_URL + "/api/cuentas", { cliente })
        .then(res => res.data.cuentas),
    getPrestamos: cliente =>
      axiosrequest
        .post(API_URL + "/api/prestamos", { cliente })
        .then(res => res.data.prestamos)
  }
};
