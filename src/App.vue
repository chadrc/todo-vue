<template>
  <div id="app">
    <TodoApp/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TodoApp from "./components/TodoApp.vue";

@Component({
  components: {
    TodoApp
  }
})
export default class App extends Vue {}
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
}
</style>
