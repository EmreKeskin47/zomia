import { Grid, Typography, Link } from "@mui/material";
import React from "react";
// import { CustomLink } from "../../styles/StyledComponents";
import { alpha, styled } from "@mui/material/styles";

const ContentSummary = ({ category, heading, date, author }) => {
  const StyledLink = styled(Link)(({ theme }) => ({
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  }));
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      sx={{ padding: "1rem" }}
    >
      <Grid item sx={{ paddingBottom: "1rem" }}>
        <StyledLink
          href="#"
          underline="none"
          color="inherit"
          align="left"
          variant="overline"
        >
          {category.toUpperCase()}
        </StyledLink>
      </Grid>
      <Grid item sx={{ paddingBottom: "0.5rem" }}>
        <StyledLink
          href="#"
          underline="none"
          color="inherit"
          align="left"
          variant="h6"
          sx={{ fontWeight: "bold" }}
        >
          {heading}
        </StyledLink>
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
