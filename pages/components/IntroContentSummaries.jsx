import React from "react";
import ContentSummary from "./ContentSummary";
import { ContentSummaryArray } from "./ContentSumaryArray";
import { Grid } from "@mui/material";

const IntroContentSummaries = () => {
  return (
    <Grid>
      {ContentSummaryArray.map((contentSummary, index) => {
        return (
          <ContentSummary
            key={index}
            category={contentSummary.category}
            heading={contentSummary.heading}
            date={contentSummary.date}
            author={contentSummary.author}
          />
        );
      })}
    </Grid>
  );
};

export default IntroContentSummaries;
