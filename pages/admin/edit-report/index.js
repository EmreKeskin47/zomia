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
        <FormControl sx={{ minWidth: 100 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Select report
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={selectedVal.title}
            onChange={(e) => handleChange(e)}
            sx={{
              background: "whitesmoke",
              width: " 100%",
            }}
            label="Report"
          >
            {reports &&
              reports !== [] &&
              reports.map((item, id) => {
                return (
                  <div
                    style={{
                      color: "#F9A21B",
                      padding: 5,
                      paddingLeft: 20,
                    }}
                    key={id}
                  >
                    <MenuItem
                      key={item.id}
                      value={item.title}
                      onClick={() => {
                        setSelectedVal({
                          id: item.id,
                          title: item.title,
                          image: item.image,
                          date: item.date,
                          photoAttribution: item.photoAttribution,
                          author: item.author,
                          description: item.description,
                          link: item.link,
                          text: item.text,
                          pdf: item.pdfLink,
                          additionalImg: item.additionalImg,
                        });
                        console.log(selectedVal);
                      }}
                    >
                      <em>{item.title}</em>
                    </MenuItem>
                  </div>
                );
              })}
          </Select>
        </FormControl>
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
