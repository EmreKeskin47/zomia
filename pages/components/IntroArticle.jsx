import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import styled from "@emotion/styled";
import { isMobile } from "react-device-detect";
import palette from "../../theme/palette";

export default function IntroArticle(props) {
  const StyledButton = styled(Button)(({ theme }) => ({
    color: "#000",
    "&:hover": {
      color: theme.palette.secondary.main,
      backgroundColor: "transparent",
    },
  }));
  return (
    <Grid
      sx={{ borderRadius: 0, borderColor: palette.orange.main, border: "10px" }}
    >
      <Card
        sx={{
          maxWidth: 1,
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            // sx={{ height: height / 2 }}
            image="/static/deneme2.png"
            alt="green iguana"
          />
          <CardContent sx={{ backgroundColor: "#231F20" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ color: "whitesmoke" }}
            >
              Lizard
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "whitesmoke" }}>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
