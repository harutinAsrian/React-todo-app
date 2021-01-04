export const addTodoList = (payload) => {
  return {
    type: "ADD_ITEM",
    payload,
  };
};

export const removeFromList = (payload) => {
  return {
    type: "REMOVE_ITEM",
    payload,
  };
};

export const doneTodo = (payload) => {
  return {
    type: "TOGGLE_DONE",
    payload,
  };
};

export const activeTodo = (payload) => {
  return {
    type: "TOGGLE_ACTIVE",
    payload,
  };
};

export const filterList = (payload) => {
  return {
    type: "FILTER_LIST",
    payload,
  };
};
