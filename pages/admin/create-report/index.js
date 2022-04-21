import { Grid } from "@mui/material";
import React from "react";
import ReportForm from "../../../components/admin/ReportCreateForm";

const CreateReport = () => {
    return (
        <Grid container justifyContent="center" padding={4}>
            <Grid item xs={10}>
                <ReportForm />
            </Grid>
        </Grid>
    );
};

export default CreateReport;
