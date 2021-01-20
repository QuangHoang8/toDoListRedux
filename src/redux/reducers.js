import { combineReducers } from "redux";

const addingToDo = function (state = { todos: [] }, action) {
  switch (action.type) {
    case "addTodo": {
      return {
        todos: [...state.todos, action.payload],
      };
    }
    case "changeCompleteStatus": {
      return {
        todos: state.todos.map((t) =>
          t.id === action.payload.id
            ? {
                ...t,
                isCompleted: action.payload.isCompleted,
                completedDate: new Date().getTime(),
              }
            : t
        ),
      };
    }
    case "changeFavoriteStatus": {
      return {
        todos: state.todos.map((t) =>
          t.id === action.payload.id
            ? { ...t, isFavorite: action.payload.isFavorite }
            : t
        ),
      };
    }
    default:
      return state;
  }
};
export default combineReducers({ addingToDo });
