import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Grid, Typography, Button, Paper } from "@mui/material";
import { Container } from "@mui/material";
import SectionBreaker from "./components/SectionBreaker";
import CardList from "./components/CardList";
import ListView from "../components/ListView";
import { Box } from "@mui/system";
import { connect } from "react-redux";
import * as articleActions from "../store/actions/article-actions";
import * as reportActions from "../store/actions/report-actions";
import {
  useArticleData,
  useReportData,
  useWritingData,
  useCarouselData,
} from "../store/hooks/useData";
import ActiveLink from "./components/ActiveLink";
import { MainCarousel } from "../components/MainCarousel";
import { CardTypes } from "../models/CardTypes";

function App(props) {
  const [latestCount, setLatestCount] = useState(4);

  const articleList = useArticleData();
  const reportList = useReportData();
  const writingList = useWritingData();
  const carouselList = useCarouselData();
  const posts = carouselList && carouselList.posts;

  var data = [];
  const writings = [];

  useEffect(() => {
    const fetch = async () => {
      await props.fetchArticles();
      await props.fetchReports();
    };

    fetch();
  }, [props.articles, props.reports, articleList, reportList]);

  if (reportList && reportList != []) {
    data.push(...reportList);
  }
  if (articleList && articleList != []) {
    data.push(...articleList);
  }
  if (reportList && reportList != [] && articleList && articleList != []) {
    writings.push(...writingList);
  }

  return (
    <Paper>
      <Helmet>
        <title>Zomia Center Home</title>
      </Helmet>

      <Container>
        {/* Intro */}
        <Grid
          item
          sx={{
            paddingTop: "3rem",
            paddingBottom: "1rem",
            height: "100%",
            alignSelf: "center",
          }}
        >
          <MainCarousel inHomePage content={posts} />
        </Grid>
        {/* </Grid> */}
        {/* End Intro */}
      </Container>

      <SectionBreaker text="Projects" color="whitesmoke" />

      <CardList type={CardTypes.cards} clickable />

      {/* End Reports Section */}
      <SectionBreaker text="Recent Publications" color="whitesmoke" />
      {/* Popular Reads Section */}
      <Container sx={{ paddingBottom: "125px" }}>
        {writings &&
          writings
            .reverse()
            .slice(0, latestCount)
            .map((article, index) => {
              return (
                <ActiveLink
                  key={index}
                  href={
                    article.pdfLink
                      ? `/Reports/${article.id}`
                      : `/Articles/${article.id}`
                  }
                >
                  <ListView
                    heading={article.title}
                    date={article.date}
                    author={article.author}
                    description={article.description}
                    image={article.image}
                  />
                </ActiveLink>
              );
            })}
        {data && data.length > latestCount && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "90px",
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
                  padding: "1.5rem",
                  fontFamily: "Tiro Telugu !important",
                }}
              >
                Load more
              </Typography>
            </Button>
          </Box>
        )}
      </Container>

      {/* End Popular Reads Section */}
    </Paper>
  );
}

const mapStateToProps = (state) => {
  return {
    articles: state.articleStore.articles,
    reports: state.reportStore.reports,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticles: () => dispatch(articleActions.fetchArticles()),
    fetchReports: () => dispatch(reportActions.fetchReports()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
