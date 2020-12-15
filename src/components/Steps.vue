<template>
  <div class="q-pa-xs">
    <div class="row q-pa-md">
      <div class="col-md-2 text-left q-pb-xs q-px-lg">
        Gracias por confiar en SGS Academy, <br> por favor favor termina tu matricula
        completando el siguiente formulario.
      </div>
      <div class="col-md-8 col-xs-12">
        <q-stepper
          v-model="step"
          ref="stepper"
          color="orange-14"
          animated
          :vertical="$q.screen.xs"
        >
          <q-step
            style="padding-left: 0px; padding-right: 0px;"
            :name="1"
            title="*1. Modalidad de capacitación:"
            icon="settings"
            :color="step == 1 ? 'orange-14' : 'black'"
            :done="step > 1"
            :style="$q.screen.xs ? '' : stilo"
          >
            <q-select
              v-model="model"
              :options="options"
              label="Selecciona tu Modalidad"
            />
          </q-step>

          <q-step
            :name="2"
            :title="`*2. ${model ? model : 'Diplomado'}`"
            icon="create_new_folder"
            :color="step == 2 ? 'orange-14' : 'black'"
            :done="step > 2"
            :style="$q.screen.xs ? '' : stilo"
          >
            <q-select
              v-model="model2"
              disable
              :options="options2"
              label="Selecciona tu una opcion"
            />
          </q-step>

          <q-step
            :name="3"
            title="*3. Datos personales"
            icon="assignment"
            :color="step == 3 ? 'orange-14' : 'black'"
            :done="step > 3"
            :style="$q.screen.xs ? '' : stilo"
          >
            <div class="">
              <div class="row">
                <div class="col">
                  <!-- {{get_buscarConsumidor}} -->
                  <q-form @submit="onSubmit" class="q-gutter-md">
                    <div class="row q-gutter-xs">
                      <div class="col">
                        <q-input
                          ref="nombres"
                          dense
                          v-model="form.nombres"
                          color="orange-14"
                          label="Nombres"
                          clearable
                          lazy-rules
                          :rules="[
                            val =>
                              (val && val.length > 0) || 'Campo obligatorio'
                          ]"
                        />
                      </div>
                      <div class="col">
                        <q-input
                          ref="apellidos"
                          dense
                          v-model="form.apellidos"
                          color="orange-14"
                          label="Apellidos"
                          clearable
                          lazy-rules
                          :rules="[
                            val =>
                              (val && val.length > 0) || 'Campo obligatorio'
                          ]"
                        />
                      </div>
                    </div>

                    <div class="row q-gutter-xs">
                      <div class="col">
                        <q-input
                          ref="documentIdentidad"
                          dense
                          v-model="form.documentIdentidad"
                          color="orange-14"
                          label="DNI/CE/RUC"
                          maxlength="12"
                          counter
                          clearable
                          lazy-rules
                          :rules="[
                            val =>
                              (val && val.length > 0) || 'Campo obligatorio'
                          ]"
                        />
                      </div>
                      <div class="col">
                        <q-input
                          ref="fechaNacimiento"
                          dense
                          v-model="form.fechaNacimiento"
                          color="orange-14"
                          label="Fecha de nacimiento:"
                          placeholder="DD/MM/AAAA"
                          counter
                          clearable
                          lazy-rules
                          :rules="[
                            val =>
                              (val && val.length > 0) || 'Campo obligatorio'
                          ]"
                        />
                      </div>
                    </div>

                    <div class="row q-gutter-xs">
                      <div class="col">
                        <q-input
                          ref="correoElectronico"
                          dense
                          v-model="form.correoElectronico"
                          color="orange-14"
                          label="Correo electrónico"
                          counter
                          clearable
                          lazy-rules
                          :rules="[
                            val =>
                              (val && val.length > 0) || 'Campo obligatorio'
                          ]"
                        />
                      </div>
                      <div class="col">
                        <q-input
                          ref="teleCelular"
                          dense
                          v-model="form.teleCelular"
                          color="orange-14"
                          label="N° de celular"
                          maxlength="9"
                          counter
                          clearable
                          lazy-rules
                          :rules="[
                            val =>
                              (val && val.length > 0) || 'Campo obligatorio'
                          ]"
                        />
                      </div>
                    </div>

                    <div class="row q-gutter-xs">
                      <div class="col">
                        <q-select
                          ref="distrito"
                          dense
                          v-model="form.distrito"
                          :options="distritoOptions"
                          label="Distrito:"
                          clearable
                          lazy-rules
                          :rules="[
                            val =>
                              (val && val.length > 0) || 'Campo obligatorio'
                          ]"
                        />
                      </div>
                      <div class="col">
                        <q-select
                          ref="provincia"
                          dense
                          v-model="form.provincia"
                          :options="provinciaOptions"
                          label="Provincia:"
                          clearable
                          lazy-rules
                          :rules="[
                            val =>
                              (val && val.length > 0) || 'Campo obligatorio'
                          ]"
                        />
                      </div>
                      <div class="col">
                        <q-select
                          ref="departamento"
                          dense
                          v-model="form.departamento"
                          :options="departamentoOptions"
                          label="Departamento:"
                          clearable
                          lazy-rules
                          :rules="[
                            val =>
                              (val && val.length > 0) || 'Campo obligatorio'
                          ]"
                        />
                      </div>
                    </div>

                    <div class="row q-gutter-xs">
                      <div class="col">
                        <q-input
                          ref="direccion"
                          dense
                          v-model="form.direccion"
                          color="orange-14"
                          label="Direccion"
                          clearable
                          lazy-rules
                          :rules="[
                            val =>
                              (val && val.length > 0) || 'Campo obligatorio'
                          ]"
                        />
                      </div>
                      <div class="col">
                        <q-input
                          ref="pais"
                          dense
                          v-model="form.pais"
                          color="orange-14"
                          label="País:"
                          clearable
                          lazy-rules
                          :rules="[
                            val =>
                              (val && val.length > 0) || 'Campo obligatorio'
                          ]"
                        />
                      </div>
                    </div>

                    <div class="row q-gutter-xs">
                      <div class="col">
                        <q-input
                          ref="enteraste"
                          dense
                          v-model="form.enteraste"
                          color="orange-14"
                          label="¿Cómo te enteraste del Curso/Diplomado/Programa:"
                          clearable
                          lazy-rules
                          :rules="[
                            val =>
                              (val && val.length > 0) || 'Campo obligatorio'
                          ]"
                        />
                      </div>
                      <div class="col">
                        <q-select
                          ref="otros"
                          dense
                          v-model="form.otros"
                          :options="options3"
                          label="Otro (especifique)"
                          clearable
                          lazy-rules
                          :rules="[
                            val =>
                              (val && val.length > 0) || 'Campo obligatorio'
                          ]"
                        />
                      </div>
                    </div>

                    <!-- <div align="center" class="q-gutter-lg">
                  <q-btn
                    label="Enviar"
                    :loading="loadboton"
                    type="submit"
                    size="sm"
                    color="orange-14"
                  />
                  <q-btn label="Reset" type="reset" size="sm" color="orange-14" />
                </div> -->
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
              </div>
            </div>
          </q-step>

          <q-step
            :name="4"
            title="4. Finalizar"
            icon="add_comment"
            :color="step == 4 ? 'orange-14' : 'black'"
            :style="$q.screen.xs ? '' : stilo"
          >
            <div style="text-align: center;">
              <span style="margin: 0px 0px 0px 0px;">
                <img width="100px" class="q-mt-sm" src="sgs-logo.png" alt="" />
              </span>
              <div class="text-h5">
                Registro correcto
              </div>
            </div>
          </q-step>

          <template v-slot:navigation>
            <q-stepper-navigation>
              <q-btn
                @click="lospaos()"
                color="orange-14"
                :label="step === 4 ? 'Terminar' : 'Continuar'"
              />
              <q-btn
                v-if="step > 1 && step < 4"
                flat
                color="orange-14"
                @click="$refs.stepper.previous()"
                label="Atras"
                class="q-ml-sm"
              />
            </q-stepper-navigation>
          </template>

          <!-- <template v-slot:message>
        <q-banner v-if="step === 1" class="q-pt-lg">
          <q-select v-model="model" :options="options" label="Selecciona tu Modalidad"/>
        </q-banner>
        <q-banner v-else-if="step === 2" class="q-pt-lg">
          <q-select v-model="model2" :options="options2" label="Selecciona tu una opcion"/>
        </q-banner>
      </template> -->
        </q-stepper>
      </div>

      <div class="col-md-2"></div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { addRegistro } from "../store/module-example/actions";
export default {
  computed: {
    ...mapGetters("example", ["get_buscarConsumidor"])
  },
  components: {
    // Form: () => import("components/NewForm")
  },
  data() {
    return {
      stilo: "min-height: 68vh",
      loadboton: false,
      form: {
        nombres: this.nombre,
        apellidos: this.apellido,
        documentIdentidad: this.documentIdentida,
        teleCelular: this.teleCelula,
        direccion: this.direccio,
        metodosDePagos: this.metodosDePago,
        fechaNacimiento: this.fechaNacimiento,
        correoElectronico: this.correoElectronico,
        distrito: this.distrito,
        provincia: this.provincia,
        departamento: this.departamento,
        pais: "PERU",
        enteraste: this.enteraste,
        otros: this.otros
      },
      submitResult: [],
      options: ["Diplomado", "Programa", "Curso y Taller", "Autogestionado"],
      options2: [
        "Dip. en Gerencia de la Calidad",
        "Dip. en Gestión de la Seguridad y Salud en el Trabajo",
        "Dip. en Sistemas Integrados de Gestión",
        "Dip. en Especialización Avanzada en Gestión de Procesos",
        "Dip. en Gestión Ambiental para Organizaciones Sostenibles"
      ],
      options3: [
        "Facebook",
        "Instagram",
        "LinkedIn",
        "Página web",
        "Webinar",
        "Recomendación"
      ],
      distritoOptions: ["Lima"],
      provinciaOptions: ["Lima"],
      departamentoOptions: ["Lima"],
      model: "",
      model2: "",
      model3: "",
      step: 1
    };
  },
  methods: {
    ...mapActions("example", ["addRegistro", "getRegistro"]),
    async onSubmit(evt) {
      this.loadboton = true;
      console.log("this.form");
      console.log(this.form);
      console.log("this.form");
      // this.$store.commit("example/data_form", this.form)
      await this.addRegistro({
        ...this.form,
        ...this.get_buscarConsumidor,
        modealidadCapa: this.model,
        tipoCapa: this.model2
      });
      this.$q.notify({
        message: "Registro Correcto",
        color: "green"
      });
      //   this.form.nombres = "";
      //   this.form.apellidos = "";
      //   this.form.documentIdentidad = "";
      //   this.form.teleCelular = "";
      //   this.form.direccion = "";
      //   this.form.metodosDePago = null;

      //   this.$refs.nombres.resetValidation();
      //   this.$refs.apellidos.resetValidation();
      //   this.$refs.documentIdentidad.resetValidation();
      //   this.$refs.teleCelular.resetValidation();
      //   this.$refs.direccion.resetValidation();
      //   this.$refs.metodosDePago.resetValidation();

      await this.getRegistro();
      this.loadboton = false;
    },
    lospaos() {
      console.log("this.step", this.step);
      if (this.step == 3) {
        console.log("this.step - dentro de if", this.step);
        // console.log("Se ejecuto guiardar");
        this.$refs.stepper.next();
        this.onSubmit();
        // this.$emit("guardarForm")
        this.$emit("qwe");
      } else if (this.step == 4) {
        location.href = "https://sgsacademy.pe/";
      } else {
        this.$refs.stepper.next();
      }
    }
  },
  async created() {
    // console.log(this.get_buscarConsumidor.meta_data);
    const array = this.get_buscarConsumidor.meta_data;
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      // console.log(element.key);
      switch (element.key) {
        case "_billing_field_748":
          this.form.correoElectronico = element.value;
          break;
        case "_billing_field_419":
          this.form.direccion = element.value;
          break;
        case "_billing_field_482":
          this.form.teleCelular = element.value;
          break;
        case "_billing_field_176":
          this.form.nombres = element.value;
          break;
        case "_billing_field_653":
          this.form.documentIdentidad = element.value;
          break;
        case "_billing_field_651":
          this.form.apellidos = element.value;
          break;
        case "_billing_field_695":
          this.form.correoElectronico = element.value;
          break;
        case "_billing_field_695":
          this.form.correoElectronico = element.value;
          break;
        case "_billing_field_695":
          this.form.correoElectronico = element.value;
          break;
        default:
          break;
      }
    }

    this.model2 = this.get_buscarConsumidor.line_items[0].name;
    this.form.fechaNacimiento = this.fechaNacimiento;
    this.form.distrito = this.distrito;
    this.form.provincia = this.provincia;
    this.form.departamento = this.departamento;
    this.form.pais = "PERU";
    this.form.enteraste = this.enteraste;
    this.form.otros = this.otros;
  }
};
</script>
<style>
#q-app > div > div > div.q-page-container {
  padding-top: 0px !important;
}
.q-stepper {
  box-shadow: 0px 0px 0px 0px !important;
  border-radius: 4px;
  background: #fff;
}
</style>
