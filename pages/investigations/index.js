import { Link, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ListView from "../../components/ListView";
import { Container } from "@mui/material";
import { connect } from "react-redux";
import * as reportActions from "../../store/actions/report-actions";
import { useReportData } from "../../store/hooks/useData";
const Investigations = (props) => {
    const [connectReport, setConnectReport] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            await props.fetchReports();
            setConnectReport(props.reports);
        };
        fetch();
    }, [props.fetchReports, props.report]);

    const reports = useReportData();
    return (
        <Paper sx={{ paddingTop: 5 }}>
            <Container>
                <Typography
                    variant="h4"
                    marginY={15}
                    textAlign="center"
                    paddingBottom={10}
                    fontFamily={"Montserrat"}
                >
                    Investigations
                </Typography>
                {reports &&
                    reports.map((report, index) => {
                        return (
                            <Link
                                key={index}
                                href={`/investigations/${report.id}`}
                            >
                                <ListView
                                    heading={report.title}
                                    date={report.date}
                                    author={report.author}
                                    image={report.image}
                                    description={report.description}
                                />
                            </Link>
                        );
                    })}
            </Container>
        </Paper>
    );
};

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
