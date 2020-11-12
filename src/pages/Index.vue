<template>
  <div>
    <div class="q-pt-xs">
      <Form />
    </div>
    <div class="q-pt-xs">
      <Table />
    </div>
  </div>
</template>

<script>
export default {
  name: "PageIndex",
  components: {
    Form: () => import("components/Form"),
    Table: () => import("components/Table")
  }
};
</script>
