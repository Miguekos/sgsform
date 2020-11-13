<template>
  <div class="q-pa-md">
    <!--    {{Registro.result}}-->
    <q-table
      title="Registros"
      :data="Registro.result"
      :columns="columns"
      row-key="name"
      :pagination.sync="pagination"
      hide-pagination
    />

    <div class="row justify-center q-mt-md">
      <q-pagination
        v-model="pagination.page"
        color="grey-8"
        :max="pagesNumber"
        size="sm"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      pagination: {
        sortBy: "desc",
        descending: false,
        page: 1,
        rowsPerPage: 3
        // rowsNumber: xx if getting data from a server
      },
      columns: [
        {
          name: "desc",
          required: true,
          label: "Nombre",
          align: "left",
          field: row => row.nombres,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "documentIdentidad",
          align: "center",
          label: "DNI",
          field: "documentIdentidad",
          sortable: true
        },
        {
          name: "metodosDePagos",
          label: "Metodos de Pagos",
          field: "metodosDePagos",
          sortable: true
        },
        { name: "direccion", label: "Direccion", field: "direccion" },
        { name: "teleCelular", label: "Telf/Celular", field: "teleCelular" }
      ],
      rows: []
    };
  },
  methods: {
    ...mapActions("example", ["getRegistro"])
  },
  computed: {
    ...mapGetters("example", ["Registro"]),
    pagesNumber() {
      return Math.ceil(this.rows.length / this.pagination.rowsPerPage);
    }
  },
  async created() {
    await this.getRegistro();
  }
};
</script>

<style scoped></style>
