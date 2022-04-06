import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";

const SectionBreaker = (props) => {
  return (
    <Grid container direction="row" justifyContent="space-between">
      <Grid>
        <hr style={{ height: "5px", color: "whitesmoke" }} />
      </Grid>
      <Grid item>
        <Typography
          variant="h5"
          component="div"
          sx={{
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
            color: props.color,
          }}
        >
          {props.text}
        </Typography>
      </Grid>
      <Grid item>
        <Divider sx={{ color: "whitesmoke" }} />
      </Grid>
    </Grid>
  );
};

export default SectionBreaker;
