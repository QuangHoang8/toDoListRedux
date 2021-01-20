import axios from "axios";
import Axios from "axios";

const user = "sylk";
const apiEndpoint = "http://localhost:5000";
const getTodoEndpoint = `${apiEndpoint}/Todo/GetTodos`;
const addTodoEndpoint = `${apiEndpoint}/Todo/AddTodo`;
export const getToDos = async () => {
  return (
    await Axios.get(getTodoEndpoint, {
      params: {
        user: user,
      },
    })
  ).data.data;
};

export const addTodo = async (taskName) => {
  return await axios.post(addTodoEndpoint, {
    user: user,
    taskName: taskName,
  });
};
