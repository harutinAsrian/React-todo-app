import React from "react";
import TodoItem from "../todoItems/TodoItem";
import { useSelector } from "react-redux";

function Active() {
  const itemList = useSelector((state) => state.todoList);

  return (
    <div>
      {itemList.map((item) => {
        if (item.active) {
          return (
            <TodoItem
              id={item.id}
              key={item.id}
              text={item.text}
              completed={item.completed}
              active={item.active}
            />
          );
        }

        return null
      })}
    </div>
  );
}

export default Active;
