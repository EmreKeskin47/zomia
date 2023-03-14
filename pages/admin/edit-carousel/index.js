import React, { useEffect, useState } from "react";

import { connect, useDispatch } from "react-redux";
import { reorder } from "../../../utils/draggable";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import AdminAppBar from "../../../components/admin/AdminAppBar";
import { useCarouselData } from "../../../store/hooks/useData";
import DraggableList from "../../components/DraggableList";
import * as carouselActions from "../../../store/actions/carousel-actions";

function EditCarousel(props) {
  const postList = useCarouselData();
  const dispatch = useDispatch();
  const [items, setItems] = useState();
  const [render, setRender] = useState(false);

  useEffect(() => {
    const orderedPosts =
      postList &&
      postList.map((post) => ({
        id: post.id,
        primary: post.title,
        secondary: post.description,
      }));
    console.log("ordered", orderedPosts);
    setItems(orderedPosts);
  }, [postList]);

  const onDragEnd = ({ destination, source }) => {
    // dropped outside the list
    if (!destination) return;

    const newItems = reorder(items, source.index, destination.index);

    setItems(newItems);
  };

  const onDeleteItem = (id) => {
    const newItems = (items) => {
      const foundItemIndex = items.findIndex((entry) => entry.id === id);
      console.log(foundItemIndex);

      if (foundItemIndex !== -1) items.splice(foundItemIndex, 1);
      console.log(foundItemIndex);

      return items;
    };
    setItems(newItems);
  };

  return (
    <>
      <Box
        sx={{
          width: "80%",
          marginTop: 8,
          marginX: "10%",
          height: "90%",
        }}
      >
        <AdminAppBar />

        <Grid
          container
          direction={"column"}
          width={"90%"}
          marginX={"5%"}
          style={{ background: "white" }}
        >
          {items && (
            <DraggableList
              items={items}
              onDragEnd={onDragEnd}
              render={render}
              setRender={setRender}
              onDeleteItem={onDeleteItem}
            />
          )}

          <ToastContainer />
        </Grid>
      </Box>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log("state", state.carouselStore.posts);
  return {
    posts: state.carouselStore.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCarousel: () => dispatch(carouselActions.fetchCarouselPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCarousel);
