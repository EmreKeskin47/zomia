import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import palette from "../../theme/palette";

const NewsSummary = (props) => {
  return (
    <Grid
      sx={{
        borderRadius: 0,
        borderColor: palette.orange.main,
        border: "10px",
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image="/static/deneme2.png"
            alt="green iguana"
          />
          <CardContent sx={{ backgroundColor: palette.black.main }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="whitesmoke"
            >
              Lizard
            </Typography>
            <Typography variant="body2" color="whitesmoke">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ backgroundColor: palette.black.main }}>
          <Button size="small" sx={{ color: palette.orange.main }}>
            Share
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default NewsSummary;
