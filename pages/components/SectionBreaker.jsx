import React, { useContext } from "react";
import ActiveLink from "./ActiveLink";
import { Divider, Typography } from "@mui/material";
import singleContext from "../../SingleContext";
import palette from "../../theme/palette";

const SectionBreaker = (props) => {
  const context = useContext(singleContext);

  return (
    <Divider flexItem sx={{ paddingBottom: "5rem", paddingTop: "4rem" }}>
      <ActiveLink
        href={props.link ? props.link : "#"}
        textDecoration="none"
        color={context.darkMode ? "whitesmoke" : palette.black.main}
      >
        <Typography variant="h2">{props.text} </Typography>
      </ActiveLink>
    </Divider>
  );
};

export default SectionBreaker;
