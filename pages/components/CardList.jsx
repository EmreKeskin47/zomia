import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import ActiveLink from "./ActiveLink";
import NewsSummary from "./NewsSummary";
import {
  useReverseReportData,
  useArticleData,
  useCardData,
} from "../../store/hooks/useData";
import { getShortenedString } from "../../utils/ArticleParagraph";
import { CardTypes } from "../../models/CardTypes";
import UnclickableCard from "./UnclickableCard";
import { RefugeeInfo } from "../../models/RefugeeInfo";

const CardList = ({ type, clickable, unclickable }) => {
  const reportList = useReverseReportData();
  const articleList = useArticleData();
  const cardData = useCardData();
  const cardList = cardData && cardData.cards;
  const [content, setContent] = useState();
  console.log(content);

  useEffect(() => {
    switch (type) {
      case CardTypes.articles:
        articleList && setContent(articleList.slice(0, 3));
        return;
      case CardTypes.reports:
        reportList && setContent(reportList.slice(0, 3));
        return;
      case CardTypes.cards:
        cardList && setContent(cardList.slice(0, 3));
        return;
      case CardTypes.refugees:
        setContent(RefugeeInfo.refugeePrograms);
        return;
    }
    return;
  }, [type, reportList, articleList]);

  const generateList = () => {
    return (
      <Grid container direction={"row"} justifyContent={"center"}>
        {content &&
          content.map((item) => (
            <Grid
              item
              key={item.id}
              sx={{
                paddingX: type === CardTypes.refugees ? 5 : 1,
                paddingY: 1,
              }}
            >
              {clickable && (
                <ActiveLink
                  href={
                    type === CardTypes.articles || type === CardTypes.reports
                      ? `/${type}/${item.id}`
                      : item.link
                  }
                >
                  <NewsSummary
                    image={item.image}
                    title={
                      item.title.length > 70
                        ? getShortenedString(item.title, 40)
                        : item.title
                    }
                    description={
                      item.description
                        ? getShortenedString(item.description, 80)
                        : ""
                    }
                    type={type}
                  />
                </ActiveLink>
              )}
              {unclickable && (
                <UnclickableCard
                  image={item.image}
                  title={
                    item.title.length > 70
                      ? getShortenedString(item.title, 40)
                      : item.title
                  }
                  description={
                    item.description
                      ? getShortenedString(item.description, 80)
                      : ""
                  }
                  type={type}
                />
              )}
            </Grid>
          ))}
      </Grid>
    );
  };
  return (
    <Grid container direction="row" justifyContent="space-around">
      {generateList()}
    </Grid>
  );
};

export default CardList;
