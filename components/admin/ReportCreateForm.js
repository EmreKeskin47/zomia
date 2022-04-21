import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/styles";
import { Divider, Grid, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";
import { Report } from "../../models/Report";
import { Button } from "@material-ui/core";
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";

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

const ReportForm = (props) => {
  const firestore = getFirestore();
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [text, setText] = useState("");

  const addArticle = async () => {
    try {
      await setDoc(
        doc(firestore, "articles"),
        {
          author: author,
          date: date,
          id: id,
          text: text,
          title: title,
        },
        { merge: true }
      );
      toast.success("Article has been uploaded");
    } catch (e) {
      toast.error(e.message);
    }
  };

  const saveArticle = () => {
    // const newArticle = new Report();
    addArticle();
  };

  const deleteArticle = () => {
    console.log("delete article");
  };

  return (
    <>
      <Grid container marginTop={5}>
        <Typography variant="h4">Create Report</Typography>

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
          label="Text"
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
