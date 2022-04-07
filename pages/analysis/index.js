import { Link, Typography } from "@mui/material";
import React from "react";
import { mockArticles } from "../../MOCK_DATA";

const Analysis = () => {
    console.log(mockArticles[0].title);
    return (
        <div style={{ marginTop: 155, background: "#424242" }}>
            {mockArticles.map((article, index) => {
                return (
                    <Link key={index} href={`/analysis/${article.id}`}>
                        <Typography variant="h6">{article.title}</Typography>
                    </Link>
                );
            })}
        </div>
    );
};

export default Analysis;
