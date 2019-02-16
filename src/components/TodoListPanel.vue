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
    <p class="panel-tabs">
      <a class="is-active">All</a>
      <a>Work</a>
      <a>Daily</a>
      <a>Weekly</a>
      <a>Monthly</a>
      <a>
        <div class="dropdown is-hoverable">
          <div class="dropdown-trigger">
            <span class="icon">
              <i class="fas fa-ellipsis-h"/>
            </span>
          </div>
          <div class="dropdown-menu" id="dropdown-menu3" role="menu">
            <div class="dropdown-content">
              <a href="#" class="dropdown-item">Food</a>
              <a href="#" class="dropdown-item">Movies</a>
              <hr class="dropdown-divider">
              <a href="#" class="dropdown-item">Edit</a>
            </div>
          </div>
        </div>
      </a>
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

<style scoped lang="scss">
.panel-tabs > a:first-child {
  margin-right: auto;
}

.panel-tabs > a:last-child {
  margin-left: auto;
}

.panel-tabs a.dropdown-item {
  border-bottom: none;
}
</style>
