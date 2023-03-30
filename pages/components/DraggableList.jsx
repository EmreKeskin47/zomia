import React, { useState } from "react";
import DraggableListItem from "./DraggableListItems";
import {
  DragDropContext,
  Droppable,
  OnDragEndResponder,
} from "react-beautiful-dnd";

const DraggableList = React.memo(
  ({ items, onDragEnd, render, setRender, onDeleteItem, handleDeleteItem }) => {
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable-list">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {items.map((item, index) => (
                <DraggableListItem
                  item={item}
                  index={index}
                  key={item.id}
                  render={render}
                  setRender={setRender}
                  onDeleteItem={onDeleteItem}
                  handleDeleteItem={handleDeleteItem}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
);

DraggableList.displayName = "DraggableList";

export default DraggableList;
