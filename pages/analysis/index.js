import { Link, Paper, Typography } from "@mui/material";
import React from "react";
import { mockArticles } from "../../MOCK_DATA";

const Analysis = () => {
    return (
        <Paper sx={{ paddingTop: 5 }}>
            {mockArticles.map((article, index) => {
                return (
                    <Link key={index} href={`/analysis/${article.id}`}>
                        <Typography variant="h6">{article.title}</Typography>
                    </Link>
                );
            })}
        </Paper>
    );
};

export default Analysis;
