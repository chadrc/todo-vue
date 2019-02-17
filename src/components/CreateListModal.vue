<template>
  <div class="modal" :class="{'is-active': isActive}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Create List</p>
        <button class="delete" aria-label="close" @click="cancelCreateList()"></button>
      </header>
      <section class="modal-card-body">
        <div class="field has-addons">
          <p class="control">
            <span class="select">
              <select v-model="newListCategory">
                <option :value="undefined">Category</option>
                <option
                  v-for="category in categories"
                  :key="category.id"
                  :value="category.id"
                >{{ category.name }}</option>
              </select>
            </span>
          </p>
          <div class="control is-expanded">
            <input class="input" type="text" placeholder="List Name" v-model="newListName">
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button
          class="button is-success is-pulled-right"
          :disabled="!canSubmit"
          @click="createList()"
        >Create</button>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class CreateListModal extends Vue {
  newListName = "";
  newListCategory?: number;

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

  get canSubmit() {
    return (
      this.newListName.trim() !== "" &&
      typeof this.newListCategory !== "undefined"
    );
  }

  get categories() {
    return this.$store.state.categories;
  }
}
</script>

<style scoped>
footer.modal-card-foot {
  justify-content: flex-end;
}
</style>
