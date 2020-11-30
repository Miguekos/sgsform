import axios from "axios";
axios.defaults.withCredentials = true;
const axiosInstance = axios.create({
  // baseURL: "http://95.111.235.214:4100"
  // baseURL: "http://192.168.1.2:3434"
  baseURL: "https://api.apps.com.pe/"
});

export default ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance;
};

export { axiosInstance };
