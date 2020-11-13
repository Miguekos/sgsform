<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-12 col-md-2"></div>
      <div class="col-12 col-md-8">
        <q-form @submit="onSubmit" class="q-gutter-md">
          <div class="row q-gutter-xs">
            <div class="col">
              <q-input
                name="nombres"
                v-model="nombres"
                color="primary"
                label="Nombres"
                filled
                clearable
                lazy-rules
                :rules="[val => (val && val.length > 0) || 'Campo obligatorio']"
              />
            </div>
            <div class="col">
              <q-input
                name="apellidos"
                v-model="apellidos"
                color="primary"
                label="Apellidos"
                filled
                clearable
                lazy-rules
                :rules="[val => (val && val.length > 0) || 'Campo obligatorio']"
              />
            </div>
          </div>

          <div class="row q-gutter-xs">
            <div class="col">
              <q-input
                name="documentIdentidad"
                v-model="documentIdentidad"
                color="primary"
                label="DNI/CE/RUC"
                filled
                maxlength="12"
                counter
                clearable
                lazy-rules
                :rules="[val => (val && val.length > 0) || 'Campo obligatorio']"
              />
            </div>
            <div class="col">
              <q-input
                name="teleCelular"
                v-model="teleCelular"
                color="primary"
                label="Telefono/Celular"
                filled
                maxlength="9"
                counter
                clearable
                lazy-rules
                :rules="[val => (val && val.length > 0) || 'Campo obligatorio']"
              />
            </div>
          </div>

          <div class="row q-gutter-xs">
            <div class="col">
              <q-input
                name="direccion"
                v-model="direccion"
                color="primary"
                label="Direccion"
                filled
                clearable
                lazy-rules
                :rules="[val => (val && val.length > 0) || 'Campo obligatorio']"
              />
            </div>
            <div class="col">
              <q-select
                name="metodosDePagos"
                filled
                v-model="metodosDePagos"
                :options="options"
                label="Metodos de pagos"
                clearable
                lazy-rules
                :rules="[val => (val && val.length > 0) || 'Campo obligatorio']"
              />
            </div>
          </div>

          <div align="center">
            <q-btn label="Enviar" type="submit" color="primary" />
          </div>
        </q-form>
        <q-card
          v-if="submitResult.length > 0"
          flat
          bordered
          class="q-mt-md bg-grey-2"
        >
          <q-card-section
            >Submitted form contains the following formData (key =
            value):</q-card-section
          >
          <q-separator />
          <q-card-section class="row q-gutter-sm items-center">
            <div
              v-for="(item, index) in submitResult"
              :key="index"
              class="q-px-sm q-py-xs bg-grey-8 text-white rounded-borders text-center text-no-wrap"
            >
              {{ item.name }} = {{ item.value }}
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-2"></div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      options: ["Deposito", "TDC"],
      name: "Jane Doe",
      nombres: "",
      apellidos: "",
      documentIdentidad: "",
      teleCelular: "",
      direccion: "",
      metodosDePagos: "",
      submitResult: []
    };
  },

  methods: {
    ...mapActions("example", ["addRegistro", "getRegistro"]),
    async onSubmit(evt) {
      await this.addRegistro({
        nombres: this.nombres,
        apellidos: this.apellidos,
        documentIdentidad: this.documentIdentidad,
        teleCelular: this.teleCelular,
        direccion: this.direccion,
        metodosDePagos: this.metodosDePagos
      });
      await this.getRegistro();
    }
  }
};
</script>
