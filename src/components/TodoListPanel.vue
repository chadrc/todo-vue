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
      <a :class="{'is-active': activeCategoryId === -1}" @click="selectCategory(-1)">All</a>
      <a
        v-for="category in categoriesForDisplay"
        :key="category.id"
        :class="{'is-active': activeCategoryId === category.id}"
        @click.prevent.stop="selectCategory(category.id)"
      >{{category.name}}</a>
      <a>
        <div class="dropdown is-hoverable">
          <div class="dropdown-trigger">
            <span class="icon">
              <i class="fas fa-ellipsis-h"/>
            </span>
          </div>
          <div class="dropdown-menu" id="dropdown-menu3" role="menu">
            <div class="dropdown-content">
              <a
                href="#"
                class="dropdown-item"
                v-for="category in remainingCategories"
                :key="category.id"
                @click.prevent.stop="selectCategory(category.id)"
              >{{ category.name }}</a>
              <hr class="dropdown-divider">
              <a href="#" class="dropdown-item" @click="startEditCategories()">Edit</a>
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

  get activeCategoryId() {
    return this.$store.state.selectedCategoryId;
  }

  get categoriesForDisplay() {
    return this.$store.state.categories.slice(0, 4);
  }

  get remainingCategories() {
    return this.$store.state.categories.slice(4);
  }

  selectCategory(categoryId) {
    this.$store.commit("selectCategory", categoryId);
  }

  startEditCategories() {
    this.$store.commit("startEditCategories");
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
