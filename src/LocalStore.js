class LocalStore {
  static getTodos = () => {
    return localStorage.getItem("TodosAlpha")
      ? JSON.parse(localStorage.getItem("TodosAlpha"))
      : [];
  };

  static saveTodos = (todos) => {
    localStorage.setItem("TodosAlpha", JSON.stringify(todos));
  };

  static indexGenerator = () => {
    const todos = LocalStore.getTodos();
    return todos.length ? todos[todos.length - 1].index + 1 : 1;
  };

  static resetIndex = (todos) => {
    return todos.map((todo, i) => ({ ...todo, index: i + 1 }));
  };

  static removeTodo = (index) => {
    const todos = this.getTodos();
    const removedTodo = todos.filter((todo) => {
      return todo.index.toString() !== index.id.toString();
    });
    console.log(index.id);
    console.log(removedTodo);
    const resetTodo = this.resetIndex(removedTodo);
    this.saveTodos(resetTodo);
    console.log(resetTodo);
  };

  static handleCheck = (index) => {
    const todos = LocalStore.getTodos();
    const checkedTodos = todos.map((todo) => {
      if (todo.index.toString() === index.id.toString()) {
        if (todo.completed === false) {
          index.setAttribute("checked", "");
        } else {
          index.removeAttribute("checked");
        }
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    LocalStore.saveTodos(checkedTodos);
  };

  static handleEditTodo = (element) => {
    const todos = LocalStore.getTodos();
    const editedTodos = todos.map((todo) => {
      return todo.index.toString() === element.id
        ? { ...todo, description: element.nextElementSibling.textContent }
        : todo;
    });
    LocalStore.saveTodos(editedTodos);
  };
}

export default LocalStore;
