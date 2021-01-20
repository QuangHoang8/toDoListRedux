export const onAddTodo = (currentItem) => ({
  type: "addTodo",
  payload: {
    id: new Date().getTime(),
    createdDate: new Date().getTime(),
    completedDate: null,
    taskName: currentItem,
    isCompleted: false,
    isFavorite: false,
  },
});
