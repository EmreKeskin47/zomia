import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import CreateReportForm from "../../components/admin/CreateReportForm";
import AdminAppBar from "../../components/admin/AdminAppBar";
import { useDispatch } from "react-redux";
import * as articleActions from "../../store/actions/article-actions";

const Admin = () => {
  const dispatch = useDispatch();
  const context = useContext(singleContext);
  useEffect(() => {
    dispatch(articleActions.fetchArticles());
    dispatch(articleActions.deleteArticle(2));
  }, []);

  return (
    <Box
      sx={{
        width: "80%",
        marginTop: 8,
        marginX: "10%",
      }}
    >
      <AdminAppBar />
      <Grid container direction={"column"} width={"90%"} marginX={"5%"}>
        <CreateReportForm pageTitle={"Create Report"} />
      </Grid>
    </Box>
  );
};

export default Admin;
