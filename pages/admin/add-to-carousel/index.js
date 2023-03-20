import React, { useState } from "react";
import AdminAppBar from "../../../components/admin/AdminAppBar";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/system";
import { connect } from "react-redux";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useArticleData, useReportData } from "../../../store/hooks/useData";
import { CustomForm } from "../../../components/admin/Form";
import SelectExistingArticle from "../../components/SelectExistingArticle";
import SelectExsistingReport from "../../components/SelectExsistingReport";

const AddToCarousel = (props) => {
  const articleList = useArticleData();
  const reports = useReportData();
  const [selectedVal, setSelectedVal] = useState({});
  const [uploading, setUploading] = useState(false);
  // const [added, setAdded] = useState(false);
  const [percent, setPercent] = useState(0);

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

              <CustomForm isCarousel values={selectedVal} />
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
