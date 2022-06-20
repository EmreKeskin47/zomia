import React, { useEffect, useState } from "react";
import { Grid, Link } from "@mui/material";
import NewsSummary from "./NewsSummary";
import { useReverseReportData } from "../../store/hooks/useData";

const CardList = ({ type }) => {
  const reportList = useReverseReportData();
  const generateList = () => {
    if (type === "report") {
      return (
        <Grid container direction={"row"} justifyContent={"center"}>
          {reportList &&
            reportList.slice(0, 3).map((item) => (
              <Grid
                item
                key={item.id}
                sx={{
                  paddingLeft: 3,
                  paddingRight: 3,
                }}
              >
                <Link
                  href={`/investigations/${item.id}`}
                  sx={{ paddingLeft: 3, paddingRight: 3 }}
                  replace="true"
                >
                  <NewsSummary
                    image={item.image}
                    title={item.title}
                    date={item.date}
                    description={
                      item.description
                        ? item.description.slice(0, 400)
                        : "No Description"
                    }
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
