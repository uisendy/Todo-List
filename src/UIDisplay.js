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

    const editForm = document.createElement("form");
    editForm.className = "edit-form";
    editForm.id = todo.index;

    const editTodoInput = document.createElement("input");
    editTodoInput.className = "edit-todo-input";
    editTodoInput.type = "text";

    const editFormBtn = document.createElement("button");
    editFormBtn.className = "edit-form-btn";
    editFormBtn.type = "submit";

    editForm.appendChild(editTodoInput);
    editForm.appendChild(editFormBtn);

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
      // editIcon.classList.add("completed");
      // deleteIcon.classList.add("completed");

      todoContainer.appendChild(todoInput);
      todoContainer.appendChild(editForm);
      todoContainer.appendChild(todoLabel);
      todoContainer.appendChild(editIcon);
      todoContainer.appendChild(deleteIcon);

      todosDisplayContainer.appendChild(todoContainer);
    } else {
      todoContainer.appendChild(todoInput);
      todoContainer.appendChild(editForm);
      todoContainer.appendChild(todoLabel);
      todoContainer.appendChild(editIcon);
      todoContainer.appendChild(deleteIcon);

      todosDisplayContainer.appendChild(todoContainer);
    }
  };

  static removeTodo = (todo) => {
    todo.parentElement.remove();
  };
}

export default UIDisplay;
