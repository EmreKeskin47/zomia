import React from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/styles";
import * as reportActions from "../../store/actions/report-actions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { preserveLineBreak } from "../../utils/ArticleParagraph";
import { useDispatch } from "react-redux";
import { CustomForm } from "./Form";

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
  const dispatch = useDispatch();

  const submitReport = (data) => {
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
  };

  return (
    <>
      <Typography variant="h4" sx={{ color: "whitesmoke" }}>
        {pageTitle}
      </Typography>
      <CustomForm isReport onSubmit={submitReport} />
      <ToastContainer />
    </>
  );
};

export default CreateReportForm;
