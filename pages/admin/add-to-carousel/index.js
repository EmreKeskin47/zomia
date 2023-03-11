import React, { useState } from "react";
import AdminAppBar from "../../../components/admin/AdminAppBar";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/system";
import { connect, useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useArticleData } from "../../../store/hooks/useData";
import { CustomForm } from "../../../components/admin/Form";

const EditArticle = (props) => {
  const articleList = useArticleData();
  const [selectedVal, setSelectedVal] = useState({});
  const [uploading, setUploading] = useState(false);
  const [articleSelected, setArticleSelected] = useState(false);
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
          <FormControl sx={{ minWidth: 100 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Select article to add to carousel
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              sx={{
                background: "whitesmoke",
                width: " 100%",
              }}
              label="Article"
              defaultValue=""
            >
              {articleList &&
                articleList !== [] &&
                articleList.map((item) => {
                  // console.log("items:", item);
                  return (
                    <div
                      style={{
                        color: "#F9A21B",
                        padding: 5,
                        paddingLeft: 20,
                      }}
                      key={item.id}
                    >
                      <MenuItem
                        key={item.id}
                        value={item.title}
                        defaultValue=""
                        onClick={() => {
                          setSelectedVal({
                            id: item.id,
                            title: item.title,
                            image: item.image,
                            date: item.date,
                            photoAttribution: item.photoAttribution,
                            author: item.author,
                            description: item.description,
                            link: item.link,
                            text: item.text,
                            additionalImg: item.additionalImg,
                          });
                          console.log(selectedVal);
                          setArticleSelected(true);
                        }}
                      >
                        <em>{item.title}</em>
                      </MenuItem>
                    </div>
                  );
                })}
            </Select>
          </FormControl>
          <Button className={articleSelected ? "hide-element" : "show-element"}>
            Add To Carousel
          </Button>

          <>
            <Grid container marginTop={5}>
              <Typography variant="h4" sx={{ color: "whitesmoke" }}>
                {"Add New Content"}
              </Typography>

              <CustomForm />
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

export default connect(mapStateToProps, mapDispatchToProps)(EditArticle);
