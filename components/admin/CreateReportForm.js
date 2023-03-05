import React from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/styles";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  return (
    <>
      {/* <Grid container marginTop={5}> */}
      <Typography variant="h4" sx={{ color: "whitesmoke" }}>
        {pageTitle}
      </Typography>
      <CustomForm isReport />
      <ToastContainer />
    </>
  );
};

export default CreateReportForm;
