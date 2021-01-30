<template>
  <div class="column-builder">
    <!-- TODO (nicoll) - make the form inputs stretch horizontally for the core options, rather than stacking on top of each other --> 
    <!-- Inputs to focus on first: Name, type, primary? nullable? default value  -->
    
    <form class="row g-3">
      <div class="col-md-4" >
        <label for="name" class="form-label">Name</label>
        <input class="form-control" type="text" v-model="column.name">
      </div>

      <div class= "col-md-4">
        <label for="inputColumn" class="form-label">Type Column</label>
         <select id="inputColumn" class="form-select" v-model="column.type">
          <option v-for="option in options" :key="option.name" :title="option.description" :value="option.name">
            {{ option.name }}
          </option>
        </select>
      </div>
      <!-- SPECIFIC SECTIONS YOU NEED: -->
      <!-- primary, nullable, defaultValue -->
      <div v-if="columnOptions.requiresValues">
        <h3>VALUES HERE PLZ</h3>
      </div>
    </form>

    
    <!-- TODO (nicoll): This should support all the fields in the Column model (eg primary / nullable, etc)
    The mapping of column type => supported features is in  -->

  </div>
</template>
<script>
import { ColumnTypeOptions } from '../models/Column'
export default {
  props: ['column'],
  data: () => ({
    options: ColumnTypeOptions

  }),
  computed: {
    columnOptions() {
      return ColumnTypeOptions.find(o => o.name === this.column.type) || {}
    }
  }

}
</script>