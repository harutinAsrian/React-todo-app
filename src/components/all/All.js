import React from "react";
import TodoItem from "../todoItems/TodoItem";
import { useSelector } from "react-redux";

function All() {
  const state = useSelector((state) => state);
  const { todoList, filtred } = state;

  const itemList = [];
  todoList.forEach((item) => {
    if (item.text.toLowerCase().includes(filtred.toLowerCase())) {
      itemList.push(item);
    }
  });

  return (
    <div>
      {itemList.map((item) => {
        return (
          <TodoItem
            id={item.id}
            key={item.id}
            text={item.text}
            completed={item.completed}
            active={item.active}
          />
        );
      })}
    </div>
  );
}

export default All;
