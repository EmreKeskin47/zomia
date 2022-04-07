import { Grid, Typography, Link } from "@mui/material";
import React from "react";
import { alpha, styled } from "@mui/material/styles";

const ContentSummary = ({ category, heading, date, author }) => {
  return (
    <Grid container direction="column" justifyContent="center">
      <Grid item sx={{ paddingBottom: "1rem" }}>
        <Link
          href="#"
          underline="none"
          color="whitesmoke"
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
          color="whitesmoke"
          align="left"
          variant="h6"
          sx={{ fontWeight: "bold" }}
        >
          {heading}
        </Link>
      </Grid>
      <Grid item>
        <Typography
          align="left"
          variant="caption"
          sx={{ fontStyle: "italic", color: "whitesmoke" }}
        >
          {date} /
        </Typography>
      </Grid>
      <Grid item sx={{ paddingBottom: "1rem" }}>
        <Typography
          align="left"
          variant="caption"
          sx={{ fontStyle: "italic", color: "whitesmoke" }}
        >
          {author}
        </Typography>
      </Grid>
      <hr />
    </Grid>
  );
};

export default ContentSummary;
