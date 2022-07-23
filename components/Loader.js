import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Grid } from "@mui/material";
Grid;

const Loader = () => {
  return (
    <Grid container justifyContent={"center"} alignItems={"center"}>
      <Grid
        item
        container
        justifyContent={"center"}
        alignItems="center"
        flexDirection={"column"}
        sx={{ height: "1000px" }}
      >
        <CircularProgress />
      </Grid>
    </Grid>
  );
};

export default Loader;
