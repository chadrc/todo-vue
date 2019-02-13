<template>
  <div id="app" class="mt-4">
    <Todo/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Todo from './components/Todo.vue';

@Component({
  components: {
    Todo,
  },
})
export default class App extends Vue {}
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
}
</style>
