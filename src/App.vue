<template>
  <div id="app">
    <table-builder-display></table-builder-display>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TableBuilderDisplay from './components/TableBuilderDisplay.vue';

export default Vue.extend({
  name: 'App',
  components: {
    TableBuilderDisplay
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
