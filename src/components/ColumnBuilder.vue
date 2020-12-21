<template>
  <div class="column-builder">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" v-model="column.name">
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