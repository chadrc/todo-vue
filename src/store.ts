import Vue from "vue";
import Vuex from "vuex";
import TodoList from "./classes/TodoList";
import Todo from "./classes/Todo";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newTodoText: "",
    selectedListIndex: 0,
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
    }
  },
  mutations: {
    selectList(state: any, index: number) {
      state.selectedListIndex = index;
    },
    addTodoToSelectedList(state: any, todo: Todo) {
      let selectedList = state.todoLists[state.selectedListIndex];
      selectedList.todos.push(todo);

      state.newTodoText = "";
    },
    updateNewTodoText(state: any, text: string) {
      state.newTodoText = text;
    }
  },
  actions: {}
});
