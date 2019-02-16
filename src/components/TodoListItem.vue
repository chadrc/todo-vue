<template>
  <a class="panel-block is-active">
    <span class="panel-icon">
      <i class="far fa-circle" aria-hidden="true"></i>
    </span>
    {{ list.name }}
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TodoList from "@/classes/TodoList";

@Component
export default class Todo extends Vue {
  @Prop(TodoList) list!: TodoList;
}
</script>

<style scoped>
</style>
