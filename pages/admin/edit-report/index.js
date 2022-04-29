import { Box, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import AdminAppBar from "../../../components/admin/AdminAppBar";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import EditReportForm from "../../../components/admin/EditReportForm";
import { useDispatch, useSelector } from "react-redux";
import * as reportActions from "../../../store/actions/report-actions";

const EditReport = () => {
    const [report, setReport] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(reportActions.fetchReports());
    }, [dispatch]);

    const reports = useSelector((state) => state.reportStore.reports);

    const handleChange = (event) => {
        console.log(event.target.value);
    };

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
                        value={report}
                        defaultValue={""}
                        onChange={(e) => {
                            handleChange(e);
                        }}
                        sx={{
                            background: "whitesmoke",
                            width: " 100%",
                        }}
                        label="Report"
                    >
                        {reports.map((item, id) => {
                            return (
                                <div
                                    style={{
                                        color: "white",
                                        padding: 5,
                                        paddingLeft: 20,
                                    }}
                                    key={id}
                                >
                                    <MenuItem value={item.id}>
                                        <em>{item.title}</em>
                                    </MenuItem>
                                </div>
                            );
                        })}
                    </Select>
                </FormControl>
                <EditReportForm pageTitle={"Edit Report"} />
            </Grid>
        </Box>
    );
};

export default EditReport;
