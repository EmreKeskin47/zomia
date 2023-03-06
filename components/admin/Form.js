import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import * as reportActions from "../../store/actions/report-actions";
import * as articleActions from "../../store/actions/article-actions";
import { handleSnapshot, preserveLineBreak } from "../../utils/uploads";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useDispatch } from "react-redux";

export const CustomForm = (props) => {
  const { isReport, isArticle, isEditable, values } = props;
  const {
    watch,
    setValue,
    getValues,
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
      image: "",
      additionalImg: "",
      pdf: "",
    },
    values,
  });
  const dispatch = useDispatch();
  const watchTitle = watch("title");
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  const handleAdditionalImageUpload = async (event) => {
    // console.log(event.target.files);
    const files = event.target.files;
    let value = [];
    Object.values(files).forEach((file) => {
      const metadata = {
        contentType: "image/jpeg",
      };

      const storage = getStorage();
      const storageRef = ref(storage, `article/${watchTitle}.pdf`);

      const uploadTask = uploadBytesResumable(storageRef, file, metadata);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          handleSnapshot(snapshot);
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            value.push(downloadURL);
            setValue("additionalImg", value);
          });
        }
      );
    });
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
        handleSnapshot(snapshot);
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          isPdf ? setValue("pdf", downloadURL) : setValue("image", downloadURL);
        });
      }
    );
  };

  const deleteDocument = () => {
    isArticle && dispatch(articleActions.deleteArticle(values.id));
    isReport && dispatch(reportActions.deleteReport(values.id));
    setDeleted(!deleted);
  };

  const onSubmit = (data) => {
    // console.log(data);
    // data.title !== "" && {
    if (isArticle && isEditable) {
      console.log("updateArticle");

      dispatch(
        articleActions.updateArticle({
          id: data.id,
          title: data.title,
          author: data.author,
          date: data.date,
          text: preserveLineBreak(data.text),
          description: preserveLineBreak(data.description),
          photoAttribution: data.photoAttribution,
          links: data.links,
          image: data.image,
          additionalImg: data.additionalImg,
        })
      );
    } else if (isReport && isEditable) {
      console.log("update report");
      dispatch(
        reportActions.updateReport({
          id: data.id,
          title: data.title,
          author: data.author,
          date: data.date,
          text: preserveLineBreak(data.text),
          description: preserveLineBreak(data.description),
          photoAttribution: data.photoAttribution,
          pdf: data.pdf,
          image: data.image,
          additionalImg: data.additionalImg,
        })
      );
    } else if (isReport) {
      console.log("create report");
      dispatch(
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
          additionalImg: data.additionalImg,
        })
      );
    } else if (isArticle) {
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
      console.log("create Article");
    }

    // }
  };

  return (
    <>
      <form onSubmit={handleSubmit(deleted ? deleteDocument : onSubmit)}>
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
        {isArticle && (
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
        )}
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
            type="file"
            class="custom-file-input img"
            onChange={(e) => handleUpload(e, false)}
          />
        </label>
        <label htmlFor="contained-images">
          <input
            accept=".jpg,.jpeg,.png"
            id="contained-images"
            multiple
            type="file"
            class="custom-file-input additional-img"
            onChange={handleAdditionalImageUpload}
          />
        </label>
        {isReport && (
          <label htmlFor="contained-image-file">
            <input
              accept=".pdf"
              id="contained-button-file"
              multiple
              type="file"
              class="custom-file-input pdf"
              onChange={(e) => handleUpload(e, true)}
            />
          </label>
        )}
        {isEditable && (
          <label htmlFor="contained-image-file">
            <button
              id="contained-button-file"
              class="custom-file-input delete"
              onClick={() => setDeleted(true)}
            />
          </label>
        )}
        <input type="submit" />
      </form>
    </>
  );
};
