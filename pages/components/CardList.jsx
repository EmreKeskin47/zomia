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

const CardList = ({ type }) => {
  const reportList = useReverseReportData();
  const articleList = useArticleData();
  const cardData = useCardData();
  const cardList = cardData && cardData.cards;
  const [content, setContent] = useState();
  console.log(content);

  const refugeePrograms = [
    {
      description:
        "Taliban’s supreme leader Mullah Omar vanished, evading capture until his death",
      id: "6",

      title: "CODE: by Refugees",
    },
    {
      description:
        "Taliban’s supreme leader Mullah Omar vanished, evading capture until his death",
      id: "5",

      title: "Software bootcamp for refugees",
    },
    {
      description:
        "Taliban’s supreme leader Mullah Omar vanished, evading capture until his death",
      id: "4",

      title: "Online Coding Courses",
    },
    {
      description:
        "Taliban’s supreme leader Mullah Omar vanished, evading capture until his death",
      id: "3",

      title: "Partnership with American University of Afghanistan",
    },
    {
      description:
        "Taliban’s supreme leader Mullah Omar vanished, evading capture until his death",
      id: "2",

      title: "Partnership with Arizona State University",
    },
    {
      description:
        "Taliban’s supreme leader Mullah Omar vanished, evading capture until his death",
      id: "1",

      title: "Career development for refugees in tech",
    },
  ];

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
        setContent(refugeePrograms);
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
                paddingX: 1,
                paddingY: 1,
              }}
            >
              <ActiveLink
                href={
                  type === CardTypes.cards ? item.link : `/${type}/${item.id}`
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
                      : "No Description"
                  }
                  type={type}
                />
              </ActiveLink>
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
