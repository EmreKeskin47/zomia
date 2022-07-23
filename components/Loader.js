import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Grid } from "@mui/material";
import Image from "next/image";
import imageLoader from "../loader";

const Loader = ({ type }) => {
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
        {type === 0 ? (
          <Image
            src="/static/logo.png"
            loader={imageLoader}
            unoptimized
            width={"250"}
            height={"250px"}
            alt="zomia"
          />
        ) : (
          <CircularProgress />
        )}
      </Grid>
    </Grid>
  );
};

export default Loader;
