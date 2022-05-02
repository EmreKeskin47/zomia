import React, { useState, useEffect } from "react";
import AdminAppBar from "../../../components/admin/AdminAppBar";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/system";
import { connect, useDispatch, useSelector } from "react-redux";
import * as articleActions from "../../../store/actions/article-actions";
import Typography from "@mui/material/Typography";
import { Grid, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useArticleData } from "../../../store/hooks/useData";
import { Article } from "../../../models/Article";

const Input = styled("input")({
    display: "none",
});

const EditArticle = (props) => {
    const dispatch = useDispatch();
    const articleList = useArticleData();

    const [connectArticle, setConnectArticle] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            await props.fetchArticles();
            setConnectArticle(props.articles);
        };
        fetch();
    }, [props.articles, connectArticle]);

    const [article, setArticle] = useState();
    const handleChange = (event) => {
        console.log(event);
    };

    const preserveLineBreak = (text) => {
        while (text.includes("\n")) {
            text = text.replace("\n", "\\n");
        }
        return text;
    };

    const [id, setId] = useState(article ? article.id : "");
    const [title, setTitle] = useState(article ? article.title : "");
    const [image, setImage] = useState(article ? article.image : "");
    const [date, setDate] = useState(article ? article.date : "");
    const [author, setAuthor] = useState(article ? article.author : "");
    const [description, setDescription] = useState(
        article ? article.description : ""
    );
    const [link, setLink] = useState(article ? article.link : "");
    const [text, setText] = useState(article ? article.text : "");

    const deleteArticle = () => {
        try {
            dispatch(articleActions.deleteArticle(id));
            toast("Article has been successfully deleted");
        } catch (e) {
            toast("HAVING PROBLEMS WITH DELETE");
        }
    };

    const saveArticle = () => {
        console.log(id, title, "save article");
        const newArticle = new Article(
            id,
            title,
            image,
            date,
            author,
            "",
            preserveLineBreak(description),
            link,
            preserveLineBreak(text)
        );
        try {
            dispatch(articleActions.updateArticle(newArticle));
            toast("Article has been successfully added");
        } catch (e) {
            toast("HAVING PROBLEMS UPLOADING THE FILE`");
        }
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
                >
                    <FormControl sx={{ minWidth: 100 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">
                            Select article
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={title}
                            onChange={(e) => handleChange(e)}
                            sx={{
                                background: "whitesmoke",
                                width: " 100%",
                            }}
                            label="Article"
                        >
                            {articleList &&
                                articleList !== [] &&
                                articleList.map((item) => {
                                    return (
                                        <div
                                            style={{
                                                color: "white",
                                                padding: 5,
                                                paddingLeft: 20,
                                            }}
                                            key={item.id}
                                        >
                                            <MenuItem
                                                key={item.id}
                                                value={item.title}
                                                onClick={() => {
                                                    console.log(item.id);
                                                    setId(item.id);
                                                    console.log(id);
                                                    setArticle(item);
                                                    setTitle(item.title);
                                                    setImage(item.image);
                                                    setDate(item.date);
                                                    setAuthor(item.author);
                                                    setDescription(
                                                        item.description
                                                    );
                                                    setLink(item.link);
                                                    setText(item.text);
                                                }}
                                            >
                                                <em>{item.title}</em>
                                            </MenuItem>
                                        </div>
                                    );
                                })}
                        </Select>
                    </FormControl>

                    <>
                        <Grid container marginTop={5}>
                            <Typography variant="h4">
                                {"Edit Article"}
                            </Typography>

                            <TextField
                                id="outlined-multiline-static"
                                label="Title"
                                fullWidth
                                variant="outlined"
                                sx={{
                                    backgroundColor: "#fafafa",
                                    marginBottom: 4,
                                }}
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />

                            <TextField
                                id="outlined-multiline-static"
                                label="Author(s)"
                                fullWidth
                                variant="outlined"
                                sx={{
                                    backgroundColor: "#fafafa",
                                    marginBottom: 4,
                                }}
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="Date"
                                fullWidth
                                variant="outlined"
                                sx={{
                                    backgroundColor: "#fafafa",
                                    marginBottom: 4,
                                }}
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="Link(s)"
                                fullWidth
                                variant="outlined"
                                sx={{
                                    backgroundColor: "#fafafa",
                                    marginBottom: 4,
                                }}
                                value={link}
                                onChange={(e) => setLink(e.target.value)}
                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="Description"
                                multiline
                                fullWidth
                                minRows={5}
                                sx={{
                                    backgroundColor: "#fafafa",
                                    marginBottom: 4,
                                }}
                                variant="outlined"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="Text"
                                multiline
                                fullWidth
                                minRows={15}
                                sx={{
                                    backgroundColor: "#fafafa",
                                    marginBottom: 4,
                                }}
                                variant="outlined"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />
                        </Grid>

                        <Stack
                            direction="row"
                            alignItems="end"
                            spacing={2}
                            marginBottom={10}
                        >
                            <label htmlFor="contained-button-file">
                                <Input
                                    accept="image/*"
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                    onChange={(e) =>
                                        setImage(e.target.files[0])
                                    }
                                />
                                <Button variant="contained" component="span">
                                    Upload Image
                                </Button>
                            </label>

                            <Button
                                onClick={saveArticle}
                                variant="contained"
                                endIcon={<SendIcon />}
                            >
                                Save
                            </Button>

                            <Button onClick={deleteArticle} variant="contained">
                                Delete Article
                            </Button>

                            <ToastContainer />
                        </Stack>
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
        fetchArticles: () => dispatch(articleActions.fetchArticles()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditArticle);
