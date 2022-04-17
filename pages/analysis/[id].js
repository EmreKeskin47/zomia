import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import Article from "../../components/Article";
import { mockArticles } from "../../MOCK_DATA";
import { useRouter } from "next/router";

const ArticlePage = (props) => {
    const router = useRouter();
    const { id } = router.query;

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
