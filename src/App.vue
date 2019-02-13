<template>
  <div id="app" class="mt-4">
    <Todo msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Todo from "./components/Todo.vue";

@Component({
  components: {
    Todo
  }
})
export default class App extends Vue {}
</script>

<style>
</style>
