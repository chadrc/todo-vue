<template>
  <div class="field has-addons">
    <p class="control">
      <span class="select">
        <select v-model="completed">
          <option :value="false">Todo</option>
          <option :value="true">Done</option>
        </select>
      </span>
    </p>
    <p class="control is-expanded">
      <input class="input" v-model="text" type="text" aria-label="Text input with checkbox">
    </p>
    <p class="control">
      <button class="button is-danger" type="button" @click="removeItem()">&times;</button>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Todo from "../classes/Todo";

@Component
export default class TodoItem extends Vue {
  @Prop(Number) todoId!: number;

  removeItem() {
    this.$store.commit("removeTodoFromCurrentList", this.todo.id);
  }

  get todo() {
    let selectedList = this.$store.getters.selectedList;
    let todo = selectedList.todos.find((todo: Todo) => todo.id === this.todoId);
    return todo;
  }

  get text() {
    return this.todo.text;
  }

  set text(value: string) {
    this.$store.commit("updateTodoText", { todoId: this.todoId, text: value });
  }

  get completed() {
    return this.todo.completed;
  }

  set completed(value: boolean) {
    this.$store.commit("updateTodoCompleted", {
      todoId: this.todoId,
      completed: value
    });
  }
}
</script>

<style scoped>
</style>
