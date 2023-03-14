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

const DraggableListItem = ({ item, index, render, setRender }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const deletePost = () => {
    console.log("hhhhhhhhhhhh", item.id, index);
    setRender(!render);
    dispatch(carouselActions.deleteFromCarousel(item.id));
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
          <button type="button" onClick={deletePost}>
            delete
          </button>
        </ListItem>
      )}
    </Draggable>
  );
};

export default DraggableListItem;
