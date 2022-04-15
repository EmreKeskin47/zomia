import React from "react";
import ContentSummary from "./ContentSummary";
import { ContentSummaryArray } from "./ContentSumaryArray";
import { Grid } from "@mui/material";

const IntroContentSummaries = () => {
    return (
        <Grid>
            {ContentSummaryArray.map((contentSummary, index) => {
                return (
                    <Grid sx={{ padding: "0.5rem" }}>
                        <ContentSummary
                            key={index}
                            id={contentSummary.id}
                            category={contentSummary.category}
                            heading={contentSummary.heading}
                            date={contentSummary.date}
                            author={contentSummary.author}
                        />
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default IntroContentSummaries;
