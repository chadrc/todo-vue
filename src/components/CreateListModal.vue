<template>
  <div class="modal" :class="{'is-active': isActive}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Create List</p>
        <button class="delete" aria-label="close" @click="cancelCreateList()"></button>
      </header>
      <section class="modal-card-body">
        <div class="control">
          <input class="input" type="text" placeholder="List Name" v-model="newListName">
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success is-pulled-right" @click="createList()">Create</button>
      </footer>
    </div>
  </div>
</template>

<script>
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class CreateListModal extends Vue {
  newListName = "";

  get isActive() {
    return this.$store.state.creatingList;
  }

  cancelCreateList() {
    this.newListName = "";
    this.$store.commit("cancelCreateList");
  }

  createList() {
    this.$store.commit("createList", { name: this.newListName });
    this.newListName = "";
  }
}
</script>

<style scoped>
</style>
