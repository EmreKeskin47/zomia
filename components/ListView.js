import * as React from "react";
import { Grid, Typography, Link } from "@mui/material";
import Image from "next/image";
import palette from "../theme/palette";
import imageLoader from "../loader";

const ListView = ({ heading, date, author, image, minRead, latest }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      sx={{ paddingBottom: "5rem" }}
    >
      <Grid item xs={11} md={6}>
        <Image
          src={image}
          loader={imageLoader}
          unoptimized
          width={latest ? "480px" : "450px"}
          height={latest ? "350px" : "300px"}
          alt="zomia article"
        />
      </Grid>
      <Grid item xs={10} md={6} alignSelf={"center"}>
        <Grid container direction="column" justifyContent="space-evenly">
          <Typography
            variant={latest ? "h3" : "h4"}
            sx={{
              paddingTop: "2rem",
              ":hover": { color: palette.orange.main },
            }}
          >
            {heading}
          </Typography>
          <Typography
            variant={latest ? "h6" : "subtitle1"}
            fontStyle={"italic"}
            sx={{ paddingTop: "2rem" }}
          >
            {"by " + author}
          </Typography>
          <Typography variant="subtitle2" fontStyle={"italic"}>
            {"on " + date}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ListView;
