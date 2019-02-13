<template>
  <div class="container todo-app">
    <h1 class="text-center mb-3 pb-2 border-bottom">Todo App</h1>
    <section class="row">
      <section class="col-4">
        <h2 class="mb-4">Lists</h2>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">one</li>
          <li class="list-group-item">two</li>
          <li class="list-group-item">three</li>
          <li class="list-group-item">four</li>
          <li class="list-group-item">five</li>
          <li class="list-group-item">six</li>
        </ul>
      </section>
      <section class="col">
        <h2 class="mb-4">Selected List</h2>
        <ul>
          <li>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <input type="checkbox" aria-label="Checkbox for following text input">
                </div>
              </div>
              <input
                value="first"
                type="text"
                class="form-control"
                aria-label="Text input with checkbox"
              >
              <div class="input-group-append">
                <button class="btn btn-outline-danger" type="button" id="button-addon2">&times;</button>
              </div>
            </div>
          </li>
          <li>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <input type="checkbox" aria-label="Checkbox for following text input">
                </div>
              </div>
              <input
                value="second"
                type="text"
                class="form-control"
                aria-label="Text input with checkbox"
              >
              <div class="input-group-append">
                <button class="btn btn-outline-danger" type="button" id="button-addon2">&times;</button>
              </div>
            </div>
          </li>
          <li>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <input type="checkbox" aria-label="Checkbox for following text input">
                </div>
              </div>
              <input
                value="third"
                type="text"
                class="form-control"
                aria-label="Text input with checkbox"
              >
              <div class="input-group-append">
                <button class="btn btn-outline-danger" type="button" id="button-addon2">&times;</button>
              </div>
            </div>
          </li>
          <li>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <input type="checkbox" aria-label="Checkbox for following text input">
                </div>
              </div>
              <input
                value="fourth"
                type="text"
                class="form-control"
                aria-label="Text input with checkbox"
              >
              <div class="input-group-append">
                <button class="btn btn-outline-danger" type="button" id="button-addon2">&times;</button>
              </div>
            </div>
          </li>
          <li>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <input type="checkbox" aria-label="Checkbox for following text input">
                </div>
              </div>
              <input
                value="fifth"
                type="text"
                class="form-control"
                aria-label="Text input with checkbox"
              >
              <div class="input-group-append">
                <button class="btn btn-outline-danger" type="button" id="button-addon2">&times;</button>
              </div>
            </div>
          </li>
          <li>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <input type="checkbox" aria-label="Checkbox for following text input">
                </div>
              </div>
              <input
                value="sixth"
                type="text"
                class="form-control"
                aria-label="Text input with checkbox"
              >
              <div class="input-group-append">
                <button class="btn btn-outline-danger" type="button" id="button-addon2">&times;</button>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Todo extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
