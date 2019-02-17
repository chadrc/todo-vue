<template>
  <div class="modal" :class="{'is-active': isActive}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Edit List</p>
        <button class="delete" aria-label="close" @click="cancelEditList()"></button>
      </header>
      <section class="modal-card-body">
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="List Name"
            v-model="listName"
            @keyup.enter="finishEditList()"
          >
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-info" @click="finishEditList()">Done</button>
      </footer>
    </div>
  </div>
</template>

<script>
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class EditListModal extends Vue {
  get isActive() {
    return this.$store.getters.editingList;
  }

  get listName() {
    let list = this.$store.getters.listToEdit;
    if (list) {
      return list.name;
    }

    return "";
  }

  set listName(value) {
    this.$store.commit("editListName", value);
  }

  cancelEditList() {
    this.newListName = "";
    this.$store.commit("cancelEditList");
  }

  finishEditList() {
    this.$store.commit("finishEditList", { name: this.newListName });
    this.newListName = "";
  }
}
</script>

<style scoped>
footer.modal-card-foot {
  justify-content: flex-end;
}
</style>
