import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import ActiveLink from "./ActiveLink";
import NewsSummary from "./NewsSummary";
import {
  useReverseReportData,
  useArticleData,
} from "../../store/hooks/useData";
import { getShortenedString } from "../../utils/ArticleParagraph";
import { CardTypes } from "../../models/CardTypes";

const CardList = ({ type }) => {
  const reportList = useReverseReportData();
  const articleList = useArticleData();
  const [content, setContent] = useState();

  useEffect(() => {
    switch (type) {
      case CardTypes.articles:
        setContent(articleList);
        return;
      case CardTypes.reports:
        setContent(reportList);
        return;
    }
    return;
  }, [type, reportList, articleList]);

  const generateList = () => {
    return (
      <Grid container direction={"row"} justifyContent={"center"}>
        {content &&
          content.slice(0, 3).map((item) => (
            <Grid
              item
              key={item.id}
              sx={{
                paddingLeft: 1,
                paddingRight: 1,
              }}
            >
              <ActiveLink
                href={`/${type}/${item.id}`}
                // sx={{ paddingLeft: 3, paddingRight: 3 }}
                // replace="true"
              >
                <NewsSummary
                  image={item.image}
                  title={
                    item.title.length > 70
                      ? getShortenedString(item.title, 65)
                      : item.title
                  }
                  // date={item.date}
                  description={
                    item.description
                      ? getShortenedString(item.description, 110)
                      : "No Description"
                  }
                  // author={item.author}
                />
              </ActiveLink>
            </Grid>
          ))}
      </Grid>
    );
  };
  return <Grid>{generateList()}</Grid>;
};

export default CardList;
