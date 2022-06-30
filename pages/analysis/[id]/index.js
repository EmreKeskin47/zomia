import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Article from "../../../components/Article";
import { useArticleData } from "../../../store/hooks/useData";
import * as articleActions from "../../../store/actions/article-actions";
import { useCallback } from "react";

const ArticlePage = (props) => {
    const { id } = props;

    const [data, setData] = useState(null);
    const articleList = useArticleData();

    const [connectArticle, setConnectArticle] = useState([]);

    useEffect(() => {
        if (data) {
            return;
        } else {
            const fetch = async () => {
                await props.fetchArticles();
                setConnectArticle(props.articles);
            };
            fetch();
            if (articleList) {
                setData(articleList.find((item) => item.id === id));
            } else {
                setData(connectArticle.find((item) => item.id === id));
            }
        }
    }, [props.articles, id, articleList]);
    return (
        <Paper sx={{ paddingTop: 5 }}>
            {data && <Article article={data} />}
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
        paths: [
            { params: { id: "1" } },
            { params: { id: "2" } },
            { params: { id: "3" } },
            { params: { id: "4" } },
        ],
        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    const id = await params.id;
    return {
        props: {
            id,
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
