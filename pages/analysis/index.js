import { Link, Paper, Typography, Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import ListView from "../../components/ListView";
import { mockArticles } from "../../MOCK_DATA";
import { Container } from "@mui/material";
import singleContext from "../../SingleContext";

const Analysis = () => {
  //   const context = useContext(singleContext);
  const [context, setContext] = useState({});

  useEffect(() => {
    setContext(singleContext);
  });

  return (
    <Paper sx={{ paddingTop: 5 }}>
      <Container>
        <Typography
          variant="h4"
          marginY={15}
          textAlign="center"
          paddingBottom={10}
        >
          Analysis
        </Typography>
        {context.articleList &&
          context.articleList.map((article, index) => {
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
