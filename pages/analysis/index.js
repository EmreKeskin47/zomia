import { Link, Paper, Typography } from "@mui/material";
import React from "react";
import ListView from "../../components/ListView";
import { mockArticles } from "../../MOCK_DATA";
import { Container } from "@mui/material";

const Analysis = () => {
  return (
    <Paper sx={{ paddingTop: 5 }}>
      <Container>
        <Typography
          variant="h2"
          marginY={15}
          textAlign="center"
          paddingBottom={10}
        >
          Articles
        </Typography>
        {mockArticles.map((article, index) => {
          return (
            <Link key={index} href={`/analysis/${article.id}`}>
              <ListView
                heading={article.title}
                date={article.date}
                author={article.author}
                image={article.image}
              />
            </Link>
          );
        })}
      </Container>
    </Paper>
  );
};

export default Analysis;
