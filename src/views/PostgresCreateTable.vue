<template>
  <div class="table-builder container">
    <h1>Table Builder for {{syntaxText}}</h1>
    <div class="row">
      <div class="col-md-8">
          <table-builder v-model="sql" :syntax="syntax" tableName="bananas"></table-builder>
      </div>
      <div class="col-md-4 card">
        <div class="card-body">
          <!-- TODO (nicoll) - user should be able to click a 'copy' button to copy this to the clipboard -->
          <highlightjs language="sql" :code="formattedSql"></highlightjs>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TableBuilder from '../components/TableBuilder.vue'
import Formatter from 'sql-formatter'
export default {
  components: { TableBuilder },
  data: () => ({
    sql: "",
    syntax: "pg",
    syntaxStrings: {
      pg: "Postgres",
      mysql2: "MySQL",
      sqlite3: "SQLite"
    },
  }),
  computed: {
    formattedSql() {
      return Formatter.format(this.sql)
    },
    syntaxText() {
      // TODO (nicoll): Tell me what this does.
      return this.syntaxStrings[this.syntax] || this.syntax
    }
  }
}
</script>