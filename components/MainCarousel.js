import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Box } from "@mui/material";
import { useArticleData } from "../store/hooks/useData";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import ActiveLink from "../pages/components/ActiveLink";
import imageLoader from "../loader";

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
    <Paper className="main-carousel">
      <ActiveLink href={`Articles/${props.item.id}`}>
        <Box>
          <Image
            src={props.item.image}
            loader={imageLoader}
            alt="Zomia Amblem"
            unoptimized
            width={"1300rem"}
            height={"500rem"}
            objectFit={"cover"}
            objectPosition={"top center"}
          />
        </Box>

        <Typography className="carousel-text">
          <h2>{props.item.title}</h2>
          <p>{props.item.description}</p>
        </Typography>
      </ActiveLink>
    </Paper>
  );
}
