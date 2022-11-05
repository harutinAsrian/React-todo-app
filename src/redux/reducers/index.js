const initialstate = {
  todoList: [
    { id: 0, text: "Learn JS", completed: true, active: false },
    { id: 1, text: "Learn React", completed: false, active: false },
    { id: 2, text: "Learn Redux", completed: false, active: false },
  ],
  filtred: "",
};

function nextTodoId(todoList) {
  const maxId = todoList.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

const itemListReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: nextTodoId(state.todoList),
            text: action.payload,
            completed: false,
            active: false,
          },
        ],
      };
    case "REMOVE_ITEM":
      const item = state.todoList.find((item) => item.id === action.payload);
      return {
        ...state,
        todoList: state.todoList.filter((oneItem) => oneItem !== item),
      };
    case "TOGGLE_DONE":
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id !== action.payload) {
            return todo;
          }
          return {
            ...todo,
            completed: !todo.completed,
            active: false,
          };
        }),
      };
    case "TOGGLE_ACTIVE":
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id !== action.payload) {
            return todo;
          }
          return {
            ...todo,
            active: !todo.active,
          };
        }),
      };

    case "FILTER_LIST":
      return {
        ...state,
        filtred: action.payload,
      };

    default:
      return state;
  }
};

export default itemListReducer;
