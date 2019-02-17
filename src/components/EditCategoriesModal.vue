<template>
  <div class="modal is-top" :class="{'is-active': isActive}">
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
        <nav class="pagination" role="navigation" aria-label="pagination">
          <ul class="pagination-list">
            <li v-for="pageNumber in categoryPageCount" :key="pageNumber">
              <a
                class="pagination-link"
                :class="{'is-current': currentCategoryPage === pageNumber}"
                @click.prevent.stop="selectCategoryPage(pageNumber)"
              >{{ pageNumber }}</a>
            </li>
          </ul>
        </nav>
        <!-- <button class="button is-info is-pulled-right" @click="finishEditCategories()">Done</button> -->
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
    let currentPageIndex = this.$store.state.currentCategoryPage - 1;
    let start = currentPageIndex * 10;
    let end = start + 10;
    return this.$store.state.categories.slice(start, end);
  }

  get categoryPageCount() {
    return Math.ceil(this.$store.state.categories.length / 10);
  }

  get currentCategoryPage() {
    return this.$store.state.currentCategoryPage;
  }

  addCategory() {
    this.$store.commit("addCategory", this.newCategoryName);
    this.newCategoryName = "";
  }

  selectCategoryPage(pageNumber: number) {
    this.$store.commit("setCategoryPage", pageNumber);
  }
}
</script>

<style scoped lang="scss">
.modal.is-top {
  justify-content: normal;

  > .modal-card {
    margin-top: 50px;
  }
}

footer.modal-card-foot {
  justify-content: center;
}
</style>
