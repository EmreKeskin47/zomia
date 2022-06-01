import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import VerticalDivider from "./VerticalDivider";

const RenderTitle = (props) => {
  const { text, height, onlyLogo } = props;
  return (
    <Box display="flex" alignItems="center" marginY={5}>
      <VerticalDivider height={height} onlyLogo={onlyLogo} />

      <Box>
        <Typography variant="h3">{text}</Typography>
      </Box>
    </Box>
  );
};
export default RenderTitle;
