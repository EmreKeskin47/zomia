import { Link, Paper, Typography, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ListView from "../../components/ListView";
import { Container } from "@mui/material";
import { connect } from "react-redux";
import { useArticleData } from "../../store/hooks/useData";
import * as articleActions from "../../store/actions/article-actions";
const Analysis = (props) => {
    //   const context = useContext(singleContext);
    const articleList = useArticleData();

    const [connectArticle, setConnectArticle] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            await props.fetchArticles();
            setConnectArticle(props.articles);
        };
        fetch();
    }, [props.articles, connectArticle]);

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
                {articleList &&
                    articleList.map((article, index) => {
                        return (
                            <Link key={index} href={`/analysis/${article.id}`}>
                                <ListView
                                    heading={article.title}
                                    date={article.date}
                                    author={article.author}
                                    image={article.image}
                                    description={article.description}
                                />
                            </Link>
                        );
                    })}
            </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(Analysis);
