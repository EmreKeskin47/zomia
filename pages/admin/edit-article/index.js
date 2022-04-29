import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import AdminAppBar from "../../../components/admin/AdminAppBar";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/system";
import EditArticleForm from "../../../components/admin/EditArticleForm";
import { useDispatch, useSelector } from "react-redux";
import * as articleActions from "../../../store/actions/article-actions";

const EditArticle = () => {
    const dispatch = useDispatch();
    const articleList = useSelector((state) => state.articleStore.reports);
    useEffect(() => {
        dispatch(articleActions.fetchArticles());
    }, [dispatch, articleList]);
    console.log(articleList);

    const [id, setId] = React.useState("");
    const [articles, setArticles] = useState([]);

    const handleChange = (event) => {
        setId(event.target.value);
    };

    return (
        <>
            <Box sx={{ width: "80%", marginTop: 8, marginX: "10%" }}>
                <AdminAppBar />

                <Grid
                    container
                    direction={"column"}
                    width={"90%"}
                    marginX={"5%"}
                >
                    <FormControl sx={{ minWidth: 100 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">
                            Select article
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={id}
                            onChange={handleChange}
                            sx={{
                                background: "whitesmoke",
                                width: " 100%",
                            }}
                            label="Article"
                        >
                            {articles &&
                                articles !== [] &&
                                articles.map((item, id) => {
                                    return (
                                        <div
                                            style={{
                                                color: "white",
                                                padding: 5,
                                                paddingLeft: 20,
                                            }}
                                            key={id}
                                        >
                                            <MenuItem value={item.id}>
                                                <em>{item.title}</em>
                                            </MenuItem>
                                        </div>
                                    );
                                })}
                        </Select>
                    </FormControl>
                    <EditArticleForm pageTitle={"Edit Article"} />
                </Grid>
            </Box>
        </>
    );
};

export default EditArticle;
