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
          <a class="panel-block is-active">
            <span class="panel-icon">
              <i class="far fa-circle" aria-hidden="true"></i>
            </span>
            bulma
          </a>
        </nav>
      </section>
      <section class="column">
        <h2 class="title is-2">Selected List</h2>
        <div>
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
        </div>
      </section>
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Todo extends Vue {
  @Prop() private msg!: string;
}
</script>
