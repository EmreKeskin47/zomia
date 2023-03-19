import React, { useEffect, useState } from "react";

import { connect, useDispatch } from "react-redux";
import { reorder } from "../../../utils/draggable";
import { Box } from "@mui/system";
import { Button, Grid } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import AdminAppBar from "../../../components/admin/AdminAppBar";
import { useReportData } from "../../../store/hooks/useData";
import DraggableList from "../../components/DraggableList";
import * as cardActions from "../../../store/actions/card-actions";

function EditCards(props) {
  const reportList = useReportData();
  const dispatch = useDispatch();

  // const cardOrder = dispatch(cardActions.fetchCardOrder());
  //   const posts = carouselData && carouselData.posts;
  //   const order = carouselData && carouselData.order;
  // console.log("<<<<<<<", cardOrder);

  const [items, setItems] = useState();
  const [render, setRender] = useState(false);

  useEffect(() => {
    //structure posts according to listItem structure
    const structeredReports =
      reportList &&
      reportList.map((report) => ({
        id: report.id,
        primary: report.title,
        secondary: report.description,
      }));

    // const strucuredAndSorted =
    //   cardOrder &&
    //   structeredReports &&
    //   structeredReports.sort(
    //     (a, b) => cardOrder.indexOf(a.id) - cardOrder.indexOf(b.id)
    //   );

    setItems(structeredReports);
  }, [reportList]);

  const onDragEnd = ({ destination, source }) => {
    // dropped outside the list
    if (!destination) return;

    const newItems = reorder(items, source.index, destination.index);

    setItems(newItems);
  };

  const newOrder = items && items.map((item) => item.id);
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

  const onSaveOrder = () => {
    dispatch(cardActions.updateCardOrder(newOrder));
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
          <Button onClick={onSaveOrder}>Save Card Order</Button>
        </Grid>
      </Box>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    // posts: state.carouselStore.posts,
    // order: state.cardStore.order,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchCarousel: () => dispatch(carouselActions.fetchCarouselPosts()),
//   };
// };

export default connect(mapStateToProps)(EditCards);
