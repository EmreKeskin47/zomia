import { Grid, Typography, Link } from "@mui/material";
import React from "react";

const ContentSummary = ({ id, description, heading, date, author }) => {
    return (
        <Grid container direction="column" justifyContent="center">
            <Grid item sx={{ paddingBottom: "1.5rem" }}>
                <Link
                    href={`/analysis/${id}`}
                    underline="none"
                    color="whitesmoke"
                    align="left"
                    variant="h5"
                    sx={{
                        fontFamily: "Joan !important",
                    }}
                >
                    {heading}
                </Link>
            </Grid>
            <Grid item>
                <Typography
                    align="left"
                    variant="body2"
                    sx={{ fontSize: "1rem !important" }}
                >
                    {description}
                </Typography>
            </Grid>
            <Grid sx={{ marginTop: 3.5, marginBottom: 3.5 }}>
                <hr />
            </Grid>
        </Grid>
    );
};

export default ContentSummary;
