import { combineReducers } from "redux";

const addingToDo = function (state = { todos: [] }, action) {
  switch (action.type) {
    case "addTodo": {
      return {
        todos: [...state.todos, action.payload],
      };
    }
    default:
      return state;
  }
};
export default combineReducers({ addingToDo });
