import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import palette from "../../theme/palette";
import Badge from "@mui/material/Badge";

const NewsSummary = (props) => {
  return (
    <Badge
      badgeContent={"4 mins read"}
      color="black"
      sx={{ color: "whitesmoke", backgroundColor: "black" }}
    >
      <Grid
        sx={{
          borderRadius: 0,
          borderColor: palette.orange.main,
          border: "10px",
          paddingBottom: "5rem",
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
                {props.text}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Badge>
  );
};

export default NewsSummary;
