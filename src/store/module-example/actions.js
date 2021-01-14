import { axiosInstance } from "boot/axios";

/* eslint-disable */
export async function addRegistro({ commit }, payload) {
  console.log("Agregar registro");
  const response = await axiosInstance.post("/sgsform/add", payload);
  return response.data;
}

/* eslint-disable */
export async function getRegistro({ commit }) {
  console.log("Listar registro");
  const response = await axiosInstance.get("/sgsform/get");
  commit("getRegistro", response.data);
}

/* eslint-disable */
export async function call_buscarConsumidor({ commit }, payload) {
  console.log("Listar registro");
  const response = await axiosInstance.get(`/sgsform/ordenes/id/${payload}`);
  commit("get_buscarConsumidor", response.data);
}

/* eslint-disable */
export async function call_depart({ commit }) {
  console.log("Listar registro");
  const response = await axiosInstance.get(`/sgsform/depart`);
  commit("get_depart", response.data);
}

/* eslint-disable */
export async function call_provin({ commit }, payload) {
  console.log("Listar registro");
  const response = await axiosInstance.get(`/sgsform/provin/${payload}`);
  commit("get_provin", response.data);
}

/* eslint-disable */
export async function call_distridistri({ commit }, payload) {
  console.log("Listar registro");
  const response = await axiosInstance.get(`/sgsform/distri/${payload}`);
  commit("get_distridistri", response.data);
}
