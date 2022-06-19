import { Link, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ListView from "../../components/ListView";
import { Container } from "@mui/material";
import { connect } from "react-redux";
import * as reportActions from "../../store/actions/report-actions";
import { useReportData } from "../../store/hooks/useData";
import { Divider } from "@mui/material";

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
          variant="h2"
          marginY={15}
          textAlign="center"
          paddingBottom={10}
          paddingTop={5}
          sx={{
            fontSize: " 3.75rem !important",
            fontFamily: "Tiro Telugu !important",
          }}
        >
          Investigations
        </Typography>
        <div style={{ paddingBottom: "125px" }}>
          {reports &&
            reports.reverse().map((report, index) => {
              return (
                <>
                  <Link key={index} href={`/investigations/${report.id}`}>
                    <ListView
                      heading={report.title}
                      date={report.date}
                      author={report.author}
                      image={report.image}
                      description={report.description}
                    />
                  </Link>
                  {index < reports.length - 1 && (
                    <Divider
                      flexItem
                      sx={{
                        marginBottom: "3rem",
                        marginTop: "1rem",
                      }}
                    ></Divider>
                  )}
                </>
              );
            })}
        </div>
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
