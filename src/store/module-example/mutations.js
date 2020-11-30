export function getRegistro(state, payload) {
  state.getRegistro = payload;
}

export function get_buscarConsumidor(state, payload) {
  state.get_buscarConsumidor = payload;
}

export function data_form(state, payload) {
  console.log("payload_data_form", payload);
  state.data_form = payload;
}