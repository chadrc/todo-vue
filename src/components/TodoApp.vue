<template>
  <section class="section">
    <section class="columns">
      <section class="column is-one-third">
        <header class="content">
          <h1 class="title is-3">Todo App</h1>
          <h2 class="subtitle is-6">Always one more thing...</h2>
        </header>
        <nav class="panel">
          <p class="panel-heading">Lists</p>
          <div class="panel-block">
            <p class="control has-icons-left">
              <input class="input is-small" type="text" placeholder="search">
              <span class="icon is-small is-left">
                <i class="fas fa-search" aria-hidden="true"></i>
              </span>
            </p>
          </div>
          <p class="panel-tabs">
            <a class="is-active">All</a>
            <a>Work</a>
            <a>Daily</a>
            <a>Weekly</a>
            <a>Monthly</a>
          </p>
          <TodoListItem v-for="list in todoLists" :key="list.id" :listId="list.id"/>
        </nav>
      </section>
      <section class="column">
        <h2 class="title is-2">{{ selectedListName }}</h2>
        <div class="field has-addons">
          <p class="control is-expanded">
            <input
              class="input"
              v-model="newTodoText"
              type="text"
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
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TodoItem from "./TodoItem.vue";
import TodoListItem from "./TodoListItem.vue";
import TodoList from "../classes/TodoList";
import Todo from "../classes/Todo";
import genId from "../genId";

@Component({
  components: {
    TodoItem,
    TodoListItem
  }
})
export default class TodoApp extends Vue {
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

  get todoLists() {
    return this.$store.state.todoLists;
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
