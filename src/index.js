import _ from "lodash";
import "./style.css";
import TodoList from "./TodoList.js";
import UIDisplay from "./UIDisplay.js";
import LocalStore from "./LocalStore.js";

const todosDisplayContainer = document.querySelector(
  ".todos-display-container"
);
const todoInputForm = document.querySelector(".todo-form");

const loadTodoList = () => {
  const todos = LocalStore.getTodos();
  todos.forEach((todo) => {
    UIDisplay.displayTodoItem(todo);
  });
};

document.addEventListener("DOMContentLoaded", loadTodoList());

todoInputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todos = LocalStore.getTodos();
  const description = document.querySelector(".todo-input").value;
  const completed = false;
  const index = LocalStore.indexGenerator();

  const newTodo = new TodoList(description, completed, index);
  UIDisplay.displayTodoItem(newTodo);
  todos.push(newTodo);
  LocalStore.saveTodos(todos);
});

todosDisplayContainer.addEventListener("change", (e) => {
  if (e.target.classList.contains("checkbox")) {
    LocalStore.handleCheck(e.target);
    UIDisplay.handleCheck(e.target);
  }
});

todosDisplayContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("todo-label")) {
    UIDisplay.handleEdit(e.target);
  }

  if (e.target.classList.contains("fa-trash-alt")) {
    UIDisplay.removeTodo(e.target);
    LocalStore.removeTodo(e.target);
  }
});

todosDisplayContainer.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoLabel = e.target.nextElementSibling;
  e.target.classList.remove("edit");
  todoLabel.classList.remove("edit");
  e.target.parentElement.classList.remove("edit");
  todoLabel.textContent = e.target.firstChild.value;
  LocalStore.handleEditTodo(e.target);
});
