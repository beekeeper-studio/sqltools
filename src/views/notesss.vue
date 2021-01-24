<div class="column-builder">
    <!-- TODO (nicoll) - make the form inputs stretch horizontally for the core options, rather than stacking on top of each other --> 
    <!-- Inputs to focus on first: Name, type, primary? nullable? default value  -->
    
    <form class="layoutColumns">
      <div class="form-group" >
        <label for="name" class="form-label">Name</label>
        <input class="form-control" type="text" v-model="column.name">
      </div>

      <div class= "colType">
        <label for="ColumnType" class="form-label">Type Column</label>
        <select id="inputColumn" class="form-select">
          <option selected>Choose</option>
          <option selected>Holi</option> 
        </select>
      </div>
    </form>


    /////////////// PostgresCreateTable.vue 

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
          <highlightjs language="sql" :code="formattedSql" ref="highlightjs"></highlightjs>
          <!-- <input type="text" ref="input"> -->
          <button @click="copyText">CopyText </button>
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
  }, 

  // methods:{
  //   async foo() {
  //     const result = await copy("some text")
  //   },
  //   copyText(){
  //     clipboard.copy(this.formattedSql)
  //     var vm = this
  //     var copyText = vm.$refes.highlightjs;
  //     copyText.select();
  //     document.execCommand("copy");
  //     alert("Copied text:" + copyText.value);
  //   }
  // }  

}
</script>

