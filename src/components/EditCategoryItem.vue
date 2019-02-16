<template>
  <div class="field has-addons">
    <p class="control is-expanded">
      <input class="input" v-model="name" type="text" aria-label="Text input with checkbox">
    </p>
    <p class="control">
      <button class="button is-danger" type="button" @click="deleteCategory()">
        <i class="fas fa-trash-alt"/>
      </button>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Category from "@/classes/Category";

@Component
export default class EditCategoryItem extends Vue {
  @Prop(Number) categoryId!: number;

  get name() {
    return this.$store.state.categories.find(
      (category: Category) => category.id === this.categoryId
    ).name;
  }

  set name(value) {
    this.$store.commit("updatedCategoryName", {
      categoryId: this.categoryId,
      name: value
    });
  }
}
</script>

<style scoped>
</style>
