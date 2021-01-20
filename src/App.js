import React from "react";
import _ from "lodash";
import CompleteTask from "./components/CompleteTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { connect } from "react-redux";
// import { onAddTodo } from "./redux/actionCreators";
import "./App.css";

export function App({ todos }) {
  // const [taskLists, setTaskLists] = useState([]);
  // setTaskLists(todos);

  // const handleAddTodo = (newTaskName) => {
  //   setTaskLists([
  //     ...taskLists,
  //     {
  //       id: new Date().getTime(),
  //       createdDate: new Date().getTime(),
  //       completedDate: null,
  //       taskName: newTaskName,
  //       isCompleted: false,
  //       isFavorite: false,
  //     },
  //   ]);
  // };

  const handleChangeCompleteStatus = (taskId, newStatus) => {
    todos.map((t) =>
      t.id === taskId
        ? {
            ...t,
            isCompleted: newStatus,
            completedDate: new Date().getTime(),
          }
        : t
    );
  };

  const handleChangeFavoriteStatus = (taskId, newStatus) => {
    todos.map((t) => (t.id === taskId ? { ...t, isFavorite: newStatus } : t));
  };

  const [completedList, inCompletedList] = _.partition(
    todos,
    (t) => t.isCompleted
  );

  return (
    <div className="App">
      <Header />
      <TaskList
        incompleteItems={inCompletedList}
        onChangeCompleteStatus={handleChangeCompleteStatus}
        onChangeFavoriteStatus={handleChangeFavoriteStatus}
      />
      <CompleteTask
        completedItems={completedList}
        onChangeCompleteStatus={handleChangeCompleteStatus}
        onChangeFavoriteStatus={handleChangeFavoriteStatus}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state.addingToDo.todos);
  return {
    todos: state.addingToDo.todos,
  };
};
// const mapDispatchToProps = { onAddTodo };
// console.log(mapStateToProps());
export default connect(mapStateToProps)(App);
