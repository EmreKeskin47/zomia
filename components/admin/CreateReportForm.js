import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/styles";
import { Grid, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@material-ui/core";
import * as reportActions from "../../store/actions/report-actions";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";

const Input = styled("input")({
    display: "none",
});
const useStyles = makeStyles({
    subHeader: {
        marginTop: 10,
    },
    divider: {
        marginBottom: 10,
        marginTop: 25,
    },
    textField: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "#fafafa",
    },
});

const CreateReportForm = (props) => {
    const { pageTitle } = props;
    const classes = useStyles();
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [date, setDate] = useState("");
    const [author, setAuthor] = useState("");
    const [link, setLink] = useState("");
    const [text, setText] = useState("");
    const [description, setDescription] = useState("");
    const [pdf, setPdf] = useState("");
    const [uploading, setUploading] = useState(false);
    const [percent, setPercent] = useState(0);

    const dispatch = useDispatch();
    const preserveLineBreak = (text) => {
        while (text.includes("\n")) {
            text = text.replace("\n", "\\n");
        }
        return text;
    };
    const handlePDFUpload = async (event) => {
        const metadata = {
            contentType: "application/pdf",
        };

        const storage = getStorage();
        const storageRef = ref(storage, `reports/${title}.pdf`);

        const uploadTask = uploadBytesResumable(
            storageRef,
            event.target.files[0],
            metadata
        );

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
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setUploading(false);
                    setPdf(downloadURL);
                });
            }
        );
    };

    const handleImageUpload = async (event) => {
        const metadata = {
            contentType: "image/jpeg",
        };

        const storage = getStorage();
        const storageRef = ref(storage, `images/${title}.pdf`);

        const uploadTask = uploadBytesResumable(
            storageRef,
            event.target.files[0],
            metadata
        );

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
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setUploading(false);
                    setImage(downloadURL);
                });
            }
        );
    };

    const saveReport = () => {
        if (title !== "") {
            dispatch(
                reportActions.saveReport({
                    title: title,
                    author: author,
                    date: date,
                    text: preserveLineBreak(text),
                    description: preserveLineBreak(description),
                    links: link,
                    pdf: pdf,
                    image: image,
                })
            );
        }
    };

    return (
        <>
            <Grid container marginTop={5}>
                <Typography variant="h4" sx={{ color: "whitesmoke" }}>
                    {pageTitle}
                </Typography>
                <TextField
                    id="outlined-multiline-static"
                    label="Title"
                    fullWidth
                    variant="outlined"
                    sx={{ backgroundColor: "#fafafa", marginBottom: 4 }}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <TextField
                    id="outlined-multiline-static"
                    label="Author(s)"
                    fullWidth
                    variant="outlined"
                    sx={{ backgroundColor: "#fafafa", marginBottom: 4 }}
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Date"
                    fullWidth
                    variant="outlined"
                    sx={{ backgroundColor: "#fafafa", marginBottom: 4 }}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Link(s)"
                    fullWidth
                    variant="outlined"
                    sx={{ backgroundColor: "#fafafa", marginBottom: 4 }}
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Text (to be shown in investigation page)"
                    multiline
                    fullWidth
                    minRows={15}
                    sx={{ backgroundColor: "#fafafa", marginBottom: 4 }}
                    variant="outlined"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Description (to be shown on homepage)"
                    multiline
                    fullWidth
                    minRows={15}
                    sx={{ backgroundColor: "#fafafa", marginBottom: 4 }}
                    variant="outlined"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </Grid>
            {uploading &&
                percent > 0 &&
                toast("Upload is " + percent + "% done")}

            <Stack
                direction="row"
                alignItems="end"
                spacing={2}
                marginBottom={10}
            >
                <label htmlFor="contained-button-file">
                    <Input
                        accept=".pdf"
                        id="contained-button-file"
                        multiple
                        type="file"
                        onChange={handlePDFUpload}
                    />
                    <Button variant="contained" component="span">
                        Upload PDF
                    </Button>
                </label>

                <label htmlFor="contained-image-file">
                    <Input
                        accept=".jpg,.jpeg,.png"
                        id="contained-image-file"
                        multiple
                        type="file"
                        onChange={handleImageUpload}
                    />
                    <Button variant="contained" component="span">
                        Upload Image
                    </Button>
                </label>

                <Button
                    onClick={saveReport}
                    variant="contained"
                    endIcon={<SendIcon />}
                >
                    Save
                </Button>
                <ToastContainer />
            </Stack>
        </>
    );
};

export default CreateReportForm;
