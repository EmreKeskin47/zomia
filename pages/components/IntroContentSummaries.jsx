import React from "react";
import ContentSummary from "./ContentSummary";
import { ContentSummaryArray } from "../../components/data/ContentSumaryArray";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";

const IntroContentSummaries = () => {
    const articleList = useSelector((state) => state.articleStore.articles);

    return (
        <Grid>
            {articleList.map((contentSummary, index) => {
                return (
                    <Grid
                        sx={{
                            padding: "0.5rem",
                        }}
                        key={index}
                    >
                        <ContentSummary
                            id={contentSummary.id}
                            category={contentSummary.category}
                            heading={contentSummary.title}
                            date={contentSummary.date}
                            author={contentSummary.author}
                            style={{ paddingBottom: "5rem" }}
                        />
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default IntroContentSummaries;
