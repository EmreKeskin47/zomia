import { Link, Paper, Typography } from "@mui/material";
import React from "react";
import ListView from "../../components/ListView";
import { mockArticles } from "../../MOCK_DATA";
import { Container } from "@mui/material";
import { useSelector } from "react-redux";

const Analysis = () => {
    const articleList = useSelector((state) => state.articleStore.articles);

    return (
        <Paper sx={{ paddingTop: 5 }}>
            <Container>
                <Typography
                    variant="h4"
                    marginY={15}
                    textAlign="center"
                    paddingBottom={10}
                >
                    Analysis
                </Typography>
                {articleList.map((article, index) => {
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
            </Container>
        </Paper>
    );
};

export default Analysis;
