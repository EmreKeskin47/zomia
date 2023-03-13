import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import AdminAppBar from "../../../components/admin/AdminAppBar";
import { useCarouselData } from "../../../store/hooks/useData";
import { set } from "lodash";
import { fetchCarouselPosts } from "../../../store/actions/carousel-actions";
import * as carouselActions from "../../../store/actions/carousel-actions";

function EditCarousel(props) {
  const postList = useCarouselData();
  // const fetch = async () => {
  //   const posts = await fetchCarousel();
  console.log("<<<<<<<<<<<<", postList);
  // };

  // useEffect(() => {
  //
  // let statePosts;

  // if (posts && posts !== []) {
  //   statePosts = posts.map((post) => ({
  //     id: post.id,
  //     content: post.title,
  //   }));
  // }
  // setState([statePosts]);
  // statePosts && console.log(statePosts);
  // }, [state.carouselStore.posts]);

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

        <Grid container direction={"column"} width={"90%"} marginX={"5%"}>
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
