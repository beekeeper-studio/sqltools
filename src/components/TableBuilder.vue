<template>
  <div class="table-builder">
    <h1>Nom nom nom I'm the table builder</h1>
  </div>
</template>
<script>
export default {
  props: ['tableName', 'tableSchema', 'value', 'initialColumns', 'syntax'],
  data: () => ({
    supportedSyntaxes: ['mssql', 'mysql2', 'sqlite3', 'oracle', 'pg'],
    columns: [],
    knex: null
  }),
  computed: {
    sql() {
      return 'sql'
    }
  },
  watch: {
    sql() {
      this.$emit('input', this.sql)
    }
  },
  mounted() {
    if (!this.supportedSyntaxes.include(this.syntax)) {
      throw `${this.syntax} is not supported. Supported: ${this.supportedSyntaxes.join(", ")}`
    }
    this.knex = null // set this to knex syntax.
  }
}
</script>