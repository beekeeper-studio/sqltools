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
        <select id="inputColumn" class="form-select">
          <option selected>Choose</option>
          <option selected>Holi</option> 
        </select>
      </div>
    </form>

    
    <!-- TODO (nicoll): This should support all the fields in the Column model (eg primary / nullable, etc)
    The mapping of column type => supported features is in  -->

  </div>
</template>
<script>
import { ColumnTypeOptions } from '@/models/Column'
export default {
  props: ['column'],
  data: () => ({

  }),
  computed: {
    columnOptions() {
      return ColumnTypeOptions[this.column.type]
    }
  }

}
</script>