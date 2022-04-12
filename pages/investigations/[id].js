import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { mockReports } from "../../MOCK_PDF";

const Investigations = (props) => {
    const { id } = props;
    const PDFViewer = dynamic(() => import("./PDFViewer"), {
        ssr: true,
    });

    const [article, setArticle] = useState(null);

    useEffect(() => {
        setArticle(mockReports[id - 1]);
    }, [id]);

    return (
        <div style={{ marginTop: 100 }}>
            {article && <PDFViewer article={article} />}
        </div>
    );
};

export default Investigations;
export async function getServerSideProps(context) {
    const id = await context.params.id;
    return {
        props: { id },
    };
}
