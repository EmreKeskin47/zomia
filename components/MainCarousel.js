import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Box } from "@mui/material";
import { useCarouselData } from "../store/hooks/useData";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import ActiveLink from "../pages/components/ActiveLink";
import imageLoader from "../loader";

export function MainCarousel(props) {
  const carouselList = useCarouselData();
  const posts = carouselList && carouselList.posts;

  return (
    <Carousel>
      {posts && posts.map((post) => <Item key={post.id} item={post} />)}
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
