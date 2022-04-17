import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import Article from "../../../components/Article";
import { mockArticles } from "../../../MOCK_DATA";

const ArticlePage = (props) => {
    const { id } = props;

    const [data, setData] = useState(null);

    useEffect(() => {
        setData(mockArticles[id - 1]);
    }, [id]);
    return (
        <Paper sx={{ paddingTop: 5 }}>
            {data && <Article article={data} />}
        </Paper>
    );
};

export default ArticlePage;
export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: "1" } },
            { params: { id: "2" } },
            { params: { id: "3" } },
            { params: { id: "4" } },
        ],
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const id = params.id;
    return {
        props: {
            id,
        },
    };
}
