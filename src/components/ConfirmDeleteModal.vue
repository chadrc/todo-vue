<template>
  <div class="modal" :class="{'is-active': isActive}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete List</p>
        <button class="delete" aria-label="close" @click="cancelDelete()"></button>
      </header>
      <section class="modal-card-body">
        <p>Are you sure you want to delete list "{{ listToDeleteName }}"</p>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-danger" @click="confirmDelete()">Confirm</button>
      </footer>
    </div>
  </div>
</template>

<script>
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ConfirmDeleteModal extends Vue {
  get isActive() {
    return this.$store.getters.deletingList;
  }

  get listToDeleteName() {
    return this.$store.getters.listToDelete.name;
  }

  cancelDelete() {
    this.$store.commit("cancelDelete");
  }

  confirmDelete() {
    this.$store.commit("confirmDeleteList");
  }
}
</script>

<style scoped>
footer.modal-card-foot {
  justify-content: flex-end;
}
</style>
