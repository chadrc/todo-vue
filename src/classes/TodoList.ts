import Todo from "./Todo";
import genId from "@/genId";
export default class TodoList {
  id!: number;
  name!: String;
  todos!: Todo[];

  constructor(name: String, todos: Todo[] = []) {
    this.id = genId();
    this.name = name;
    this.todos = todos;
  }
}
