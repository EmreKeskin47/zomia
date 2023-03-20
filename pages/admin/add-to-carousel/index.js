import React, { useState } from "react";
import AdminAppBar from "../../../components/admin/AdminAppBar";
import { Box } from "@mui/system";
import { connect } from "react-redux";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CustomForm } from "../../../components/admin/Form";
import SelectExistingArticle from "../../components/SelectExistingArticle";
import SelectExsistingReport from "../../components/SelectExsistingReport";
import * as carouselActions from "../../../store/actions/carousel-actions";
import { preserveLineBreak } from "../../../utils/ArticleParagraph";
import { useDispatch } from "react-redux";

const AddToCarousel = (props) => {
  const dispatch = useDispatch();
  const [selectedVal, setSelectedVal] = useState({});
  const [uploading, setUploading] = useState(false);
  const [percent, setPercent] = useState(0);

  const addPost = (data) => {
    dispatch(
      carouselActions.addToCarousel({
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
            <Grid container marginTop={5}>
              <Typography variant="h4" sx={{ color: "whitesmoke" }}>
                {"Add New Content"}
              </Typography>

              <CustomForm isCarousel values={selectedVal} onSubmit={addPost} />
            </Grid>
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
};

const mapStateToProps = (state) => {
  return {
    articles: state.articleStore.articles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchArticles: () => dispatch(articleActions.fetchArticles()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToCarousel);
