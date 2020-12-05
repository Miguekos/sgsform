<template>
  <div>
    <div class="q-pt-xs">
      <Table />
    </div>
  </div>
</template>

<script>
export default {
  name: "TablaRegistros",
  components: {
    Table: () => import("components/Table")
  }
};
</script>
