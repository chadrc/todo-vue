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
          <TodoListItem
            v-for="(list, index) in todoLists"
            :key="list.id"
            :list="list"
            @select="selectList(index)"
          />
        </nav>
      </section>
      <section class="column">
        <h2 class="title is-2">{{ selectedListName }}</h2>
        <div>
          <TodoItem v-for="todo in selectedListTodos" :key="todo.id" :todo="todo"/>
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
  selectedListIndex: number = 0;
  todoLists: TodoList[] = [
    new TodoList("List 1", [new Todo("Todo 1.1"), new Todo("Todo 1.2")]),
    new TodoList("List 2"),
    new TodoList("List 3", [
      new Todo("Todo 3.1"),
      new Todo("Todo 3.2"),
      new Todo("Todo 3.3"),
      new Todo("Todo 3.4"),
      new Todo("Todo 3.5")
    ]),
    new TodoList("List 4", [
      new Todo("Todo 4.1"),
      new Todo("Todo 4.2"),
      new Todo("Todo 4.3")
    ])
  ];

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

  selectList(index: number) {
    this.$store.commit("selectList", index);
  }
}
</script>
