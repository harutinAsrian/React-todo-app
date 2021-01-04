export const getComplited = (itemList) => {
  let complited = 0;
  itemList.forEach((item) => {
    if (item.completed) {
      complited++;
    }
  });
  return complited;
};
export const howManyToDo = (itemList) => {
  let result = 0;
  itemList.forEach((item) => {
    if (!item.completed) {
      result++;
    }
  });
  return result;
};
