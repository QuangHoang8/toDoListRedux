import React from "react";
import TaskListItems from "./TaskListItems";
import classes from "./ListItem.module.css";

export default function ListItem({ renderedItems, listName }) {
  return (
    <section className={classes.listTask}>
      <h2>{listName}</h2>
      <ul>
        {renderedItems.map((task) => (
          <TaskListItems key={task.id} task={task} />
        ))}
      </ul>
    </section>
  );
}
