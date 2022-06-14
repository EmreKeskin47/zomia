import { Grid, Typography, Link } from "@mui/material";
import React from "react";

const ContentSummary = ({ id, description, heading, date, author }) => {
    return (
        <Grid container direction="column" justifyContent="center">
            <Grid item sx={{ paddingBottom: "0.5rem" }}>
                <Link
                    href={`/analysis/${id}`}
                    underline="none"
                    color="whitesmoke"
                    align="left"
                    variant="h5"
                    sx={{ fontWeight: "bold" }}
                >
                    {heading}
                </Link>
            </Grid>
            <Grid item>
                <Typography
                    align="left"
                    variant="body2"
                    sx={{ fontSize: "1.1rem !important" }}
                >
                    {description}
                </Typography>
            </Grid>

            <Grid item sx={{ height: "18px !important" }}>
                <Typography
                    align="left"
                    variant="caption"
                    sx={{ lineHeight: "0rem !important" }}
                >
                    {date}
                </Typography>
            </Grid>
            <Grid item sx={{ height: "18px !important" }}>
                <Typography align="left" variant="caption">
                    {"by " + author}
                </Typography>
            </Grid>

            <Grid sx={{ marginTop: 2.5, marginBottom: 1.5 }}>
                <hr />
            </Grid>
        </Grid>
    );
};

export default ContentSummary;
