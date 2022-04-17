import { Grid, Typography, Link } from "@mui/material";
import React from "react";

const ContentSummary = ({ id, category, heading, date, author }) => {
    return (
        <Grid container direction="column" justifyContent="center">
            <Grid item sx={{ paddingBottom: "0.3rem" }}>
                <Link
                    underline="none"
                    color="whitesmoke"
                    align="left"
                    variant="overline"
                >
                    {category.toUpperCase()}
                </Link>
            </Grid>
            <Grid item sx={{ paddingBottom: "0.5rem" }}>
                <Link
                    href={`/investigations/${id}`}
                    underline="none"
                    color="whitesmoke"
                    align="left"
                    variant="h6"
                    sx={{ fontWeight: "bold" }}
                >
                    {heading}
                </Link>
            </Grid>
            <Grid item>
                <Typography
                    align="left"
                    variant="caption"
                    sx={{ fontStyle: "italic", color: "whitesmoke" }}
                >
                    {"on " + date}
                </Typography>
            </Grid>
            <Grid item sx={{ paddingBottom: "1rem" }}>
                <Typography
                    align="left"
                    variant="caption"
                    sx={{ fontStyle: "italic", color: "whitesmoke" }}
                >
                    {"by " + author}
                </Typography>
            </Grid>
            <hr />
        </Grid>
    );
};

export default ContentSummary;
