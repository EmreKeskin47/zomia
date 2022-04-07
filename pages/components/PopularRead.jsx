import * as React from "react";
import { Grid, Typography, Link, Divider } from "@mui/material";
import palette from "../../theme/palette";
import Image from "next/image";
import popularImage from "../../public/static/deneme2.png";
import { isMobile } from "react-device-detect";

const PopularRead = ({ heading, date, author }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      sx={{ paddingBottom: "5rem" }}
    >
      <Grid item sm={12} xs={12} md={6} lg={6}>
        <Image
          src={popularImage}
          //   layout="fill"
          width="450px"
          height="300px"
          alt="zomia article"
          style={{
            borderRadius: "10px",
          }}
        />
      </Grid>
      <Grid item sm={12} xs={12} md={6} lg={6}>
        <Grid container direction="column" justifyContent="space-evenly">
          <Typography variant="overline" component="div" color="whitesmoke">
            4 min read
          </Typography>
          <Link variant="h4" sx={{ paddingTop: "2rem" }}>
            {heading}
          </Link>
          <Typography
            variant="overline"
            component="div"
            fontStyle={"italic"}
            color="whitesmoke"
            sx={{ paddingTop: "2rem" }}
          >
            {date} / {author}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PopularRead;
