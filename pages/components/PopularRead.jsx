import * as React from "react";
import { Grid, Typography, Link } from "@mui/material";
import palette from "../../theme/palette";
import Image from "next/image";
import popularImage from "../../public/static/deneme2.png";

const PopularRead = ({ heading, date, author }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      sx={{ paddingBottom: "3rem" }}
    >
      <Grid item sx={{ marginRight: "15rem" }}>
        <Image
          src={popularImage}
          //   layout="fill"
          width="300px"
          height="200px"
          alt="zomia article"
          style={{
            borderRadius: "10px",
          }}
        />
      </Grid>
      <Grid item>
        <Grid container direction="column" justifyContent="space-around">
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
