import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import { useArticleData } from "../store/hooks/useData";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import ActiveLink from "../pages/components/ActiveLink";

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
      //   sx={{
      //     backgroundImage: `url(${props.item.image})`,
      //     backgroundSize: "auto",
      //   }}
    >
      <ActiveLink href={`Articles/${props.item.id}`}>
        <Image
          src={props.item.image}
          // loader={imageLoader}
          unoptimized
          alt="Zomia Amblem"
          width="1500rem"
          height="600rem"
        />

        <Typography className="carousel-text">
          <h2>{props.item.title}</h2>
          <p>{props.item.description}</p>
        </Typography>
      </ActiveLink>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}
