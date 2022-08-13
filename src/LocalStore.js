class LocalStore {
  static getTodos = () => (localStorage.getItem('TodosAlpha')
    ? JSON.parse(localStorage.getItem('TodosAlpha'))
    : []);

  static saveTodos = (todos) => {
    localStorage.setItem('TodosAlpha', JSON.stringify(todos));
  };

  static indexGenerator = () => {
    const todos = LocalStore.getTodos();
    return todos.length ? todos[todos.length - 1].index + 1 : 1;
  };

  static resetIndex = (todos) => todos.map((todo, i) => ({ ...todo, index: i + 1 }));

  static removeTodo = (index) => {
    const todos = this.getTodos();
    const removedTodo = todos.filter(
      (todo) => todo.index.toString() !== index.id.toString(),
    );
    const resetTodo = this.resetIndex(removedTodo);
    this.saveTodos(resetTodo);
  };

  static handleCheck = (index) => {
    const todos = LocalStore.getTodos();
    const checkedTodos = todos.map((todo) => {
      if (todo.index.toString() === index.id.toString()) {
        if (todo.completed === false) {
          index.setAttribute('checked', '');
        } else {
          index.removeAttribute('checked');
        }
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    LocalStore.saveTodos(checkedTodos);
  };

  static handleEditTodo = (element) => {
    const todos = LocalStore.getTodos();
    const editedTodos = todos.map((todo) => (todo.index.toString() === element.id
      ? { ...todo, description: element.nextElementSibling.textContent }
      : todo));
    LocalStore.saveTodos(editedTodos);
  };

  static handleRemoveAllCompleted = () => {
    const todos = this.getTodos();
    const uncompletedTodos = todos.filter((todo) => !todo.completed);
    this.saveTodos(uncompletedTodos);
  };
}

export default LocalStore;
