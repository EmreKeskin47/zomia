import React, { useState } from "react";
import { connect } from "react-redux";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import AdminAppBar from "../../../components/admin/AdminAppBar";
import SelectExistingArticle from "../../components/SelectExistingArticle";
import SelectExsistingReport from "../../components/SelectExsistingReport";
import { CustomForm } from "../../../components/admin/Form";
import * as cardActions from "../../../store/actions/card-actions";
import { preserveLineBreak } from "../../../utils/ArticleParagraph";
import { useDispatch } from "react-redux";

function AddCards() {
  const [uploading, setUploading] = useState(false);

  const [selectedVal, setSelectedVal] = useState({});
  const dispatch = useDispatch();

  const addCard = (data) => {
    dispatch(
      cardActions.addToCard({
        title: data.title,
        description: preserveLineBreak(data.description),
        links: data.links,
        image: data.image,
      })
    );
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
        <Grid container direction={"column"} width={"90%"} marginX={"5%"}>
          <SelectExistingArticle setSelectedVal={setSelectedVal} />
          <SelectExsistingReport setSelectedVal={setSelectedVal} />
          <>
            <Typography variant="h4" sx={{ color: "whitesmoke" }}>
              {"Add New Content"}
            </Typography>

            <CustomForm isCard values={selectedVal} onSubmit={addCard} />
            {uploading &&
              percent > 0 &&
              toast("Upload is " + percent + "% done", {
                autoClose: 1000,
                newestOnTop: false,
              })}

            <ToastContainer />
          </>
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

export default connect(mapStateToProps)(AddCards);
