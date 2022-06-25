import * as React from "react";
import { Grid, Typography, Link } from "@mui/material";
import Image from "next/image";
import palette from "../theme/palette";
import imageLoader from "../loader";
import { isMobile } from "react-device-detect";

const ListView = ({ heading, date, author, image, latest, description }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      sx={{ paddingBottom: "2rem", marginBottom: isMobile && "8rem" }}
    >
      <Grid
        item
        xs={11}
        md={6}
        alignSelf={"center"}
        marginTop={"1rem"}
        sx={{ marginBottom: isMobile && "2rem" }}
      >
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
              fontFamily: "Merriweather !important",
              paddingTop: isMobile && "2rem",
            }}
          >
            {heading}
          </Typography>
          <Typography
            variant={"subtitle1"}
            sx={{
              fontSize: "1.2rem !important",
              paddingTop: isMobile && "2rem",
            }}
          >
            {description && description.substring(0, 400)}
          </Typography>

          <div>
            <Grid item sx={{ height: "1.5rem !important" }}>
              <Typography
                align="left"
                variant="caption"
                sx={{ fontSize: "1rem !important" }}
              >
                {"by " + author}
              </Typography>
            </Grid>

            <Grid item sx={{ height: "1.5rem !important" }}>
              <Typography
                align="left"
                variant="caption"
                sx={{ fontSize: "1rem !important" }}
              >
                {date}
              </Typography>
            </Grid>
          </div>

          {/* <div>
                        <Typography variant={"overline"}>
                            {"by " + author}
                        </Typography>
                        <br />
                        <Typography variant="overline">{date}</Typography>
                    </div> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ListView;
