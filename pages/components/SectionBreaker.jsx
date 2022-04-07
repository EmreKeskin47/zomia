import React from "react";
import Grid from "@mui/material/Grid";
import { Typography, Link } from "@mui/material";
import { Divider } from "@mui/material";

const SectionBreaker = (props) => {
  return (
    <Divider flexItem sx={{ paddingBottom: "5rem", paddingTop: "5rem" }}>
      <Link href="#" underline="none" color="whitesmoke" variant="h4">
        {props.text}
      </Link>
    </Divider>
  );
};

export default SectionBreaker;
