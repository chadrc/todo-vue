import Vue from "vue";
import Vuex from "vuex";
import TodoList from "./classes/TodoList";
import Todo from "./classes/Todo";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newTodoText: "",
    selectedListIndex: 0,
    creatingList: false,
    listIndexToDelete: -1,
    todoLists: [
      new TodoList("List 1", [new Todo("Todo 1.1"), new Todo("Todo 1.2")]),
      new TodoList("List 2"),
      new TodoList("List 3", [
        new Todo("Todo 3.1"),
        new Todo("Todo 3.2"),
        new Todo("Todo 3.3"),
        new Todo("Todo 3.4"),
        new Todo("Todo 3.5")
      ]),
      new TodoList("List 4", [
        new Todo("Todo 4.1"),
        new Todo("Todo 4.2"),
        new Todo("Todo 4.3")
      ])
    ]
  },
  getters: {
    selectedList(state) {
      return state.todoLists[state.selectedListIndex];
    },
    selectedListId(state) {
      let list = state.todoLists[state.selectedListIndex];
      if (list) {
        return list.id;
      }
      return -1;
    },
    listToDelete(state) {
      if (state.listIndexToDelete !== -1) {
        return state.todoLists[state.listIndexToDelete];
      }
      return "";
    },
    deletingList(state) {
      return state.listIndexToDelete !== -1;
    }
  },
  mutations: {
    selectList(state: any, listId: number) {
      let index = state.todoLists.findIndex(
        (list: TodoList) => list.id === listId
      );
      state.selectedListIndex = index;
    },
    addTodoToSelectedList(state: any, todo: Todo) {
      let selectedListTodos = state.todoLists[state.selectedListIndex].todos;
      selectedListTodos.push(todo);

      state.newTodoText = "";
    },
    updateNewTodoText(state: any, text: string) {
      state.newTodoText = text;
    },
    removeTodoFromCurrentList(state: any, id: number) {
      let selectedListTodos = state.todoLists[state.selectedListIndex].todos;
      let index = selectedListTodos.findIndex((todo: Todo) => todo.id === id);
      selectedListTodos.splice(index, 1);
    },
    updateTodoText(
      state: any,
      { todoId, text }: { todoId: number; text: string }
    ) {
      let selectedListTodos = state.todoLists[state.selectedListIndex].todos;
      let todo = selectedListTodos.find((todo: Todo) => todo.id === todoId);
      todo.text = text;
    },
    updateTodoCompleted(
      state: any,
      { todoId, completed }: { todoId: number; completed: boolean }
    ) {
      let selectedList = state.todoLists[state.selectedListIndex];
      let selectedListTodos = selectedList.todos;
      let todo = selectedListTodos.find((todo: Todo) => todo.id === todoId);
      todo.completed = completed;
    },
    startCreateList(state: any) {
      state.creatingList = true;
    },
    cancelCreateList(state: any) {
      state.creatingList = false;
    },
    createList(state: any, data: { name: string }) {
      let list = new TodoList(data.name);
      state.todoLists.push(list);
      state.creatingList = false;
    },
    deleteList(state: any, listId) {
      let index = state.todoLists.findIndex(
        (list: TodoList) => list.id === listId
      );

      state.listIndexToDelete = index;
    },
    confirmDeleteList(state: any) {
      if (state.listIndexToDelete === state.selectedListIndex) {
        state.selectedListIndex = -1;
      }

      state.todoLists.splice(state.listIndexToDelete, 1);
      state.listIndexToDelete = -1;
    },
    cancelDelete(state: any) {
      state.listIndexToDelete = -1;
    }
  },
  actions: {}
});
