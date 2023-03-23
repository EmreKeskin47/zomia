import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "react-toastify/dist/ReactToastify.css";
import { useArticleData } from "../../store/hooks/useData";
import { connect } from "react-redux";

const SelectExistingArticle = ({ setSelectedVal, returnFullData }) => {
  const articleList = useArticleData();
  const [title, setTitle] = useState();

  const handleChange = (event) => {
    console.log(event.target.value);
    setTitle(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: 100, width: "90%" }}>
      <InputLabel>Select article</InputLabel>
      <Select
        sx={{
          background: "whitesmoke",
          width: " 100%",
        }}
        label="Article"
        onChange={handleChange}
        value={title}
      >
        {articleList &&
          articleList !== [] &&
          articleList.map((item) => {
            return (
              <MenuItem
                style={{
                  color: "#F9A21B",
                  padding: 5,
                  paddingLeft: 20,
                }}
                key={item.id}
                value={item.title}
                onClick={() => {
                  console.log("<<<<<<<<<<<<<", item);
                  returnFullData
                    ? setSelectedVal({
                        id: item.id,
                        title: item.title,
                        author: item.author,
                        date: item.date,
                        text: item.text,
                        photoAttribution: item.photoAttribution,
                        image: item.image,
                        description: item.description,
                        links: item.link,
                      })
                    : setSelectedVal({
                        id: item.id,
                        title: item.title,
                        image: item.image,
                        description: item.description,
                        links: `Articles/${item.id}`,
                      });
                }}
              >
                <em>{item.title}</em>
              </MenuItem>
            );
          })}
      </Select>
    </FormControl>
  );
};

const mapStateToProps = (state) => {
  return {
    articles: state.articleStore.articles,
  };
};
export default connect(mapStateToProps)(SelectExistingArticle);
