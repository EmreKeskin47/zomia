import { Grid, Typography, Link } from "@mui/material";
import React from "react";
// import { CustomLink } from "../../styles/StyledComponents";
import { alpha, styled } from "@mui/material/styles";

const ContentSummary = ({ category, heading, date, author }) => {
  const StyledLink = styled(Link)(({ theme }) => ({
    "&:hover": {
      color: theme.palette.orange.main,
    },
  }));
  return (
    <Grid container direction="column" justifyContent="center">
      <Grid item sx={{ paddingBottom: "1rem" }}>
        <StyledLink
          href="#"
          underline="none"
          color="whitesmoke"
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
          color="whitesmoke"
          align="left"
          variant="h6"
          sx={{ fontWeight: "bold" }}
        >
          {heading}
        </StyledLink>
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
