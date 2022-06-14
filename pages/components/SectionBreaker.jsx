import React, { useContext } from "react";
import { Link } from "@mui/material";
import { Divider } from "@mui/material";
import singleContext from "../../SingleContext";
import palette from "../../theme/palette";

const SectionBreaker = (props) => {
  const context = useContext(singleContext);

  return (
    <Divider flexItem sx={{ paddingBottom: "2rem", paddingTop: "3rem" }}>
      <Link
        href={props.link ? props.link : "#"}
        underline="none"
        color={context.darkMode ? "whitesmoke" : palette.black.main}
        variant="h3"
      >
        <b>{props.text}</b>
      </Link>
    </Divider>
  );
};

export default SectionBreaker;
