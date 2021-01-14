<template>
  <div class="q-pa-xs">
    <div
      id="probar"
      v-if="!$q.screen.xs"
      class="q-pa-lg"
      style="text-align: center; text-align: -webkit-center;"
    >
      Gracias por confiar en SGS Academy, por favor favor termina tu matricula
      completando el siguiente formulario.
    </div>
    <div :class="$q.screen.xs ? '' : 'justify-center'" class="row">
      <div v-if="$q.screen.xs" class="col-md-2 text-left q-pb-xs q-px-lg">
        Gracias por confiar en SGS Academy, <br />
        por favor favor termina tu matricula completando el siguiente
        formulario.
      </div>
      <!-- <div class="col-md-2 text-left q-pb-xs q-px-lg"> -->
      <!-- Gracias por confiar en SGS Academy, <br />
        por favor favor termina tu matricula completando el siguiente
        formulario. -->
      <!-- </div> -->
      <div class="col-md-2"></div>
      <div class="col-md-8 col-xs-12" style="width: 85%">
        <q-stepper
          v-model="step"
          ref="stepper"
          color="orange-14"
          animated
          swipeable
          :vertical="$q.screen.xs"
        >
          <q-step
            :name="1"
            title="*Modalidad de capacitación"
            prefix="1"
            :color="step == 1 ? 'orange-14' : 'black'"
            :style="$q.screen.xs ? '' : stilo"
          >
            <q-select
              v-model="model"
              dense
              disable
              :options="options"
              label="Selecciona tu Modalidad"
            />
          </q-step>

          <q-step
            :name="2"
            :title="`*Nombre del curso`"
            prefix="2"
            :color="step == 2 ? 'orange-14' : 'black'"
            :style="$q.screen.xs ? '' : stilo"
          >
            <q-select
              v-model="model2"
              disable
              dense
              :options="options2"
              label="Selecciona tu una opcion"
            />
          </q-step>

          <q-step
            :name="3"
            title="*Datos personales"
            prefix="3"
            :color="step == 3 ? 'orange-14' : 'black'"
            :style="$q.screen.xs ? '' : stilo"
          >
            <div class="">
              <div class="row">
                <div class="col">
                  <!-- {{get_buscarConsumidor}} -->
                  <!-- <q-form @submit="onSubmit" class="q-gutter-md"> -->
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
                          val => (val && val.length > 0) || 'Campo obligatorio'
                        ]"
                      />
                    </div>
                  </div>
                  <div class="row q-gutter-xs">
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
                          val => (val && val.length > 0) || 'Campo obligatorio'
                        ]"
                      />
                    </div>
                  </div>
                  <div class="row q-gutter-xs">
                    <div class="col">
                      <q-select
                        ref="tipodocumento"
                        dense
                        color="orange-14"
                        v-model="form.tipodocumento"
                        :options="options_tipodoc"
                        label="Tip. Doc"
                        clearable
                        lazy-rules
                        :rules="[
                          val => (val && val.length > 0) || 'Campo obligatorio'
                        ]"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        ref="documentIdentidad"
                        dense
                        v-model="form.documentIdentidad"
                        color="orange-14"
                        label="Número de documento"
                        maxlength="12"
                        counter
                        clearable
                        lazy-rules
                        :rules="[
                          val => (val && val.length > 0) || 'Campo obligatorio'
                        ]"
                      />
                    </div>
                  </div>
                  <div class="row q-gutter-xs">
                    <div class="col">
                      <q-input
                        label="Fecha de nacimiento"
                        ref="fechaNacimiento"
                        dense
                        color="orange-14"
                        v-model="form.fechaNacimiento"
                        mask="date"
                        :rules="['date']"
                      >
                        <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy
                              ref="qDateProxy"
                              transition-show="scale"
                              transition-hide="scale"
                            >
                              <q-date
                                default-view="Years"
                                color="orange-14"
                                v-model="form.fechaNacimiento"
                              >
                                <div class="row items-center justify-end">
                                  <q-btn
                                    v-close-popup
                                    label="Close"
                                    color="primary"
                                    flat
                                  />
                                </div>
                              </q-date>
                            </q-popup-proxy>
                          </q-icon>
                        </template>
                      </q-input>
                      <!--                      <q-input-->
                      <!--                        ref="fechaNacimiento"-->
                      <!--                        dense-->
                      <!--                        v-model="form.fechaNacimiento"-->
                      <!--                        color="orange-14"-->
                      <!--                        label="Fecha de nacimiento:"-->
                      <!--                        placeholder="DD/MM/AAAA"-->
                      <!--                        counter-->
                      <!--                        clearable-->
                      <!--                        lazy-rules-->
                      <!--                        :rules="[-->
                      <!--                          val => (val && val.length > 0) || 'Campo obligatorio'-->
                      <!--                        ]"-->
                      <!--                      />-->
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
                          val => (val && val.length > 0) || 'Campo obligatorio'
                        ]"
                      />
                    </div>
                  </div>

                  <div class="row q-gutter-xs">
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
                          val => (val && val.length > 0) || 'Campo obligatorio'
                        ]"
                      />
                    </div>
                  </div>

                  <div class="row q-gutter-xs">
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
                          val => (val && val.length > 0) || 'Campo obligatorio'
                        ]"
                      />
                    </div>
                  </div>

                  <div class="row q-gutter-xs">
                    <div class="col">
                      <!--                      {{ get_depart.result }}-->
                      <q-select
                        ref="region"
                        dense
                        color="orange-14"
                        @input="getProv"
                        v-model="form.region"
                        :options="get_depart.result"
                        option-label="name"
                        option-value="id"
                        emit-value
                        map-options
                        label="Región:"
                        clearable
                        lazy-rules
                        :rules="[
                          val => (val && val.length > 0) || 'Campo obligatorio'
                        ]"
                      />
                    </div>
                  </div>
                  <div class="row q-gutter-xs">
                    <div class="col">
                      <!--                      {{ get_provin.result }}-->
                      <q-select
                        ref="ciudad"
                        dense
                        color="orange-14"
                        @input="getDistri"
                        v-model="form.ciudad"
                        :options="get_provin.result"
                        option-value="id"
                        option-label="name"
                        emit-value
                        map-options
                        label="Ciudad:"
                        clearable
                        lazy-rules
                        :rules="[
                          val => (val && val.length > 0) || 'Campo obligatorio'
                        ]"
                      />
                    </div>
                  </div>
                  <div class="row q-gutter-xs">
                    <div class="col">
                      <q-select
                        ref="distrito"
                        dense
                        color="orange-14"
                        v-model="form.distrito"
                        :options="get_distridistri.result"
                        option-value="id"
                        option-label="name"
                        emit-value
                        map-options
                        label="Distrito:"
                        clearable
                        lazy-rules
                        :rules="[
                          val => (val && val.length > 0) || 'Campo obligatorio'
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
                          val => (val && val.length > 0) || 'Campo obligatorio'
                        ]"
                      />
                    </div>
                  </div>

                  <div class="row q-gutter-xs">
                    <div class="col">
                      ¿Cómo te enteraste de SGS Academy?
                      <q-select
                        ref="enterarte"
                        dense
                        color="orange-14"
                        v-model="form.enterarte"
                        :options="options3"
                        label="Soluciona uno"
                        clearable
                        lazy-rules
                        :rules="[
                          val => (val && val.length > 0) || 'Campo obligatorio'
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
                  <!-- </q-form> -->
                  <!-- <q-card
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
                  </q-card> -->
                </div>
              </div>
            </div>
          </q-step>

          <q-step
            :name="4"
            title="*Datos académicos"
            prefix="4"
            :color="step == 4 ? 'orange-14' : 'black'"
            :style="$q.screen.xs ? '' : stilo"
          >
            <div style="text-align: center;">
              <q-input
                ref="Industriaogiro"
                dense
                v-model="form.Industriaogiro"
                color="orange-14"
                label="Industria o giro"
                clearable
                lazy-rules
                :rules="[val => (val && val.length > 0) || 'Campo obligatorio']"
              />
              <q-input
                ref="areadondetrabaja"
                dense
                v-model="form.areadondetrabaja"
                color="orange-14"
                label="Área donde trabaja"
                clearable
                lazy-rules
                :rules="[val => (val && val.length > 0) || 'Campo obligatorio']"
              />
              <q-input
                ref="Cargoopuesto"
                dense
                v-model="form.Cargoopuesto"
                color="orange-14"
                label="Cargo o puesto"
                clearable
                lazy-rules
                :rules="[val => (val && val.length > 0) || 'Campo obligatorio']"
              />
              <q-input
                ref="Centrodetrabajo"
                dense
                v-model="form.Centrodetrabajo"
                color="orange-14"
                label="Centro  de trabajo"
                clearable
                lazy-rules
                :rules="[val => (val && val.length > 0) || 'Campo obligatorio']"
              />
            </div>
          </q-step>

          <q-step
            :name="5"
            title="*Metodo de pago"
            prefix="5"
            :color="step == 5 ? 'orange-14' : 'black'"
            :style="$q.screen.xs ? '' : stilo"
          >
            <div style="text-align: left;">
              Por favor elige el comprobante de pago de tu preferencia:
              <div class="">
                <div class="q-gutter-sm">
                  <q-radio
                    v-model="radio"
                    color="orange"
                    val="Boleta"
                    label="Boleta"
                  />
                  <q-radio
                    v-model="radio"
                    color="orange"
                    val="Factura"
                    label="Factura"
                  />
                </div>
              </div>
              <q-separator spaced inset vertical dark />
              <div class="">
                <!--                {{ radio }}-->
                <div v-if="radio === 'Factura'" class="q-gutter-sm">
                  <q-input dense color="orange" v-model="ruc" label="R.U.C" />
                  <q-input
                    dense
                    color="orange"
                    v-model="razonsocial"
                    label="Razon Social"
                  />
                  <q-input
                    dense
                    color="orange"
                    v-model="DireccionFiscal"
                    label="Dirección Fiscal"
                  />
                  <q-input
                    dense
                    color="orange"
                    v-model="Nombre"
                    label="Nombre"
                  />
                  <q-input
                    dense
                    color="orange"
                    v-model="Numerodecelular"
                    label="Celular"
                  />
                </div>
              </div>
            </div>
          </q-step>

          <q-step
            :name="6"
            title="*Finalizar"
            prefix="6"
            :color="step == 6 ? 'orange-14' : 'black'"
            :style="$q.screen.xs ? '' : stilo"
          >
            <div style="text-align: left;">
              <div class="q-gutter-sm">
                <q-checkbox
                  color="orange-14"
                  v-model="terminos"
                  label="Aceplos teminos y condiciones"
                />
              </div>
              <q-separator spaced inset vertical dark />
              <br />
              <div class="">
                ¿Desea recibir informacion, promociones y/o descuientos sobre
                SGS Academy?
                <div class="">
                  <div class="">
                    <q-radio
                      keep-color
                      v-model="form.shapeRecibirinfo"
                      val="si"
                      label="Si"
                      color="orange"
                    />
                  </div>
                  <div class="">
                    <q-radio
                      keep-color
                      v-model="form.shapeRecibirinfo"
                      val="no"
                      label="No"
                      color="orange"
                    />
                  </div>
                </div>
              </div>
            </div>
          </q-step>

          <template v-slot:navigation>
            <q-stepper-navigation>
              <q-btn
                @click="lospaos()"
                color="orange-14"
                :label="step === 6 ? 'Terminar' : 'Continuar'"
              />
              <q-btn
                v-if="step > 1 && step < 6"
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
    <!--    {{ $data.form }}-->
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { addRegistro } from "../store/module-example/actions";

export default {
  computed: {
    ...mapGetters("example", [
      "get_buscarConsumidor",
      "get_depart",
      "get_provin",
      "get_distridistri"
    ])
  },
  components: {
    // Form: () => import("components/NewForm")
  },
  data() {
    return {
      ruc: "",
      razonsocial: "",
      DireccionFiscal: "",
      Nombre: "",
      Numerodecelular: "",
      radio: "Boleta",
      shape: true,
      terminos: false,
      stilo: "min-height: 48vh",
      loadboton: false,
      form: {
        nombres: this.nombre,
        apellidos: this.apellido,
        documentIdentidad: this.documentIdentida,
        teleCelular: this.teleCelula,
        direccion: this.direccio,
        ciudad: this.ciudad ? this.ciudad : "",
        tipodocumento: this.tipodocumento ? this.tipodocumento : "",
        metodosDePagos: this.metodosDePago,
        fechaNacimiento: this.fechaNacimiento ? this.fechaNacimiento : "",
        correoElectronico: this.correoElectronico,
        distrito: this.distrito ? this.distrito : "",
        provincia: this.provincia,
        departamento: this.departamento,
        pais: "PERU",
        enterarte: this.enteraste ? this.enteraste : "",
        enteraste: this.enteraste ? this.enteraste : "",
        region: this.region ? this.region : "",
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
      options_tipodoc: ["DNI", "C.E", "RUC"],
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
      model: "Diplomado",
      model2: "",
      model3: "",
      step: 1
    };
  },
  methods: {
    ...mapActions("example", [
      "addRegistro",
      "getRegistro",
      "call_depart",
      "call_provin",
      "call_distridistri"
    ]),
    async getProv() {
      await this.call_provin(this.form.region);
      this.form.ciudad = "";
      this.form.distrito = "";
    },
    async getDistri() {
      await this.call_distridistri(this.form.ciudad);
      this.form.distrito = "";
    },
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

      await this.getRegistro();
      this.loadboton = false;
    },
    paso(val) {
      if (val === 3) {
        this.$refs.nombres.validate();
        this.$refs.apellidos.validate();
        this.$refs.tipodocumento.validate();
        this.$refs.documentIdentidad.validate();
        this.$refs.fechaNacimiento.validate();
        this.$refs.correoElectronico.validate();
        this.$refs.teleCelular.validate();
        this.$refs.pais.validate();
        this.$refs.region.validate();
        this.$refs.ciudad.validate();
        this.$refs.distrito.validate();
        this.$refs.direccion.validate();
        this.$refs.enterarte.validate();
        if (
          this.$refs.nombres.hasError ||
          this.$refs.apellidos.hasError ||
          this.$refs.tipodocumento.hasError ||
          this.$refs.documentIdentidad.hasError ||
          this.$refs.fechaNacimiento.hasError ||
          this.$refs.correoElectronico.hasError ||
          this.$refs.teleCelular.hasError ||
          this.$refs.pais.hasError ||
          this.$refs.region.hasError ||
          this.$refs.ciudad.hasError ||
          this.$refs.distrito.hasError ||
          this.$refs.direccion.hasError ||
          this.$refs.enterarte.hasError
        ) {
          this.formHasError = true;
          return false;
        } else {
          // this.$q.notify({
          //   icon: "done",
          //   color: "positive",
          //   message: "Submitted"
          // });
          return true;
        }
      } else if (val === 4) {
        this.$refs.Industriaogiro.validate();
        this.$refs.areadondetrabaja.validate();
        this.$refs.Cargoopuesto.validate();
        this.$refs.Centrodetrabajo.validate();
        return !(
          this.$refs.Industriaogiro.hasError ||
          this.$refs.areadondetrabaja.hasError ||
          this.$refs.Cargoopuesto.hasError ||
          this.$refs.Centrodetrabajo.hasError
        );
      } else {
        return true;
      }
    },
    lospaos() {
      console.log("this.step", this.step);
      if (this.step === 6) {
        console.log("this.step - dentro de if", this.step);
        this.$refs.stepper.next();
        this.onSubmit();
        this.$emit("qwe");
        location.href = "https://sgsacademy.pe/";
      } else {
        const resp = this.paso(this.step);
        if (resp) {
          this.$refs.stepper.next();
        } else {
          this.$q.notify({
            color: "negative",
            message: "Validaciones Pendientes"
          });
        }
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
    this.form.distrito = this.distrito ? this.distrito : "";
    this.form.provincia = this.provincia;
    this.form.departamento = this.departamento;
    this.form.pais = "PERU";
    this.form.enteraste = this.enteraste;
    this.form.otros = this.otros;
    await this.call_depart();
    // await this.call_provin();
    // await this.call_distridistri();
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
