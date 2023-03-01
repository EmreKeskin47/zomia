import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import * as reportActions from "../../store/actions/report-actions";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useDispatch } from "react-redux";

export const CustomForm = (props) => {
  const { isReport, isArticle } = props;
  const {
    watch,
    setValue,
    reset,
    control,
    handleSubmit,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      title: "",
      author: "",
      date: "",
      text: "",
      description: "",
      photoAttribution: "",
      links: "",
      image: null,
      pdf: null,
    },
  });
  const dispatch = useDispatch();
  const [uploading, setUploading] = useState(false);
  const [percent, setPercent] = useState(0);
  const watchTitle = watch("title");

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  const preserveLineBreak = (text) => {
    while (text.includes("\n")) {
      text = text.replace("\n", "\\n");
    }
    return text;
  };

  const handleUpload = async (event, isPdf) => {
    const metadata = {
      contentType: isPdf ? "application/pdf" : "image/jpeg",
    };
    const storage = getStorage();
    const storageRef = ref(storage, `images/${watchTitle}.pdf`);

    const uploadTask = uploadBytesResumable(
      storageRef,
      event.target.files[0],
      metadata
    );
    uploadTask.on(
      "state_changed",
      (snapshot) => {
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
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUploading(false);
          isPdf ? setValue("pdf", downloadURL) : setValue("image", downloadURL);
        });
      }
    );
  };

  const onSubmit = (data) => {
    console.log(data);
    if (data.title !== "") {
      dispatch(
        isReport &&
          reportActions.saveReport({
            title: data.title,
            author: data.author,
            date: data.date,
            text: preserveLineBreak(data.text),
            description: preserveLineBreak(data.description),
            photoAttribution: data.photoAttribution,
            links: data.links,
            pdf: data.pdf,
            image: data.image,
          })
        // isArticle &&
        //   reportActions.saveArticle({
        //     title: data.title,
        //     author: data.author,
        //     date: data.date,
        //     text: preserveLineBreak(data.text),
        //     description: preserveLineBreak(data.description),
        //     photoAttribution: data.photoAttribution,
        //     links: data.links,
        //     pdf: "",
        //     image: data.image,
        //   })
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="title"
        control={control}
        render={({ field }) => (
          <TextField
            id="outlined-multiline-static"
            label="Title"
            fullWidth
            variant="outlined"
            style={{ backgroundColor: "#fafafa", marginBottom: 4 }}
            {...field}
          />
        )}
      />
      <Controller
        name="author"
        control={control}
        render={({ field }) => (
          <TextField
            id="outlined-multiline-static"
            label="Author(s)"
            fullWidth
            variant="outlined"
            style={{ backgroundColor: "#fafafa", marginBottom: 4 }}
            {...field}
          />
        )}
      />
      <Controller
        name="date"
        control={control}
        render={({ field }) => (
          <TextField
            id="outlined-multiline-static"
            label="Date"
            fullWidth
            variant="outlined"
            style={{ backgroundColor: "#fafafa", marginBottom: 4 }}
            {...field}
          />
        )}
      />
      <Controller
        name="links"
        control={control}
        render={({ field }) => (
          <TextField
            id="outlined-multiline-static"
            label="Link(s)"
            fullWidth
            variant="outlined"
            style={{ backgroundColor: "#fafafa", marginBottom: 4 }}
            {...field}
          />
        )}
      />
      <Controller
        name="text"
        control={control}
        render={({ field }) => (
          <TextField
            id="outlined-multiline-static"
            label="Text"
            fullWidth
            variant="outlined"
            style={{ backgroundColor: "#fafafa", marginBottom: 4 }}
            {...field}
          />
        )}
      />
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <TextField
            id="outlined-multiline-static"
            label="Description"
            fullWidth
            variant="outlined"
            style={{ backgroundColor: "#fafafa", marginBottom: 4 }}
            {...field}
          />
        )}
      />
      <Controller
        name="photoAttribution"
        control={control}
        render={({ field }) => (
          <TextField
            id="outlined-multiline-static"
            label="Photo attribution"
            fullWidth
            variant="outlined"
            style={{ backgroundColor: "#fafafa", marginBottom: 4 }}
            {...field}
          />
        )}
      />
      <label htmlFor="contained-image-file">
        <input
          accept=".jpg,.jpeg,.png"
          id="contained-image-file"
          multiple
          type="file"
          onChange={(e) => handleUpload(e, false)}
        />
      </label>
      {isReport && (
        <label htmlFor="contained-image-file">
          <input
            accept=".pdf"
            id="contained-button-file"
            multiple
            type="file"
            class="custom-file-input"
            onChange={(e) => handleUpload(e, true)}
          />
        </label>
      )}
      <input type="submit" />
    </form>
  );
};
