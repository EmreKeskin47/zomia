import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const RenderSubtitle = (props) => {
  const { text, team, oswald } = props;
  return (
    <>
      {team ? (
        <Box marginY={4}>
          <Typography variant="h4">{text}</Typography>
        </Box>
      ) : (
        <Box
          marginY={4}
          sx={{
            marginLeft: {
              lg: 3,
            },
          }}
        >
          <Typography variant="h4">{text}</Typography>
        </Box>
      )}
    </>
  );
};

export default RenderSubtitle;
