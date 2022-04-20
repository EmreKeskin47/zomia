import React from "react";
import ContentSummary from "./ContentSummary";
import { ContentSummaryArray } from "../../components/data/ContentSumaryArray";
import { Grid } from "@mui/material";

const IntroContentSummaries = () => {
    return (
        <Grid>
            {ContentSummaryArray.map((contentSummary, index) => {
                return (
                    <Grid
                        sx={{
                            padding: { xs: "0.5rem", md: "1.5rem" },
                        }}
                        key={index}
                    >
                        <ContentSummary
                            id={contentSummary.id}
                            category={contentSummary.category}
                            heading={contentSummary.heading}
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
