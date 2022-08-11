import _ from "lodash";
import "./style.css";
import UIDisplay from "./UIDisplay.js";

const sampleTodoList = [
  { description: "Go on a Fishing today", completed: false, index: 0 },
  { description: "Shopping by 3pm", completed: false, index: 1 },
  { description: "Attend Online Class by 9pm", completed: false, index: 0 },
];

const loadTodoList = () => {
  sampleTodoList.forEach((todo) => {
    UIDisplay.displayTodoItem(todo);
  });
};

document.addEventListener("DOMContentLoaded", loadTodoList());
