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
          <TodoListItem/>
        </nav>
      </section>
      <section class="column">
        <h2 class="title is-2">Selected List</h2>
        <div>
          <TodoItem/>
        </div>
      </section>
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TodoItem from "./TodoItem.vue";
import TodoListItem from "./TodoListItem.vue";

@Component({
  components: {
    TodoItem,
    TodoListItem
  }
})
export default class Todo extends Vue {}
</script>
