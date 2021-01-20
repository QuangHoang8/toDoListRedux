import React from "react";
import _ from "lodash";
import ListItem from "./ListItem";

function CompleteTask({ completedItems }) {
  const sortedInCompletedListItem = _.orderBy(
    completedItems,
    ["completedDate"],
    ["desc"]
  );

  return (
    <ListItem listName="Completed" renderedItems={sortedInCompletedListItem} />
  );
}

export default CompleteTask;
