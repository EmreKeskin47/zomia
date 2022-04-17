import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { mockReports } from "../../MOCK_PDF";
import Paper from "@mui/material/Paper";
import Article from "../../components/Article";
import Link from "next/link";
import { Box, Typography } from "@mui/material";

const Investigations = (props) => {
    const { id } = props;
    const [report, setReport] = useState(null);

    useEffect(() => {
        setReport(mockReports[id - 1]);
    }, [id]);

    return (
        <Paper sx={{ paddingTop: 5 }}>
            {report && <Article article={report} isReport={true} />}
            {report && (
                <Link href={"/" + report.pdfLink} replace>
                    <Box sx={{ paddingY: 10 }}>
                        <Typography
                            variant="h5"
                            textAlign={"center"}
                            sx={{
                                textDecoration: "none",
                                color: "whitesmoke",
                                fontSize: 20,
                                cursor: "pointer",
                            }}
                        >
                            Click to view the full report
                        </Typography>
                    </Box>
                </Link>
            )}
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
