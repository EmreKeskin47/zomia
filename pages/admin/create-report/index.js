import { Box, Grid } from "@mui/material";
import React from "react";
import AdminAppBar from "../../../components/admin/AdminAppBar";
import CreateReportForm from "../../../components/admin/CreateReportForm";

const CreateReport = () => {
    return (
        <Box sx={{ width: "80%", marginTop: 8, marginX: "10%" }}>
            <AdminAppBar />
            <Grid container direction={"column"} width={"90%"} marginX={"5%"}>
                <CreateReportForm pageTitle={"Create Report"} />
            </Grid>
        </Box>
    );
};

export default CreateReport;
