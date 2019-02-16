<template>
  <div class="modal" :class="{'is-active': isActive}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Categories</p>
        <button class="delete" aria-label="close" @click="finishEditCategories()"></button>
      </header>
      <section class="modal-card-body"></section>
      <footer class="modal-card-foot">
        <button class="button is-info is-pulled-right" @click="finishEditCategories()">Done</button>
      </footer>
    </div>
  </div>
</template>

<script>
import { Component, Vue, Prop } from "vue-property-decorator";
export default class EditCategoriesModal extends Vue {
  get isActive() {
    return this.$store.state.editingCategories;
  }

  finishEditCategories() {
    this.$store.commit("finishEditCategories");
  }
}
</script>

<style scoped>
</style>
