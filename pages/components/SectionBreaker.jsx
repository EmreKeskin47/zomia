import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";

const SectionBreaker = (props) => {
  return (
    <Divider flexItem sx={{ paddingBottom: "5rem", paddingTop: "5rem" }}>
      <Typography variant="h4" component="div" sx={{ color: props.color }}>
        {props.text}
      </Typography>
    </Divider>
  );
};

export default SectionBreaker;
