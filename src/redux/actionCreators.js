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
export const onChangeCompleteStatus = (taskId, isCompleted) => ({
  type: "changeCompleteStatus",
  payload: {
    id: taskId,
    isCompleted: isCompleted,
  },
});
export const onChangeFavoriteStatus = (taskId, isFavorite) => ({
  type: "changeFavoriteStatus",
  payload: {
    id: taskId,
    isFavorite: isFavorite,
  },
});
