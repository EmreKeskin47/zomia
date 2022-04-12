import React, { useState, useEffect } from "react";
import { TextField, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { Report } from "../../models/Report";

const Input = styled("input")({
    display: "none",
});

const useStyles = makeStyles({
    subHeader: {
        marginTop: 10,
    },
    divider: {
        marginBottom: 10,
    },
    textField: {
        marginTop: 10,
        marginBottom: 10,
    },
});

const ReportForm = (props) => {
    const classes = useStyles();
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [date, setDate] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [link, setLink] = useState("");
    const [text, setText] = useState("");

    const saveArticle = () => {
        const newArticle = new Report();
    };

    const deleteArticle = () => {
        console.log("delete article");
    };

    return (
        <>
            <Grid item xs={10}>
                <Typography variant="h5" className={classes.subHeader}>
                    Create Report
                </Typography>

                <Divider className={classes.divider} />
                <TextField
                    id="outlined-multiline-static"
                    label="Title"
                    fullWidth
                    variant="outlined"
                    className={classes.textField}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Author(s)"
                    fullWidth
                    variant="outlined"
                    className={classes.textField}
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Date"
                    fullWidth
                    variant="outlined"
                    className={classes.textField}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Link(s)"
                    fullWidth
                    variant="outlined"
                    className={classes.textField}
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Text "
                    multiline
                    fullWidth
                    minRows={15}
                    className={classes.textField}
                    variant="outlined"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </Grid>

            <Stack direction="row" alignItems="end" spacing={2}>
                <label htmlFor="contained-button-file">
                    <Input
                        accept="image/*"
                        id="contained-button-file"
                        multiple
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                    <Button variant="contained" component="span">
                        Upload Image
                    </Button>
                </label>
                <label htmlFor="contained-button-file">
                    <Input
                        accept="image/*"
                        id="contained-button-file"
                        multiple
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                    <Button variant="contained" component="span">
                        Upload PDF
                    </Button>
                </label>

                <Button
                    onClick={saveArticle}
                    variant="contained"
                    endIcon={<SendIcon />}
                >
                    Save
                </Button>
            </Stack>
        </>
    );
};

export default ReportForm;
