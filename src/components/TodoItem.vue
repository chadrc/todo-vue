<template>
  <div class="field has-addons">
    <p class="control">
      <span class="select">
        <select v-model="todo.completed">
          <option :value="false">Todo</option>
          <option :value="true">Done</option>
        </select>
      </span>
    </p>
    <p class="control is-expanded">
      <input class="input" v-model="todo.text" type="text" aria-label="Text input with checkbox">
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
  @Prop(Todo) todo!: Todo;

  removeItem() {
    this.$store.commit("removeTodoFromCurrentList", this.todo.id);
  }
}
</script>

<style scoped>
</style>
