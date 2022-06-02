import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid, Box } from "@mui/material";
import { useRouter } from "next/router";
import palette from "../../theme/palette";
import singleContext from "../../SingleContext";
import { adjustNewLines } from "../../utils/ArticleParagraph";

export default function IntroArticle(props) {
  const context = useContext(singleContext);
  const router = useRouter();
  const { data } = props;
  var description = "No description provided";
  if (data && data.text) {
    description = adjustNewLines(data.text);
  }
  return (
    <Grid
      sx={{
        borderRadius: 0,
        borderColor: palette.orange.main,
        border: "10px",
      }}
    >
      <Card
        sx={{
          maxWidth: 1,
        }}
      >
        <CardActionArea
          onClick={() => router.push(`investigations/${data.id}`)}
        >
          {data && data.image && (
            <CardMedia component="img" image={data.image} alt="top article" />
          )}
          <CardContent
            sx={{
              backgroundColor: context.darkMode ? palette.black.main : "white",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {data && data.title.substring(0, 72)}
            </Typography>
            <Box sx={{ textAlign: "left", width: "100%" }}>
              <Typography align="left" variant="caption">
                {data && data.date} /
              </Typography>
              <Typography align="left" variant="caption">
                {data && data.author}
              </Typography>
            </Box>
            <hr
              style={{ width: "100%", marginTop: "10px", marginBottom: "10px" }}
            />
            <Typography variant="subtitle1">
              {description && description.substring(0, 250)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
