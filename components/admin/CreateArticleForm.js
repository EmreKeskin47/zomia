import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/styles";
import { Grid, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import * as articleActions from "../../store/actions/article-actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { Article } from "../../models/Article";

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
  },
});

const deneme = "Bu\\ndeneme";

const CreateArticleForm = (props) => {
  const { pageTitle } = props;
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [additionalImage, setAdditionalImage] = useState([]);
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("");
  const [photoAttribution, setPhotoAttribution] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [text, setText] = useState("");
  const [uploading, setUploading] = useState(false);
  const [percent, setPercent] = useState(0);
  const dispatch = useDispatch();

  const preserveLineBreak = (text) => {
    while (text.includes("\n")) {
      text = text.replace("\n", "\\n");
    }
    return text;
  };

  //   AN IDEA TO CLEAR ALL FORM FIELDS
  //   function clearFields(event) {
  //     Array.from(event.target).forEach((e) => (e.value = ""));
  //   }

  const saveArticle = (event) => {
    event.preventDefault();

    if (title !== "") {
      dispatch(
        articleActions.saveArticle({
          title: title,
          author: author,
          date: date,
          description: preserveLineBreak(description),
          text: preserveLineBreak(text),
          photoAttribution: photoAttribution,
          links: link,
          image: image,
          additionalImage: additionalImage,
        })
      );
      //   clearFields(event);
      setText("");
      setLink("");
      setDescription("");
      setPhotoAttribution("");
      setAuthor("");
      setDate("");
      setImage("");
      setAdditionalImage([]);
      setTitle("");
    }
  };

  const handleImageUpload = async (event) => {
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
    uploadTask.on(
      "state_changed",
      (snapshot) => {
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
        console.log(error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUploading(false);
          setImage((prev) => downloadURL);
        });
      }
    );
  };

  const handleAdditionalImageUpload = async (event) => {
    console.log(event.target.files);
    const files = event.target.files;
    Object.values(files).forEach((file) => {
      const metadata = {
        contentType: "image/jpeg",
      };

      const storage = getStorage();
      const storageRef = ref(storage, `article/${title}.pdf`);

      const uploadTask = uploadBytesResumable(storageRef, file, metadata);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
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
          console.log(error);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUploading(false);
            setAdditionalImage((prev) => [...prev, downloadURL]);
          });
        }
      );
    });
  };

  return (
    <>
      <form onSubmit={saveArticle}>
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
            label="Description"
            multiline
            fullWidth
            minRows={5}
            sx={{
              backgroundColor: "#fafafa",
              marginBottom: 4,
              whiteSpace: "pre-wrap",
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
            sx={{ backgroundColor: "#fafafa", marginBottom: 4 }}
            variant="outlined"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <TextField
            id="outlined-multiline-static"
            label="Photo Attribution"
            fullWidth
            variant="outlined"
            sx={{ backgroundColor: "#fafafa", marginBottom: 4 }}
            value={photoAttribution}
            onChange={(e) => setPhotoAttribution(e.target.value)}
          />
        </Grid>

        {uploading &&
          percent === 100 &&
          toast("Upload is " + percent + "% done")}

        <Stack direction="row" alignItems="end" spacing={2} marginBottom={10}>
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              // multiple
              type="file"
              onChange={handleImageUpload}
            />
            <Button variant="contained" component="span">
              Upload Image
            </Button>
          </label>

          <label htmlFor="contained-button">
            <Input
              accept="image/*"
              id="contained-button"
              multiple
              type="file"
              onChange={handleAdditionalImageUpload}
            />
            <Button variant="contained" component="span">
              Upload Additional Images
            </Button>
          </label>

          <Button
            type="submit"
            // onClick={saveArticle}
            variant="contained"
            endIcon={<SendIcon />}
          >
            Save
          </Button>
          <ToastContainer />
        </Stack>
      </form>
    </>
  );
};

export default CreateArticleForm;
