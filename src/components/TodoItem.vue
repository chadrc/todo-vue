<template>
  <div class="field has-addons">
    <p class="control">
      <span class="select">
        <select>
          <option>Todo</option>
          <option>Done</option>
        </select>
      </span>
    </p>
    <p class="control is-expanded">
      <input class="input" value="first" type="text" aria-label="Text input with checkbox">
    </p>
    <p class="control">
      <button class="button is-danger" type="button">&times;</button>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TodoItem extends Vue {}
</script>

<style scoped>
</style>
