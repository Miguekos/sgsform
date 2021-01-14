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
export function get_depart(state, payload) {
  console.log("payload_get_depart", payload);
  state.get_depart = payload;
}
export function get_provin(state, payload) {
  console.log("payload_get_provin", payload);
  state.get_provin = payload;
}
export function get_distridistri(state, payload) {
  console.log("payload_get_distridistri", payload);
  state.get_distridistri = payload;
}
