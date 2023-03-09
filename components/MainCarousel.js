import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import { useArticleData } from "../store/hooks/useData";
import Typography from "@mui/material/Typography";

export function MainCarousel(props) {
  const articleList = useArticleData();

  return (
    <Carousel>
      {articleList &&
        articleList.map((article) => <Item key={article.id} item={article} />)}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper
      className="main-carousel"
      sx={{
        backgroundImage: `url(${props.item.image})`,
        backgroundSize: "auto",
      }}
    >
      <Typography className="carousel-text">
        <h2>{props.item.title}</h2>
        <p>{props.item.description}</p>
      </Typography>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}
