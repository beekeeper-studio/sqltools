<template>
  <div class="column-builder">
    <!-- TODO (nicoll) - make the form inputs stretch horizontally for the core options, rather than stacking on top of each other -->
    <div class="form-group">
      <label for="name" class="form-label">Name</label>
      <input class="form-control" type="text" v-model="column.name">
    </div>
    <!-- TODO (nicoll): This should support all the fields in the Column model (eg primary / nullable, etc)
    The mapping of column type => supported features is in ColumnOptions -->

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