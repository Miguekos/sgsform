<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-12 col-md-2"></div>
      <div class="col-12 col-md-8">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <div class="row q-gutter-xs">
            <div class="col">
              <q-input
                ref="nombres"
                v-model="form.nombres"
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
                ref="apellidos"
                v-model="form.apellidos"
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
                ref="documentIdentidad"
                v-model="form.documentIdentidad"
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
                ref="teleCelular"
                v-model="form.teleCelular"
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
                ref="direccion"
                v-model="form.direccion"
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
                ref="metodosDePagos"
                filled
                v-model="form.metodosDePagos"
                :options="options"
                label="Metodos de pagos"
                clearable
                lazy-rules
                :rules="[val => (val && val.length > 0) || 'Campo obligatorio']"
              />
            </div>
          </div>

          <div align="center" class="q-gutter-lg">
            <q-btn
              label="Enviar"
              :loading="loadboton"
              type="submit"
              size="sm"
              color="primary"
            />
            <q-btn label="Reset" type="reset" size="sm" color="orange" />
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
import { addRegistro } from "../store/module-example/actions";
export default {
  data() {
    return {
      loadboton: false,
      form: {
        nombres: this.nombres,
        apellidos: this.apellidos,
        documentIdentidad: this.documentIdentidad,
        teleCelular: this.teleCelular,
        direccion: this.direccion,
        metodosDePagos: this.metodosDePagos
      },
      options: ["Deposito", "TDC"],
      name: "Jane Doe",
      submitResult: []
    };
  },

  methods: {
    ...mapActions("example", ["addRegistro", "getRegistro"]),
    onReset() {
      this.$refs.nombres.resetValidation();
      this.$refs.apellidos.resetValidation();
      this.$refs.documentIdentidad.resetValidation();
      this.$refs.teleCelular.resetValidation();
      this.$refs.direccion.resetValidation();
      // this.$refs.metodosDePago.resetValidation();
      this.form.metodosDePago = null;
    },
    async onSubmit(evt) {
      this.loadboton = true;
      await this.addRegistro(this.form);
      this.$q.notify({
        message: "Registro Correcto",
        color: "green"
      });
      this.form.nombres = "";
      this.form.apellidos = "";
      this.form.documentIdentidad = "";
      this.form.teleCelular = "";
      this.form.direccion = "";
      this.form.metodosDePago = null;

      this.$refs.nombres.resetValidation();
      this.$refs.apellidos.resetValidation();
      this.$refs.documentIdentidad.resetValidation();
      this.$refs.teleCelular.resetValidation();
      this.$refs.direccion.resetValidation();
      this.$refs.metodosDePago.resetValidation();

      await this.getRegistro();
      this.loadboton = false;
    }
  }
};
</script>
