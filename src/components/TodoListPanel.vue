<template>
  <nav class="panel">
    <p class="panel-heading">
      Lists
      <button class="button is-primary is-small is-pulled-right" @click="startCreateList()">
        <span class="icon">
          <i class="fas fa-plus"/>
        </span>
      </button>
    </p>
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
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";
import TodoListItem from "./TodoListItem.vue";
import TodoList from "../classes/TodoList";
import Todo from "../classes/Todo";

@Component({
  components: {
    TodoListItem
  }
})
export default class TodoListPanel extends Vue {
  get todoLists() {
    return this.$store.state.todoLists;
  }

  startCreateList() {
    this.$store.commit("startCreateList");
  }
}
</script>

<style scoped>
</style>
