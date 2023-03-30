import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Box } from "@mui/material";
import { useCarouselData } from "../store/hooks/useData";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import ActiveLink from "../pages/components/ActiveLink";
import imageLoader from "../loader";

export function MainCarousel({ content, inHomePage, inRefugeePage }) {
  console.log(content);
  return (
    <Carousel
      navButtonsAlwaysInvisible={inRefugeePage && true}
      indicators={inHomePage ? true : false}
    >
      {content &&
        content.map((post) => (
          <Item
            key={post.id}
            item={post}
            inHomePage={inHomePage}
            inRefugeePage={inRefugeePage}
          />
        ))}
    </Carousel>
  );
}

function Item(props) {
  const { inHomePage, inRefugeePage, item } = props;

  return (
    <Paper className="main-carousel">
      <ActiveLink href={item.link}>
        <Box>
          {inHomePage && (
            <Image
              src={item.image}
              loader={imageLoader}
              alt="Zomia Amblem"
              unoptimized
              width={"1300rem"}
              height={"525rem"}
              objectFit={"cover"}
              objectPosition={"top center"}
            />
          )}
          {inRefugeePage && (
            <Image
              className="refugee-carousel"
              src={props.item.image}
              loader={imageLoader}
              alt="Zomia Amblem"
              unoptimized
              width={"1000rem"}
              height={"530rem"}
              objectFit={"cover"}
              objectPosition={"top center"}
            />
          )}
        </Box>
        <Box>
          <Typography>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </Typography>
        </Box>
      </ActiveLink>
    </Paper>
  );
}
