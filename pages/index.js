import React, { useEffect, useState } from "react";
import { Grid, Typography, Button, Link } from "@mui/material";
import IntroContentSummaries from "./components/IntroContentSummaries";
import IntroArticle from "./components/IntroArticle";
import { Container } from "@mui/material";
import palette from "../theme/palette";
import SectionBreaker from "./components/SectionBreaker";
import CardList from "./components/CardList";
import { mockArticles } from "../MOCK_DATA";
import ListView from "../components/ListView";
import { Box } from "@mui/system";
import { mockReports } from "../MOCK_PDF";
import { useDispatch, useSelector } from "react-redux";
import * as articleActions from "../store/actions/article-actions";
import * as reportActions from "../store/actions/report-actions";

function App() {
  const [latestCount, setLatestCount] = useState(4);
  const articleList = useSelector((state) => state.articleStore.articles);
  const reportList = useSelector((state) => state.reportStore.reports);

  const data = [...mockArticles, ...mockReports, ...articleList, ...reportList];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(articleActions.fetchArticles());
    dispatch(reportActions.fetchReports());
  }, [dispatch, articleList, reportList]);

  console.log(articleList);
  console.log(reportList);

  return (
    <Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="row"
        sx={{
          backgroundColor: palette.orange.main,
          boxShadow:
            " 3px 2px 4px -1px rgb(145 158 171 / 20%), 0px 4px 5px 0px rgb(145 180 171 / 34%), 0px 1px 10px 0px rgb(145 158 171 / 62%)",
          padding: "0.5rem",
        }}
      ></Grid>
      <Container>
        {/* Intro */}
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          sx={{
            paddingTop: "3rem",
            paddingBottom: "3rem",
          }}
        >
          <Grid item lg={7} md={7} sm={12} sx={{ padding: "1rem" }}>
            <IntroArticle />
          </Grid>
          <Grid
            item
            lg={5}
            md={5}
            sm={12}
            sx={{
              paddingTop: "0rem",
              paddingRight: "2rem",
              paddingLeft: "2rem",
              height: "100%",
              alignSelf: "center",
            }}
          >
            <IntroContentSummaries />
          </Grid>
        </Grid>
        {/* End Intro */}
      </Container>
      <SectionBreaker text="Analysis" link="/analysis" color="whitesmoke" />
      {/* Articles Section */}
      <Container>
        {articleList.map((article, index) => {
          return (
            <Link key={index} href={`/analysis/${article.id}`}>
              <ListView
                heading={article.title}
                date={article.date}
                author={article.author}
                image={article.image}
                latest={article.id === 1}
              />
            </Link>
          );
        })}{" "}
      </Container>

      {/* End Articles Section */}
      <SectionBreaker
        text="Investigations"
        link="/investigations"
        color="whitesmoke"
      />
      {/* Reports Section */}
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        sx={{ paddingTop: "1rem", paddingBottom: "1rem" }}
      >
        <CardList type={"report"} />
      </Grid>
      {/* End Reports Section */}
      <SectionBreaker text="Latest" link="#" color="whitesmoke" />
      {/* Popular Reads Section */}
      <Container>
        {data.slice(0, latestCount).map((article, index) => {
          return (
            <Link key={index} href={`/analysis/${article.id}`}>
              <ListView
                heading={article.title}
                date={article.date}
                author={article.author}
                image={article.image}
              />
            </Link>
          );
        })}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: 15,
          }}
        >
          <Button
            onClick={() => {
              setLatestCount(latestCount + 4);
            }}
          >
            <Typography
              variant="h5"
              textAlign={"center"}
              sx={{
                cursor: "pointer",
                borderStyle: "solid",
                borderWidth: "2.5px",
                padding: "12px",
              }}
            >
              Load more
            </Typography>
          </Button>
        </Box>
      </Container>

      {/* End Popular Reads Section */}
    </Grid>
  );
}

export default App;
