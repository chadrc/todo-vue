<template>
  <section class="column">
    <h2 class="title is-2">{{ selectedListName }}</h2>
    <div class="field has-addons">
      <p class="control is-expanded">
        <input
          class="input"
          v-model="newTodoText"
          type="text"
          placeholder="New Todo"
          aria-label="Text input with checkbox"
        >
      </p>
      <p class="control">
        <button class="button is-primary" type="button" @click="addNewTodo()">Add</button>
      </p>
    </div>
    <div>
      <TodoItem v-for="todo in selectedListTodos" :key="todo.id" :todoId="todo.id"/>
    </div>
  </section>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";
import TodoItem from "./TodoItem.vue";
import TodoList from "../classes/TodoList";
import Todo from "../classes/Todo";

@Component({
  components: {
    TodoItem
  }
})
export default class SelectedListColumn extends Vue {
  get selectedListTodos() {
    let todoList = this.$store.getters.selectedList;
    if (todoList) {
      return todoList.todos;
    }

    return [];
  }

  get selectedListName() {
    let todoList = this.$store.getters.selectedList;
    if (todoList) {
      return todoList.name;
    }

    return "Select a list";
  }

  addNewTodo() {
    this.$store.commit("addTodoToSelectedList", new Todo(this.newTodoText));
  }

  get newTodoText() {
    return this.$store.state.newTodoText;
  }

  set newTodoText(value) {
    this.$store.commit("updateNewTodoText", value);
  }
}
</script>

<style scoped>
</style>
