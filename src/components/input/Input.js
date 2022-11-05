import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoList } from "../../redux/actions";

function Input() {
  const dispatch = useDispatch();
  const [todoAction, setTodoAction] = useState("");

  const handleClick = () => {
    if (todoAction != "") {
      dispatch(addTodoList(todoAction));
    }
    setTodoAction("");
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Add action"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        value={todoAction}
        onChange={(e) => setTodoAction(e.target.value)}
      />
      <div className="input-group-append">
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={handleClick}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Input;
