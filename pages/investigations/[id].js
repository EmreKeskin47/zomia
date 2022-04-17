import React, { useState, useEffect } from "react";
import { mockReports } from "../../MOCK_PDF";
import Paper from "@mui/material/Paper";
import Article from "../../components/Article";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

const Investigations = (props) => {
    const router = useRouter();
    const { id } = router.query;

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
