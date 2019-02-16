<template>
  <section class="section">
    <section class="columns">
      <section class="column is-one-third">
        <header class="content">
          <h1 class="title is-3">Todo App</h1>
          <h2 class="subtitle is-6">Always one more thing...</h2>
        </header>
        <TodoListPanel/>
      </section>
      <SelectedListColumn/>
    </section>
    <CreateListModal/>
    <ConfirmDeleteModal/>
    <EditListModal/>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import SelectedListColumn from "./SelectedListColumn.vue";
import TodoListPanel from "./TodoListPanel.vue";
import CreateListModal from "./CreateListModal.vue";
import EditListModal from "./EditListModal.vue";
import ConfirmDeleteModal from "./ConfirmDeleteModal.vue";

@Component({
  components: {
    SelectedListColumn,
    TodoListPanel,
    CreateListModal,
    ConfirmDeleteModal,
    EditListModal
  }
})
export default class TodoApp extends Vue {}
</script>
