import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import Article from "../../components/Article";
import { mockArticles } from "../../MOCK_DATA";

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

export async function getServerSideProps(context) {
    const id = await context.params.id;
    return {
        props: { id },
    };
}
