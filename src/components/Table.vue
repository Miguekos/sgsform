<template>
  <div class="q-pa-md">
    <!--    {{Registro.result}}-->
    <q-table
      title="Registros"
      :data="Registro.result"
      :columns="columns"
      row-key="name"
      :loading="loading"
      :pagination.sync="pagination"
      hide-pagination
    >
      <template v-slot:top-right>
        <q-btn
          color="indigo-12"
          size="sm"
          icon-right="archive"
          label="Exportar a csv"
          no-caps
          @click="exportTable"
        />
      </template>
      <template v-slot:loading>
        <q-inner-loading showing color="primary" />
      </template>
    </q-table>

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
import { exportFile } from "quasar";

function wrapCsvValue(val, formatFn) {
  let formatted = formatFn !== void 0 ? formatFn(val) : val;

  formatted =
    formatted === void 0 || formatted === null ? "" : String(formatted);

  formatted = formatted.split('"').join('""');
  /**
   * Excel accepts \n and \r in strings, but some other CSV parsers do not
   * Uncomment the next two lines to escape new lines
   */
  // .split('\n').join('\\n')
  // .split('\r').join('\\r')

  return `"${formatted}"`;
}

export default {
  data() {
    return {
      loading: false,
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
    ...mapActions("example", ["getRegistro"]),
    exportTable() {
      // naive encoding to csv format
      const content = [this.columns.map(col => wrapCsvValue(col.label))]
        .concat(
          this.Registro.result.map(row =>
            this.columns
              .map(col =>
                wrapCsvValue(
                  typeof col.field === "function"
                    ? col.field(row)
                    : row[col.field === void 0 ? col.name : col.field],
                  col.format
                )
              )
              .join(",")
          )
        )
        .join("\r\n");

      const status = exportFile("table-export.csv", content, "text/csv");

      if (status !== true) {
        this.$q.notify({
          message: "Browser denied file download...",
          color: "negative",
          icon: "warning"
        });
      }
    }
  },
  computed: {
    ...mapGetters("example", ["Registro"]),
    pagesNumber() {
      return Math.ceil(this.rows.length / this.pagination.rowsPerPage);
    }
  },
  async created() {
    this.loading = true;
    await this.getRegistro();
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
};
</script>

<style scoped></style>
