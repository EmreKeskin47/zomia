import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Divider, Grid } from "@mui/material";
import palette from "../../theme/palette";
import singleContext from "../../SingleContext";

const NewsSummary = (props) => {
  const context = useContext(singleContext);
  return (
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
            // image="/static/deneme2.png"
            image={props.image}
            alt="green iguana"
          />
          <CardContent
            sx={{
              backgroundColor: context.darkMode
                ? palette.black.main
                : "whitesmoke",
              minHeight: 350,
              justifyContent: "flex-start",
              flexDirection: "column",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2">{props.description}</Typography>
            <Divider sx={{ marginTop: 2, marginBottom: 2 }}></Divider>
            <Box sx={{ textAlign: "left", width: "100%" }}>
              <Typography
                align="left"
                variant="caption"
                sx={{
                  fontStyle: "italic",
                  color: "whitesmoke",
                }}
              >
                {props.date} /
              </Typography>

              <Typography
                align="left"
                variant="caption"
                sx={{
                  fontStyle: "italic",
                  color: "whitesmoke",
                }}
              >
                {props.author}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default NewsSummary;
