import { Box, Grid } from "@mui/material";
import React from "react";
import AdminAppBar from "../../../components/admin/AdminAppBar";
import CreateArticleForm from "../../../components/admin/CreateArticleForm";

const CreateArticle = () => {
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
                    <CreateArticleForm pageTitle={"Create Article"} />
                </Grid>
            </Box>
        </>
    );
};

export default CreateArticle;
