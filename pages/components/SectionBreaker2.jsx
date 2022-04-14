import React from "react";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";
import palette from "../../theme/palette";

const SectionBreaker2 = (props) => {
  return (
    <Divider flexItem sx={{ paddingBottom: "5rem", paddingTop: "5rem" }}>
      <Typography
        href="#"
        underline="none"
        color={palette.black.main}
        variant="h4"
      >
        {props.text}
      </Typography>
    </Divider>
  );
};

export default SectionBreaker2;
