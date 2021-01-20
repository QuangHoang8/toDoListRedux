import React from "react";
import _ from "lodash";
import ListItem from "./ListItem";

function TaskList({ incompleteItems }) {
  const sortedInCompletedListItem = _.orderBy(
    incompleteItems,
    ["isFavorite", "createdDate"],
    ["desc", "desc"]
  );

  return (
    <ListItem listName="Tasks" renderedItems={sortedInCompletedListItem} />
  );
}

export default TaskList;
