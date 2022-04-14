import React, { useEffect, useState } from "react";
import { Grid, Link } from "@mui/material";
import { mockReports } from "../../MOCK_PDF";
import NewsSummary from "./NewsSummary";

const CardList = ({ type }) => {
  const generateList = () => {
    if (type === "report") {
      return (
        <Grid container direction={"row"} justifyContent={"space-around"}>
          {mockReports.map((item) => (
            <Grid item>
              <Link
                href={item.pdfLink}
                sx={{ paddingLeft: 5, paddingRight: 5 }}
              >
                <NewsSummary
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  date={item.date}
                  description={item.description.slice(0, 140) + "..."}
                  author={item.author}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      );
    } else {
      return <Grid>Articles part is under construction.</Grid>;
    }
  };
  return <Grid>{generateList()}</Grid>;
};

export default CardList;
