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
    handleCheck(e.target);
    e.target.parentElement.lastElementChild.classList.toggle("completed");
    e.target.nextElementSibling.nextElementSibling.classList.toggle(
      "completed"
    );
    e.target.nextElementSibling.classList.toggle("completed");
  }
});

todosDisplayContainer.childNodes.forEach((todo) => {
  todo.addEventListener("click", (e) => {});
});

const handleEditTodo = () => {};

const handleCheck = (index) => {
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
