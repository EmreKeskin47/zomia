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
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
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
    const [photoAttribution, setPhotoAttribution] = useState(photoAttribution ? article.photoAttribution : "");
    const [author, setAuthor] = useState(article ? article.author : "");
    const [description, setDescription] = useState(
        article ? article.description : ""
    );
    const [link, setLink] = useState(article ? article.link : "");
    const [text, setText] = useState(article ? article.text : "");
    const [uploading, setUploading] = useState(false);
    const [percent, setPercent] = useState(0);

    const handleImageUpload = async (event) => {
        console.log(event.target.files[0]);
        const metadata = {
            contentType: "image/jpeg",
        };

        const storage = getStorage();
        const storageRef = ref(storage, `article/${title}.pdf`);

        const uploadTask = uploadBytesResumable(
            storageRef,
            event.target.files[0],
            metadata
        );
        if (uploadTask) {
            // Register three observers:
            // 1. 'state_changed' observer, called any time the state changes
            // 2. Error observer, called on failure
            // 3. Completion observer, called on successful completion
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    setUploading(true);
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setPercent(progress);
                    console.log("Upload is " + progress + "% done");
                    switch (snapshot.state) {
                        case "paused":
                            console.log("Upload is paused");
                            break;
                        case "running":
                            console.log("Upload is running");
                            break;
                    }
                },
                (error) => {
                    // Handle unsuccessful uploads
                },
                () => {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    getDownloadURL(uploadTask.snapshot.ref).then(
                        (downloadURL) => {
                            setUploading(false);
                            setImage(downloadURL);
                        }
                    );
                }
            );
        }
    };

    const deleteArticle = () => {
        dispatch(articleActions.deleteArticle(id));
    };

    const saveArticle = () => {
        dispatch(
            articleActions.updateArticle({
                id: id,
                title: title,
                author: author,
                date: date,
                description: preserveLineBreak(description),
                text: preserveLineBreak(text),
                photoAttribution: photoAttribution,
                links: link,
                image: image,
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
                            onChange={(e) => handleChange(e)}
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
                                                    console.log(item.id);
                                                    setId(item.id);
                                                    console.log(id);
                                                    setArticle(item);
                                                    setTitle(item.title);
                                                    setImage(item.image);
                                                    setDate(item.date);
                                                    setPhotoAttribution(item.photoAttribution);
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
                            <Typography
                                variant="h4"
                                sx={{ color: "whitesmoke" }}
                            >
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
                            <TextField
                                id="outlined-multiline-static"
                                label="Photo Attribution"
                                fullWidth
                                variant="outlined"
                                sx={{
                                    backgroundColor: "#fafafa",
                                    marginBottom: 4,
                                }}
                                value={photoAttribution}
                                onChange={(e) => setPhotoAttribution(e.target.value)}
                            />
                        </Grid>
                        {uploading &&
                            percent > 0 &&
                            toast("Upload is " + percent + "% done", {
                                autoClose: 1000,
                                newestOnTop: false,
                            })}

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
                                    onChange={(e) => handleImageUpload(e)}
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
