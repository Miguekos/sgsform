<template>
  <div>
    <div class="q-pt-xs">
      <Table />
    </div>
  </div>
</template>

<script>
export default {
  name: "PageIndex",
  components: {
    Table: () => import("components/Table")
  }
};
</script>
