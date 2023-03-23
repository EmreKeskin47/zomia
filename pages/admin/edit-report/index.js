import { Box, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import AdminAppBar from "../../../components/admin/AdminAppBar";
import InputLabel from "@mui/material/InputLabel";
import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import * as reportActions from "../../../store/actions/report-actions";
import Typography from "@mui/material/Typography";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useReportData } from "../../../store/hooks/useData";
import { connect, useDispatch } from "react-redux";
import { CustomForm } from "../../../components/admin/Form";
import SelectExsistingReport from "../../components/SelectExsistingReport";

const Input = styled("input")({
  display: "none",
});
const EditReport = (props) => {
  const reports = useReportData();

  const handleChange = (event) => {
    console.log(event.target.value);
  };
  const [selectedVal, setSelectedVal] = useState({});
  const [uploading, setUploading] = useState(false);
  const [percent, setPercent] = useState(0);

  return (
    <Box sx={{ width: "80%", marginTop: 8, marginX: "10%" }}>
      <AdminAppBar />
      <Grid container direction={"column"} width={"90%"} marginX={"5%"}>
        <SelectExsistingReport setSelectedVal={setSelectedVal} />
        <>
          <Grid container marginTop={5}>
            <Typography variant="h4" sx={{ color: "whitesmoke" }}>
              Edit Report
            </Typography>

            <CustomForm isReport isEditable values={selectedVal} />
          </Grid>
          {uploading && percent > 0 && toast("Upload is " + percent + "% done")}

          <ToastContainer />
        </>
      </Grid>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    reports: state.reportStore.reports,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReports: () => dispatch(reportActions.fetchReports()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditReport);
