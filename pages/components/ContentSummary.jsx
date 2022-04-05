import { Grid, Typography, Link } from "@mui/material";
import React from "react";

const ContentSummary = ({ category, heading, date, author }) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      sx={{ padding: "1rem" }}
    >
      <Grid item sx={{ paddingBottom: "1rem" }}>
        <Link
          href="#"
          underline="none"
          color="inherit"
          align="left"
          variant="overline"
        >
          {category.toUpperCase()}
        </Link>
      </Grid>
      <Grid item sx={{ paddingBottom: "0.5rem" }}>
        <Link
          href="#"
          underline="none"
          color="inherit"
          align="left"
          variant="h6"
          sx={{ fontWeight: "bold" }}
        >
          {heading}
        </Link>
      </Grid>
      <Grid item>
        <Typography align="left" variant="caption" sx={{ fontStyle: "italic" }}>
          {date} /
        </Typography>
      </Grid>
      <Grid item sx={{ paddingBottom: "1rem" }}>
        <Typography align="left" variant="caption" sx={{ fontStyle: "italic" }}>
          {author}
        </Typography>
      </Grid>
      <Grid item>
        <hr />
      </Grid>
    </Grid>
  );
};

export default ContentSummary;
