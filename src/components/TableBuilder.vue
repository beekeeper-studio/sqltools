<template>
  <div class="table-builder">
    <div class="form">
      <div class="form-group">
        <label for="tableName">Table Name</label>
        <input type="text" name="tableName" class="form-control" v-model="tableName">
      </div>
      <h2 class="text-start">Table Columns</h2>
      <div v-for="(column, idx) in columns" :key="idx" class="form-group">
        <div class="card">
          <div class="card-body">
            <column-builder :column="column"></column-builder>
          </div>
        </div>
      </div>
      <div class="buttons">
        <a class="btn btn-primary" @click.prevent="addColumn">Add Column</a>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import Knex from 'knex'
import { ColumnType } from '../models/Column'
import ColumnBuilder from './ColumnBuilder'

export default Vue.extend({
  components: { ColumnBuilder },
  props: ['tableSchema', 'value', 'initialColumns', 'syntax'],
  data: () => ({
    supportedSyntaxes: ['mssql', 'mysql2', 'sqlite3', 'oracle', 'pg'],
    columns: [ { name: 'id', type: ColumnType.Increments, primary: true }],
    foreignKeys: [],
    knex: null,
    tableName: "new_table",
    sql: ""
  }),
  computed: {
  },
  watch: {
    columns: {
      deep: true,
      handler() {
        this.genSql()
      }
    },
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
    this.genSql()
  },
  methods: {
    genSql() {
      if (!this.knex) {
        this.sql = ""
        return
      }
      this.sql = this.knex.schema.createTable(this.tableName, (table) => {
        this.columns.forEach((column) => {
          const col = table[column.type](column.name)
          if (column.primary) col.primary()
          if (column.nullable) col.nullable()
          if (column.comment) col.comment(col.comment)
        })
      }).toQuery()
    },
    addColumn() {
      this.columns.push({
        name: `column_${this.columns.length + 1}`,
        type: ColumnType.String
      })
    }
  }
})
</script>