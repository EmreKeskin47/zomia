import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import styled from "@emotion/styled";
import { isMobile } from "react-device-detect";

export default function IntroArticle(props) {
  const StyledButton = styled(Button)(({ theme }) => ({
    color: "#000",
    "&:hover": {
      color: theme.palette.secondary.main,
      backgroundColor: "transparent",
    },
  }));
  return (
    <Card sx={{ padding: "0rem" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400px"
          image="/static/tempImage.png"
          alt="zomia article"
          sx={{ zIndex: "-1", position: "relative" }}
        />
        {/* <Image src="/static/tempImage.png" layout="fill" /> */}
        <CardContent>
          <Grid
            gutterBottom
            variant="h5"
            component="div"
            sx={{ marginBottom: "-7rem" }}
          ></Grid>
          <Grid
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              zIndex: "1",
            }}
          >
            <Typography
              variant="body2"
              color="white"
              sx={{
                padding: "1rem",
              }}
            >
              <Typography variant="h5" component="div">
                This is the heading
              </Typography>
              {!isMobile ? props.description : props.description.slice(0, 140)}
            </Typography>
          </Grid>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <StyledButton size="small">Read More</StyledButton>
      </CardActions> */}
    </Card>
  );
}
