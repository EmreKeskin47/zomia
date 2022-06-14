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
      <Grid item xs={11} md={6} alignSelf={"center"} marginTop={"1rem"}>
        {image && (
          <Image
            src={image}
            loader={imageLoader}
            unoptimized
            width={"485px"}
            height={"385px"}
            alt="zomia article"
            sx={{
              alignSelf: "center",
            }}
          />
        )}
      </Grid>
      <Grid item xs={10} md={6}>
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignSelf={"center"}
          sx={{ height: "100%" }}
        >
          <Typography
            variant="h4"
            sx={{
              ":hover": { color: palette.orange.main },
            }}
          >
            {heading}
          </Typography>
          <Typography variant={"subtitle1"}>
            {description && description.substring(0, 400)}
          </Typography>

          <div>
            <Typography variant={"overline"}>{"by " + author}</Typography>
            <br />
            <Typography variant="overline">{date}</Typography>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ListView;
