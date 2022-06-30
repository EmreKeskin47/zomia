import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Article from "../../../components/Article";
import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useReportData } from "../../../store/hooks/useData";
import { connect } from "react-redux";
import * as reportActions from "../../../store/actions/report-actions";

const Investigations = (props) => {
    const { id } = props;
    const [report, setReport] = useState(null);
    const reportList = useReportData();

    const [connectReport, setConnectReport] = useState([]);

    useEffect(() => {
        if (report) return;
        const fetch = async () => {
            await props.fetchReports();
            setConnectReport(props.reports);
        };
        fetch();
        if (reportList) {
            setReport(reportList.find((item) => item.id === id));
        }
    }, [props.fetchReports, props.report, id, reportList]);

    const reports = useReportData();

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
                <Link href={report.pdfLink} replace>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            textDecoration: "none",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                paddingBottom: "125px",
                                paddingTop: "80px",
                            }}
                        >
                            <Button>
                                <Typography
                                    variant="h5"
                                    textAlign={"center"}
                                    sx={{
                                        cursor: "pointer",
                                        borderStyle: "solid",
                                        borderWidth: "2.5px",
                                        padding: "12px",
                                    }}
                                >
                                    Click to view the full report
                                </Typography>
                            </Button>
                        </Box>
                    </a>
                </Link>
            )}
        </Paper>
    );
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

const mapStateToProps = (state) => {
    return {
        reports: state.reportStore.reports,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchReports: () => dispatch(reportActions.fetchReports()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Investigations);
