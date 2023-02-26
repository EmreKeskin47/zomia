import { Grid, Typography } from "@mui/material";
// import palette from "../../theme/palette";
import ActiveLink from "./ActiveLink";

import React from "react";

const ContentSummary = ({ id, description, heading, date, author, last }) => {
  return (
    <Grid container direction="column" justifyContent="center">
      <Grid item sx={{ paddingBottom: "1.5rem" }}>
        <Typography
          align="left"
          variant="h5"
          sx={{
            // ":hover": `${{ color: palette.orange.main }}!important`,
            fontFamily: "Joan !important",
          }}
        >
          <ActiveLink
            href={`/analysis/${id}`}
            // underline="none"
            // color="whitesmoke"
            // align="left"
            // variant="h5"
            // sx={{
            //   fontFamily: "Joan !important",
            // }}
          >
            {heading}
          </ActiveLink>
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          align="left"
          variant="body2"
          sx={{ fontSize: "1rem !important" }}
        >
          {description}
        </Typography>
      </Grid>
      <Grid sx={{ marginTop: 3.5, marginBottom: last ? 0 : 3.5 }}>
        {/* <hr /> */}
      </Grid>
    </Grid>
  );
};

export default ContentSummary;
