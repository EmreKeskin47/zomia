import React from "react";
import ContentSummary from "./ContentSummary";
import { Grid } from "@mui/material";
import { useArticleData } from "../../store/hooks/useData";

const IntroContentSummaries = () => {
    const articleList = useArticleData();

    return (
        <Grid>
            {articleList &&
                articleList.slice(0, 3).map((contentSummary, index) => {
                    return (
                        <Grid key={index}>
                            <ContentSummary
                                id={contentSummary.id}
                                category={contentSummary.category}
                                description={contentSummary.description}
                                heading={contentSummary.title}
                                date={contentSummary.date}
                                author={contentSummary.author}
                                style={{ paddingBottom: "4rem" }}
                            />
                        </Grid>
                    );
                })}
        </Grid>
    );
};

export default IntroContentSummaries;
