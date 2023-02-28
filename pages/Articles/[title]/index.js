import { Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Article from "../../../components/Article";
import { useArticleData } from "../../../store/hooks/useData";
import * as articleActions from "../../../store/actions/article-actions";
import CardList from "../../components/CardList";
import SectionBreaker from "../../components/SectionBreaker";

const ArticlePage = (props) => {
  const { id, title } = props;
  const [data, setData] = useState(null);
  const articleList = useArticleData();

  useEffect(() => {
    if (articleList) {
      setData(articleList.find((item) => item.title === title));
    }
  }, [articleList, id]);

  return (
    <Paper sx={{ paddingTop: 5 }}>
      {data && <Article article={data} />}
      <>
        <SectionBreaker text="Related Articles" link="/Articles" />
        <Grid container direction="row" justifyContent="space-around">
          <CardList type="article" />
        </Grid>
      </>
    </Paper>
  );
};

const mapStateToProps = (state) => {
  return {
    articles: state.articleStore.articles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticles: () => dispatch(articleActions.fetchArticles()),
  };
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { title: "1" } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  // const id = await params.id;
  const title = await params.title;
  return {
    props: {
      // id,
      title,
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
