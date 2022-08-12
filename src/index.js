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
    // console.log(e.target.parentElement.lastElementChild.classList);
    // e.target.parentElement.lastElementChild.classList.toggle("completed");
    // e.target.nextElementSibling.nextElementSibling.nextElementSibling.classList.toggle(
    //   "completed"
    // );
    e.target.nextElementSibling.nextElementSibling.classList.toggle(
      "completed"
    );
  }
});

const editTodoList = document.querySelectorAll(".edit-todo-input");
const todoLabels = document.querySelectorAll(".todo-label");
const editForms = document.querySelectorAll(".edit-form");
console.log(editForms);

todosDisplayContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("todo-label")) {
    const deleteTodo = e.target.nextElementSibling.nextElementSibling;
    e.target.nextElementSibling.classList.add("completed");
    deleteTodo.classList.add("completed");
    e.target.classList.add("edit");
    const editTodoForm = e.target.parentElement.childNodes[1];
    const editTodoInput = editTodoForm.firstChild;
    editTodoForm.classList.add("edit");
    editTodoInput.classList.add("edit");
    editTodoInput.focus();
    editTodoInput.value = e.target.textContent;
    e.target.parentElement.classList.add("edit");
  }

  if (e.target.classList.contains("fa-trash-alt")) {
    UIDisplay.removeTodo(e.target);
    // LocalStore.removeTodo();
  }
});

todosDisplayContainer.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoLabel = e.target.nextElementSibling;
  e.target.classList.remove("edit");
  todoLabel.classList.remove("edit");
  e.target.parentElement.classList.remove("edit");
  todoLabel.textContent = e.target.firstChild.value;
  handleEditTodo(e.target);
});

const handleEditTodo = (element) => {
  const todos = LocalStore.getTodos();
  const editedTodos = todos.map((todo) => {
    return todo.index.toString() === element.id
      ? { ...todo, description: element.nextElementSibling.textContent }
      : todo;
  });
  LocalStore.saveTodos(editedTodos);
};

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
