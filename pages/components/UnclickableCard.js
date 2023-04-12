import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Grid } from "@mui/material";
import palette from "../../theme/palette";
import singleContext from "../../SingleContext";
import { CardTypes } from "../../models/CardTypes";

const UnclickableCard = (props) => {
  const context = useContext(singleContext);
  const { type } = props;
  return (
    <Grid
      sx={{
        borderRadius: 0,
        borderColor: palette.orange.main,
        border: "10px",
      }}
    >
      <Card
        className={
          type === CardTypes.refugees
            ? "refugee-card-width"
            : "defualt-card-width"
        }
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="220"
            image={props.image}
            alt="green iguana"
            className={type === CardTypes.refugees && "hide-element"}
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
              height: "5rem",
              justifyContent: "center",
              alignContent: "center",
              textAlign: "center",
            }}
          >
            <h2 className="center-text">{props.title && props.title}</h2>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default UnclickableCard;
