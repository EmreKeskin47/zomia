import * as React from "react";
import { Grid, Typography, Link } from "@mui/material";
import Image from "next/image";
import palette from "../theme/palette";
import imageLoader from "../loader";

const ListView = ({ heading, date, author, image, latest, description }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      sx={{ paddingBottom: "5rem" }}
    >
      <Grid item xs={11} md={6} alignSelf={"center"}>
        {image && (
          <Image
            src={image}
            loader={imageLoader}
            unoptimized
            width={latest ? "500px" : "475px"}
            height={latest ? "400px" : "350px"}
            alt="zomia article"
            sx={{ alignSelf: "center" }}
          />
        )}
      </Grid>
      <Grid item xs={10} md={6}>
        <Grid container direction="column" justifyContent="space-evenly">
          <Typography
            variant="h4"
            sx={{
              paddingTop: "2rem",
              ":hover": { color: palette.orange.main },
            }}
          >
            {heading}
          </Typography>
          <Typography
            variant={latest ? "h6" : "subtitle1"}
            sx={{ paddingTop: "2rem" }}
          >
            {description && description.substring(0, 250)}
          </Typography>
          <Typography
            variant={latest ? "h6" : "subtitle1"}
            sx={{ paddingTop: "2rem" }}
          >
            {"by " + author}
          </Typography>
          <Typography variant="subtitle2">{date}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ListView;
