import React, { useState, useEffect } from "react";
import { CustomForm } from "./Form";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/styles";

import { styled } from "@mui/material/styles";

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
import { preserveLineBreak } from "../../utils/ArticleParagraph";

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
  const [uploading, setUploading] = useState(false);
  const [percent, setPercent] = useState(0);
  const dispatch = useDispatch();

  const submitArticle = (data) => {
    dispatch(
      articleActions.saveArticle({
        title: data.title,
        author: data.author,
        date: data.date,
        text: preserveLineBreak(data.text),
        description: preserveLineBreak(data.description),
        photoAttribution: data.photoAttribution,
        links: data.links,
        pdf: "",
        image: data.image,
        additionalImg: data.additionalImg,
      })
    );
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
      <Typography variant="h4" sx={{ color: "whitesmoke" }}>
        {pageTitle}
      </Typography>

      <CustomForm isArticle onSubmit={submitArticle} />

      {uploading && percent === 100 && toast("Upload is " + percent + "% done")}

      <ToastContainer />
    </>
  );
};

export default CreateArticleForm;
