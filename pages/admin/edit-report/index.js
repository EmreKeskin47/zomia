import { Box, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import AdminAppBar from "../../../components/admin/AdminAppBar";
import { styled } from "@mui/material/styles";
import * as reportActions from "../../../store/actions/report-actions";
import Typography from "@mui/material/Typography";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useReportData } from "../../../store/hooks/useData";
import { connect, useDispatch } from "react-redux";
import { CustomForm } from "../../../components/admin/Form";
import SelectExsistingReport from "../../components/SelectExsistingReport";
import { preserveLineBreak } from "../../../utils/ArticleParagraph";

const Input = styled("input")({
  display: "none",
});
const EditReport = (props) => {
  const dispatch = useDispatch();

  const [selectedVal, setSelectedVal] = useState({});
  const [uploading, setUploading] = useState(false);
  const [percent, setPercent] = useState(0);

  const saveReport = (data) => {
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
        // additionalImg: data.additionalImg,
      })
    );
  };

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <Box sx={{ width: "80%", marginTop: 8, marginX: "10%" }}>
      <AdminAppBar />
      <Grid container direction={"column"} width={"90%"} marginX={"5%"}>
        <SelectExsistingReport returnFullData setSelectedVal={setSelectedVal} />
        <>
          <Typography variant="h4" sx={{ color: "whitesmoke" }}>
            Edit Report
          </Typography>

          <CustomForm
            isReport
            isEditable
            values={selectedVal}
            onSubmit={saveReport}
          />
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
