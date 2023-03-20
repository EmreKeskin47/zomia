import React, { useEffect, useState } from "react";

import { connect, useDispatch } from "react-redux";
import { reorder } from "../../../utils/draggable";
import { Box } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import AdminAppBar from "../../../components/admin/AdminAppBar";
import { useCardData } from "../../../store/hooks/useData";
import DraggableList from "../../components/DraggableList";
import * as cardActions from "../../../store/actions/card-actions";
import SelectExistingArticle from "../../components/SelectExistingArticle";
import SelectExsistingReport from "../../components/SelectExsistingReport";
import { CustomForm } from "../../../components/admin/Form";
function EditCards(props) {
  const cardData = useCardData();
  const cardList = cardData && cardData.cards;
  const order = cardData && cardData.order;
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
      cardList &&
      cardList.map((report) => ({
        id: report.id,
        primary: report.title,
        secondary: report.description,
      }));

    setItems(structeredReports);
  }, [cardList, order]);

  const handleDeleteItem = (id) => {
    dispatch(cardActions.deleteCard(id));
  };

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
              handleDeleteItem={handleDeleteItem}
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
    cards: state.cardStore.cards,
    order: state.cardStore.order,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchCarousel: () => dispatch(carouselActions.fetchCarouselPosts()),
//   };
// };

export default connect(mapStateToProps)(EditCards);
