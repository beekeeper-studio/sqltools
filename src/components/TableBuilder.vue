<template>
  <div class="table-builder">
    <h1>Nom nom nom I'm the table builder</h1>
  </div>
</template>
<script>
import Vue from 'vue'
import Knex from 'knex'
import { ColumnType } from '../models/Column'

export default Vue.extend({
  props: ['tableName', 'tableSchema', 'value', 'initialColumns', 'syntax'],
  data: () => ({
    supportedSyntaxes: ['mssql', 'mysql2', 'sqlite3', 'oracle', 'pg'],
    columns: [ { name: 'id', type: ColumnType.Increments, primary: true }],
    foreignKeys: [],
    knex: null
  }),
  computed: {
    sql() {
      if (!this.knex) return ""

      return this.knex.schema.createTable(this.tableName, (table) => {
        this.columns.forEach((column) => {
          const col = table[column.type](column.name)
          if (column.primary) col.primary()
          if (column.nullable) col.nullable()
          if (column.comment) col.comment(col.comment)

        })
      }).toQuery()
      
    }
  },
  watch: {
    sql() {
      this.$emit('input', this.sql)
    }
  },
  mounted() {
    if (!this.supportedSyntaxes.includes(this.syntax)) {
      throw `${this.syntax} is not supported. Supported: ${this.supportedSyntaxes.join(", ")}`
    }
    this.knex = Knex({ client: this.syntax })
    window.knex = this.knex
  }
})
</script>