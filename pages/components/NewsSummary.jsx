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
              height: 170,
              justifyContent: "flex-start",
              flexDirection: "column",
              alignItems: "baseline",
              display: "flex",
              padding: "1rem !important",
            }}
          >
            <Box sx={{ height: "55px" }}>
              <Box
                sx={{
                  textAlign: "left",
                  width: "100%",
                  height: "50px",
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
              {/* <Box
                sx={{
                  textAlign: "left",
                  width: "100%",
                  marginTop: "1rem",
                }}
              >
                {/* <Typography
                                    align="left"
                                    variant="caption"
                                    sx={{ fontSize: "1rem !important" }}
                                >
                                    {getShortenedString(`${props.date} / ${props.author}`)}
                                </Typography> */}
              {/* </Box> */}
            </Box>
            <Typography
              variant="body2"
              sx={{
                fontSize: "1.1rem !important",
                paddingTop: "1rem",
              }}
            >
              {/* <hr
                style={{
                  width: "100%",
                  marginTop: "18px",
                  marginBottom: "18px",
                  border: "1px solid black",
                }}
              /> */}

              {props.description && props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default NewsSummary;
