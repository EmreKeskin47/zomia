import { Box, Grid } from "@mui/material";
import React from "react";
import AdminAppBar from "../../../components/admin/AdminAppBar";
import ReportForm from "../../../components/admin/ReportCreateForm";
const EditArticle = () => {
    return (
        <>
            <Box sx={{ width: "80%", marginTop: 8, marginX: "10%" }}>
                <AdminAppBar />
                <Grid
                    container
                    direction={"column"}
                    width={"90%"}
                    marginX={"5%"}
                >
                    <ReportForm pageTitle={"Edit Article"} />
                </Grid>
            </Box>
        </>
    );
};

export default EditArticle;
