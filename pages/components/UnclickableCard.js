import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Grid, Typography } from "@mui/material";
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
      <Card className={type === CardTypes.refugees ? "refugee-card-width" : ""}>
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
          <Typography
            className="center-text"
            sx={{
              fontFamily: "Tiro Telugu !important",
            }}
          >
            {props.title && props.title}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default UnclickableCard;
