<template>
  <a class="panel-block is-active" @click.prevent="$emit('select')">
    <span class="panel-icon" v-show="!allComplete">
      <i class="far fa-circle" aria-hidden="true"></i>
    </span>
    <span class="panel-icon" v-show="allComplete">
      <i class="fas fa-circle" aria-hidden="true"></i>
    </span>
    {{ list.name }}
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TodoList from "@/classes/TodoList";
import Todo from "@/classes/Todo";

@Component
export default class TodoListItem extends Vue {
  @Prop(Number) listId!: number;

  get list() {
    return this.$store.state.todoLists.find(
      (todoList: TodoList) => todoList.id === this.listId
    );
  }

  get name() {
    return this.list.name;
  }

  get allComplete() {
    let todos = this.list.todos;
    let allComplete = true;
    for (let todo of todos) {
      if (!todo.completed) {
        allComplete = false;
      }
    }
    return allComplete;
  }
}
</script>

<style scoped>
</style>
