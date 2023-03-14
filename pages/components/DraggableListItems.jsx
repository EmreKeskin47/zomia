import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import * as carouselActions from "../../store/actions/carousel-actions";

import makeStyles from "@material-ui/core/styles/makeStyles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  draggingListItem: {
    background: "rgb(235,235,235)",
  },
});

const DraggableListItem = ({ item, index, onDeleteItem }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDeletePost = (event) => {
    const choice = window.confirm("Are you sure you want to delete this post?");
    if (!choice) return;
    dispatch(carouselActions.deleteFromCarousel(item.id));
    onDeleteItem(item.id);
    console.log("deleted");
  };

  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <ListItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={snapshot.isDragging ? classes.draggingListItem : ""}
        >
          <ListItemText primary={item.primary} secondary={item.secondary} />
          <button type="button" onClick={handleDeletePost}>
            delete
          </button>
        </ListItem>
      )}
    </Draggable>
  );
};

export default DraggableListItem;
