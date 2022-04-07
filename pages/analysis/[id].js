import React, { useEffect, useState } from "react";
import Article from "../../components/Article";
import { mockArticles } from "../../MOCK_DATA";

const ArticlePage = (props) => {
    const { id } = props;
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(mockArticles[id]);
    }, [id]);
    return (
        <div style={{ marginTop: 25 }}>
            {data && <Article article={data} />}
        </div>
    );
};

export default ArticlePage;

export async function getServerSideProps(context) {
    const id = await context.params.id;
    return {
        props: { id },
    };
}
