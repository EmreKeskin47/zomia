import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { mockReports } from "../../MOCK_PDF";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import { Box, Grid } from "@mui/material";
import { MakeArticleParagraph } from "../../utils/ArticleParagraph";
import RenderTitle from "../../components/RenderTitle";
import RenderBody from "../../components/RenderBody";
import Article from "../../components/Article";

const Investigations = (props) => {
    const { id } = props;
    const PDFViewer = dynamic(() => import("./PDFViewer"), {
        ssr: true,
    });

    const [report, setReport] = useState(null);

    useEffect(() => {
        setReport(mockReports[id - 1]);
    }, [id]);

    return (
        <Paper sx={{ paddingTop: 5 }}>
            {report && <Article article={report} />}
            {report && <PDFViewer article={report} />}
        </Paper>
    );
};

export default Investigations;
export async function getServerSideProps(context) {
    const id = await context.params.id;
    return {
        props: { id },
    };
}
