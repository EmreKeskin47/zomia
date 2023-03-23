import React, { useState } from "react";
import AdminAppBar from "../../../components/admin/AdminAppBar";
import { Box } from "@mui/system";
import { connect } from "react-redux";
import Typography from "@mui/material/Typography";
import { Grid, Stack } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CustomForm } from "../../../components/admin/Form";
import SelectExistingArticle from "../../components/SelectExistingArticle";
import * as articleActions from "../../../store/actions/article-actions";
import { preserveLineBreak } from "../../../utils/ArticleParagraph";
import { useDispatch } from "react-redux";

const EditArticle = (props) => {
  const [selectedVal, setSelectedVal] = useState({});
  const [uploading, setUploading] = useState(false);
  const [percent, setPercent] = useState(0);

  const dispatch = useDispatch();

  console.log(selectedVal);

  const updateArticle = (data) => {
    dispatch(
      articleActions.updateArticle({
        id: data.id,
        title: data.title,
        author: data.author,
        date: data.date,
        text: preserveLineBreak(data.text),
        description: preserveLineBreak(data.description),
        photoAttribution: data.photoAttribution,
        links: data.links,
        image: data.image,
        // additionalImg: data.additionalImg,
      })
    );
  };

  return (
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
        <Stack>
          <SelectExistingArticle
            setSelectedVal={setSelectedVal}
            returnFullData
          />

          <Typography variant="h4" sx={{ color: "whitesmoke" }}>
            {"Edit Article"}
          </Typography>

          <CustomForm
            isArticle
            isEditable
            values={selectedVal}
            onSubmit={updateArticle}
          />
          {uploading &&
            percent > 0 &&
            toast("Upload is " + percent + "% done", {
              autoClose: 1000,
              newestOnTop: false,
            })}

          <ToastContainer />
        </Stack>
      </Grid>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    articles: state.articleStore.articles,
  };
};

export default connect(mapStateToProps)(EditArticle);
