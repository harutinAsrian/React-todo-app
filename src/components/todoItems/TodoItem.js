import React from "react";
import "./TodoItem.css";
import { useDispatch } from "react-redux";
import { removeFromList, doneTodo, activeTodo } from "../../actions/";

function TodoItem({ id, text, completed, active }) {
  const dispatch = useDispatch();

  return (
    <div className="todo-item-container">
      <div
        className={
          completed ? "todo-item item__text done" : "todo-item item__text"
        }
        onClick={() => dispatch(doneTodo(id))}
      >
        {text}
      </div>
      <div className="todo-item">
        <button type="button" className="btn btn-outline-danger icon">
          <i
            className="fas fa-trash-alt"
            onClick={() => dispatch(removeFromList(id))}
          ></i>
        </button>
      </div>
      <div className="todo-item">
        <button
          type="button"
          className={
            active
              ? "btn btn-outline-success icon active"
              : "btn btn-outline-success icon"
          }
        >
          <i
            className="fas fa-exclamation"
            onClick={() => dispatch(activeTodo(id))}
          ></i>
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
