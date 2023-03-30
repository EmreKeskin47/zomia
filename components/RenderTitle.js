import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import VerticalDivider from "./VerticalDivider";

const RenderTitle = (props) => {
  const { text, height, onlyLogo, oswald } = props;
  return (
    <Box display="flex" alignItems="center" marginY={2}>
      <VerticalDivider height={height} onlyLogo={onlyLogo} />

      <Box>
        <Typography
          variant="h4"
          sx={{
            fontFamily: oswald ? "Oswald !important" : "Tiro Telugu !important",
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};
export default RenderTitle;
