import React, { useState, useEffect } from "react";
import { mockReports } from "../../../MOCK_PDF";
import Paper from "@mui/material/Paper";
import Article from "../../../components/Article";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import palette from "../../../theme/palette";

const Investigations = (props) => {
    const { id } = props;
    const [report, setReport] = useState(null);

    useEffect(() => {
        setReport(mockReports[id - 1]);
    }, [id]);

    const StyledTypography = styled(Typography)(({ theme }) => ({
        color: "whitesmoke",
        "&:hover": {
            color: theme.palette.orange.main,
            backgroundColor: "transparent",
        },
    }));

    return (
        <Paper sx={{ paddingTop: 5 }}>
            {report && <Article article={report} isReport={true} />}
            {report && (
                <Link href={"/" + report.pdfLink} replace>
                    <Box
                        sx={{
                            paddingBottom: 10,
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <StyledTypography
                            variant="h5"
                            textAlign={"center"}
                            sx={{
                                textDecoration: "none",
                                color: "whitesmoke",
                                fontSize: 20,
                                cursor: "pointer",
                                borderStyle: "solid",
                                borderWidth: "2.5px",
                                width: "40%",
                                padding: "2px",
                            }}
                        >
                            Click to view the full report
                        </StyledTypography>
                    </Box>
                </Link>
            )}
        </Paper>
    );
};

export default Investigations;

export async function getStaticProps({ params }) {
    const id = params.id;
    return {
        props: {
            id,
        },
    };
}

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
