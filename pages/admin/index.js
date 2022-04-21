import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Article } from "../../models/Article";
import Box from "@mui/material/Box";
import ReportForm from "../../components/admin/ReportForm";
import AdminAppBar from "../../components/admin/AdminAppBar";

const Admin = () => {
    const saveArticle = () => {
        console.log("save article", image);
        const newArticle = new Article(
            0,
            title,
            image,
            date,
            author,
            category,
            description,
            link,
            text
        );
        console.log(newArticle);
    };

    const deleteArticle = () => {
        console.log("delete article");
    };

    return (
        <Box sx={{ width: "80%", marginTop: 8, marginX: "10%" }}>
            <AdminAppBar />
            <Grid container direction={"column"} width={"90%"} marginX={"5%"}>
                <ReportForm pageTitle={"Create Report"} />
            </Grid>
        </Box>
    );
};

export default Admin;
