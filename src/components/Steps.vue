<template>
  <div class="q-pa-md">
<div class="row">
<div class="col-md-2">

</div>
<div class="col-md-8 col-xs-12">

    <q-stepper
      v-model="step"
      ref="stepper"
      color="primary"
      animated
      :vertical="$q.screen.xs"
    >
      <q-step
        :name="1"
        title="*1. Modalidad de capacitación:"
        icon="settings"
        :done="step > 1"
      >
  <q-select v-model="model" :options="options" label="Selecciona tu Modalidad"/>
      </q-step>

      <q-step
        :name="2"
        :title="`*2. ${model ? model : 'Diplomado'}`"
        icon="create_new_folder"
        :done="step > 2"
      >
      <q-select v-model="model2" :options="options2" label="Selecciona tu una opcion"/>
      </q-step>

      <q-step
        :name="3"
        title="*3. Datos personales"
        icon="assignment"
        :done="step > 3"
      >
         <div class="q-pa-md">
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
                      dense
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
                      dense
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
                      ref="fechaNacimiento"
                      dense
                      v-model="form.fechaNacimiento"
                      color="primary"
                      label="Fecha de nacimiento:"
                      filled
                      placeholder="DD/MM/AAAA"
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
                      ref="correoElectronico"
                      dense
                      v-model="form.correoElectronico"
                      color="primary"
                      label="Correo electrónico"
                      filled
                      counter
                      clearable
                      lazy-rules
                      :rules="[val => (val && val.length > 0) || 'Campo obligatorio']"
                    />
                  </div>
                  <div class="col">
                    <q-input
                      ref="teleCelular"
                      dense
                      v-model="form.teleCelular"
                      color="primary"
                      label="N° de celular"
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
                    <q-select
                      ref="distrito"
                      dense
                      filled
                      v-model="form.distrito"
                      :options="options"
                      label="Distrito:"
                      clearable
                      lazy-rules
                      :rules="[val => (val && val.length > 0) || 'Campo obligatorio']"
                    />
                  </div>
                  <div class="col">
                    <q-select
                      ref="provincia"
                      dense
                      filled
                      v-model="form.provincia"
                      :options="options"
                      label="Provincia:"
                      clearable
                      lazy-rules
                      :rules="[val => (val && val.length > 0) || 'Campo obligatorio']"
                    />
                  </div>
                  <div class="col">
                    <q-select
                      ref="departamento"
                      dense
                      filled
                      v-model="form.departamento"
                      :options="options"
                      label="Departamento:"
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
                      dense
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
                    <q-input
                      ref="pais"
                      dense
                      v-model="form.pais"
                      color="primary"
                      label="País:"
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
                      ref="enteraste"
                      dense
                      v-model="form.enteraste"
                      color="primary"
                      label="¿Cómo te enteraste del Curso/Diplomado/Programa:"
                      filled
                      clearable
                      lazy-rules
                      :rules="[val => (val && val.length > 0) || 'Campo obligatorio']"
                    />
                  </div>
                  <div class="col">
                    <q-select
                      ref="otros"
                      dense
                      filled
                      v-model="form.otros"
                      :options="options"
                      label="Otro (especifique)"
                      clearable
                      lazy-rules
                      :rules="[val => (val && val.length > 0) || 'Campo obligatorio']"
                    />
                  </div>
                </div>


                <!-- <div align="center" class="q-gutter-lg">
                  <q-btn
                    label="Enviar"
                    :loading="loadboton"
                    type="submit"
                    size="sm"
                    color="primary"
                  />
                  <q-btn label="Reset" type="reset" size="sm" color="orange" />
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
          <q-btn @click="lospaos()" color="primary" :label="step === 4 ? 'Terminar' : 'Continuar'" />
          <q-btn v-if="step > 1 && step == 3" flat color="primary" @click="$refs.stepper.previous()" label="Atras" class="q-ml-sm" />
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

    <div class="col-md-2">

</div>
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
  data () {
    return {
       loadboton: false,
      form: {
        nombres: this.nombre,
        apellidos: this.apellido,
        documentIdentidad: this.documentIdentida,
        teleCelular: this.teleCelula,
        direccion: this.direccio,
        metodosDePagos: this.metodosDePago,
        fechaNacimiento : this.fechaNacimiento,
        correoElectronico : this.correoElectronico,
        distrito : this.distrito,
        provincia : this.provincia,
        departamento : this.departamento,
        pais : this.pais,
        enteraste : this.enteraste,
        otros : this.otros,
      },
      submitResult: [],
      options: ["Diplomado", "Programa", "Curso y Taller", "Autogestionado"],
      options2: ["Dip. en Gerencia de la Calidad", "Dip. en Gestión de la Seguridad y Salud en el Trabajo", "Dip. en Sistemas Integrados de Gestión", "Dip. en Especialización Avanzada en Gestión de Procesos", "Dip. en Gestión Ambiental para Organizaciones Sostenibles"],
      options3: ["Facebook", "Instagram", "LinkedIn", "Página web", "Webinar", "Recomendación"],
      model: "",
      model2: "",
      model3: "",
      step: 1
    }
  },
  methods: {
    ...mapActions("example", ["addRegistro", "getRegistro"]),
        async onSubmit(evt) {
      this.loadboton = true;
      console.log("this.form");
      console.log(this.form);
      console.log("this.form");
      this.$store.commit("example/data_form", this.form)
    //   await this.addRegistro(this.form);
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
    lospaos(){
      console.log("this.step", this.step);
      if (this.step == 3) {
          console.log("this.step - dentro de if", this.step);
          // console.log("Se ejecuto guiardar");
          this.$refs.stepper.next()
          this.onSubmit()
          // this.$emit("guardarForm")
          this.$emit("qwe")
      } else {
        this.$refs.stepper.next()
      }
    }
  },
  async created () {
     this.form.nombres = this.get_buscarConsumidor.billing.first_name;
    this.form.apellidos= this.get_buscarConsumidor.billing.last_name;
    this.form.documentIdentidad= this.documentIdentidad;
    this.form.teleCelular= this.get_buscarConsumidor.billing.phone;
    this.form.direccion= this.get_buscarConsumidor.billing.address_1;
    this.form.metodosDePagos= this.metodosDePagos;
    this.form.fechaNacimiento = this.fechaNacimiento;
    this.form.correoElectronico = this.get_buscarConsumidor.billing.email;
    this.form.distrito = this.distrito;
    this.form.provincia = this.provincia;
    this.form.departamento = this.departamento;
    this.form.pais = this.get_buscarConsumidor.billing.country;
    this.form.enteraste = this.enteraste;
    this.form.otros = this.otros;
  }
}
</script>