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
}

export default LocalStore;
