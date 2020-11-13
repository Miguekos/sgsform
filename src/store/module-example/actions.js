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
