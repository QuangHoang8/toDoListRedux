import React, { useState } from "react";
import classes from "./Header.module.css";
import { connect } from "react-redux";
import { onAddTodo } from "../redux/actionCreators";

export function Header({ onAddTodo }) {
  const [currentItem, setCurrentItem] = useState("");
  const handleChange = (value) => {
    setCurrentItem(value);
  };

  const handeKeyDown = (event) => {
    if (event.keyCode === 13 && currentItem) {
      onAddTodo(currentItem);
      setCurrentItem("");
    }
  };

  return (
    <header className={classes.heading}>
      <h1>Tasks</h1>
      <input
        type="text"
        value={currentItem}
        placeholder="Add a task"
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={(event) => handeKeyDown(event)}
      />
    </header>
  );
}

// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     count: state.counter.count,
//   };
// };

const mapStateToProps = (state) => {
  console.log(state.addingToDo);
  return {
    todos: state.addingToDo.todos,
  };
};
const mapDispatchToProps = { onAddTodo };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
