import React, { useEffect, useState } from "react";
import { Grid, Typography, Button, Link, Paper } from "@mui/material";
import IntroContentSummaries from "./components/IntroContentSummaries";
import IntroArticle from "./components/IntroArticle";
import { Container } from "@mui/material";
import palette from "../theme/palette";
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
} from "../store/hooks/useData";

function App(props) {
    const [latestCount, setLatestCount] = useState(4);

    const articleList = useArticleData();
    const reportList = useReportData();
    const writingList = useWritingData();

    const [connectArticle, setConnectArticle] = useState([]);
    const [connectReport, setConnectReport] = useState([]);

    var data = [];
    const writings = [];

    useEffect(() => {
        const fetch = async () => {
            await props.fetchArticles();
            await props.fetchReports();
            setConnectArticle(props.articles);
            setConnectReport(props.reports);
        };
        fetch();
    }, [
        props.articles,
        props.reports,
        connectArticle,
        connectReport,
        articleList,
        reportList,
    ]);

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
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                direction="row"
                sx={{
                    backgroundColor: palette.orange.main,
                    boxShadow:
                        " 3px 2px 4px -1px rgb(145 158 171 / 20%), 0px 4px 5px 0px rgb(145 180 171 / 34%), 0px 1px 10px 0px rgb(145 158 171 / 62%)",
                    padding: "0.075rem",
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
                        paddingBottom: "1rem",
                    }}
                >
                    <Grid item lg={8} sm={12}>
                        <IntroArticle
                            data={writings && writings[writings.length - 1]}
                        />
                    </Grid>
                    <Grid
                        item
                        lg={4}
                        sm={12}
                        sx={{
                            paddingTop: "0rem",
                            paddingLeft: "2rem",
                            height: "100%",
                            alignSelf: "center",
                            paddingRight: { xs: "2rem", lg: "0" },
                        }}
                    >
                        <IntroContentSummaries />
                    </Grid>
                </Grid>
                {/* End Intro */}
            </Container>
            <SectionBreaker
                text="Analysis"
                link="/analysis"
                color="whitesmoke"
            />
            {/* Articles Section */}
            <Container>
                {articleList &&
                    articleList.slice(0, 3).map((article, index) => {
                        return (
                            <Link key={index} href={`/analysis/${article.id}`}>
                                <ListView
                                    heading={article.title}
                                    date={article.date}
                                    author={article.author}
                                    image={article.image}
                                    description={article.description}
                                    latest={index === 0}
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
            <Grid container direction="row" justifyContent="space-around">
                <CardList type={"report"} />
            </Grid>
            {/* End Reports Section */}
            <SectionBreaker text="Latest" link="#" color="whitesmoke" />
            {/* Popular Reads Section */}
            <Container sx={{ paddingBottom: "125px" }}>
                {writings &&
                    writings
                        .reverse()
                        .slice(0, latestCount)
                        .map((article, index) => {
                            return (
                                <Link
                                    key={index}
                                    href={
                                        article.pdfLink
                                            ? `/investigations/${article.id}`
                                            : `/analysis/${article.id}`
                                    }
                                >
                                    <ListView
                                        heading={article.title}
                                        date={article.date}
                                        author={article.author}
                                        description={article.description}
                                        image={article.image}
                                    />
                                </Link>
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
