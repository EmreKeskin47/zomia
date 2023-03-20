import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Grid } from "@mui/material";
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
      }}
    >
      <Card sx={{ maxWidth: 420 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="220"
            image={props.image}
            alt="green iguana"
          />
          <CardContent
            sx={{
              backgroundColor: context.darkMode
                ? palette.black.main
                : "whitesmoke",
              justifyContent: "flex-start",
              flexDirection: "column",
              alignItems: "baseline",
              display: "flex",
              padding: "1rem !important",
            }}
          >
            <Box>
              <Box
                sx={{
                  textAlign: "left",
                  width: "100%",
                  height: "40px",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h2"
                  sx={{
                    fontFamily: "Joan !important",
                    fontSize: "1.4rem !important",
                  }}
                >
                  {props.title && props.title}
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="body2"
              sx={{
                fontSize: "1.1rem !important",
              }}
            >
              {props.description && props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default NewsSummary;
