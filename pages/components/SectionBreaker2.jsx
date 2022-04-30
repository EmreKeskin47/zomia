import React, { useContext } from "react";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";
import palette from "../../theme/palette";
import singleContext from "../../SingleContext";

const SectionBreaker2 = (props) => {
  const context = useContext(singleContext);
  return (
    <Divider flexItem sx={{ paddingBottom: "5rem", paddingTop: "5rem" }}>
      <Typography
        href="#"
        underline="none"
        color={context.darkMode ? "whitesmoke" : palette.black.main}
        variant="h4"
      >
        {props.text}
      </Typography>
    </Divider>
  );
};

export default SectionBreaker2;
