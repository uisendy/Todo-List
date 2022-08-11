const todosDisplayContainer = document.querySelector(
  ".todos-display-container"
);

class UIDisplay {
  static displayTodoItem = (todo) => {
    const todoContainer = document.createElement("div");
    todoContainer.className = "todo";

    const todoInput = document.createElement("input");
    todoInput.className = "checkbox";
    todoInput.type = "checkbox";
    todoInput.id = todo.index;

    const todoLabel = document.createElement("label");
    todoLabel.for = todo.index;
    todoLabel.className = "todo-label";
    todoLabel.textContent = todo.description;

    const editIcon = document.createElement("i");
    editIcon.className = "fas fa-ellipsis-v";

    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fas fa-trash-alt";

    if (todo.completed === true) {
      todoInput.setAttribute("checked", "");
      todoLabel.classList.add("completed");

      todoContainer.appendChild(todoInput);
      todoContainer.appendChild(todoLabel);
      todoContainer.appendChild(editIcon);
      todoContainer.appendChild(deleteIcon);

      todosDisplayContainer.appendChild(todoContainer);
    } else {
      todoContainer.appendChild(todoInput);
      todoContainer.appendChild(todoLabel);
      todoContainer.appendChild(editIcon);
      todoContainer.appendChild(deleteIcon);

      todosDisplayContainer.appendChild(todoContainer);
    }
  };
}

export default UIDisplay;
