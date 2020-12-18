<template>
  <div class="table-builder">
    <h1>Table builder:</h1>
    <table-builder v-model="sql" syntax="pg" tableName="bananas"></table-builder>
    <div class="sql">{{sql}}</div>
  </div>
</template>
<script>
import TableBuilder from './TableBuilder.vue'
export default {
  components: { TableBuilder },
  data: () => ({
    sql: ""
  }),

}
</script>