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
            <Grid marginBottom={1}>
                <div
                    style={{
                        fontFamily: "ROBOTO",
                        fontWeight: 400,
                        textAlign: "left",
                        fontSize: "0.8rem",
                    }}
                >
                    {description}
                </div>
            </Grid>
            <Grid item>
                <Typography align="left" variant="subtitle2">
                    {date}
                </Typography>
            </Grid>
            <Grid item>
                <Typography align="left" variant="subtitle2">
                    {"by " + author}
                </Typography>
            </Grid>
            <Grid sx={{ marginTop: 1.5, marginBottom: 1.5 }}>
                <hr />
            </Grid>
        </Grid>
    );
};

export default ContentSummary;
