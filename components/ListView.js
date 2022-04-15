import * as React from "react";
import { Grid, Typography, Link } from "@mui/material";
import Image from "next/image";
import palette from "../theme/palette";

const ListView = ({ heading, date, author, image, minRead, href }) => {
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
          width="450px"
          height="300px"
          alt="zomia article"
          style={{
            borderRadius: "10px",
          }}
        />
      </Grid>
      <Grid item xs={10} md={6} alignSelf={"center"}>
        <Grid container direction="column" justifyContent="space-evenly">
          <Typography variant="overline">
            {minRead ? minRead : "4 min read"}
          </Typography>
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
            variant="subtitle1"
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
