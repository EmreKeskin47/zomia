import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/styles";
import { Grid, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";
import { Report } from "../../models/Report";
import { Button } from "@material-ui/core";
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";
import { Box } from "@mui/system";
import * as reportActions from "../../store/actions/report-actions";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const { pageTitle } = props;
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const saveReport = () => {
    try {
      dispatch(
        reportActions.saveReport({
          title: title,
          author: author,
          date: date,
          text: text,
          links: link,
        })
      );
      toast("Report has been successfully added");
    } catch (e) {
      toast("HAVING PROBLEMS UPLOADING THE FILE");
    }
  };

  const deleteArticle = () => {
    console.log("delete article");
  };

  return (
    <>
      <Grid container marginTop={5}>
        <Typography variant="h4">{pageTitle}</Typography>

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
          label="Description Text"
          multiline
          fullWidth
          minRows={15}
          sx={{ backgroundColor: "#fafafa", marginBottom: 4 }}
          variant="outlined"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Grid>

      <Stack direction="row" alignItems="end" spacing={2} marginBottom={10}>
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

        <Button onClick={saveReport} variant="contained" endIcon={<SendIcon />}>
          Save
        </Button>
        <ToastContainer />
      </Stack>
    </>
  );
};

export default ReportForm;
