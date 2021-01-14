<template>
  <div>
    <div v-if="mostrar" class="q-pt-xs">
      <Steps />
    </div>
    <!-- <div class="q-pt-xs">
      <Form />
    </div> -->
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Mesanje</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          No se encontro el ID
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" @click="redireccion" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import {
  Loading,

  // optional!, for example below
  // with custom spinner
  QSpinnerGears,
  QSpinnerTail,
  QSpinnerRings,
  QSpinnerPuff,
  QSpinnerDots
} from "quasar";
export default {
  name: "PageIndex",
  computed: {
    ...mapGetters("example", ["get_buscarConsumidor"])
  },
  components: {
    // Form: () => import("components/Form"),
    Steps: () => import("components/Steps")
  },
  data() {
    return {
      mostrar: false,
      alert: false
    };
  },
  methods: {
    ...mapActions("example", ["call_buscarConsumidor"]),
    redireccion() {
      this.alert = false;
      // this.$router.push("https://sgsacademy.pe/")
      location.href = "https://sgsacademy.pe/";
      // this.$router.go()
    }
  },
  async created() {
    this.$q.loading.show({
      spinner: QSpinnerDots,
      spinnerColor: "orange-10",
      spinnerSize: 150
    });
    this.$on("qwe", data => {
      console.log("qwe", data);
    });
    if (this.$route.query.id != undefined) {
      await this.call_buscarConsumidor(this.$route.query.id);
      console.log(this.get_buscarConsumidor.message);
      if (this.get_buscarConsumidor.message == "Invalid ID.") {
        this.alert = true;
        this.mostrar = false;
        this.$q.loading.hide();
      } else {
        this.$q.loading.hide();
        this.mostrar = true;
      }
      this.$q.loading.hide();
    } else {
      this.$q.loading.hide();
      this.alert = true;
    }
  }
};
</script>
