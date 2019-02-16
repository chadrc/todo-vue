<template>
  <div class="modal" :class="{'is-active': isActive}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Categories</p>
        <button class="delete" aria-label="close" @click="finishEditCategories()"></button>
      </header>
      <section class="modal-card-body">
        <div class="field has-addons">
          <p class="control is-expanded">
            <input
              class="input"
              v-model="newCategoryName"
              type="text"
              placeholder="New Category"
              aria-label="Text input with checkbox"
            >
          </p>
          <p class="control">
            <button class="button is-primary" type="button" @click="addCategory()">Add</button>
          </p>
        </div>
        <EditCategoryItem
          v-for="category in categories"
          :key="category.id"
          :categoryId="category.id"
        />
      </section>
      <footer class="modal-card-foot">
        <button class="button is-info is-pulled-right" @click="finishEditCategories()">Done</button>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import EditCategoryItem from "./EditCategoryItem.vue";

@Component({
  components: { EditCategoryItem }
})
export default class EditCategoriesModal extends Vue {
  newCategoryName = "";

  get isActive() {
    return this.$store.state.editingCategories;
  }

  finishEditCategories() {
    this.$store.commit("finishEditCategories");
  }

  get categories() {
    return this.$store.state.categories;
  }

  addCategory() {
    this.$store.commit("addCategory", this.newCategoryName);
    this.newCategoryName = "";
  }
}
</script>

<style scoped>
</style>
