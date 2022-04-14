import { Link, Paper, Typography } from "@mui/material";
import React from "react";
import ListView from "../../components/ListView";
import { Container } from "@mui/material";
import { mockReports } from "../../MOCK_PDF";
import { useRouter } from "next/router";
import CardList from "../components/CardList";
import SectionBreaker from "../components/SectionBreaker";

const Investigations = () => {
  const router = useRouter();
  return (
    <Paper sx={{ paddingTop: 5 }}>
      <Container>
        <Typography variant="h2" marginY={15} textAlign="center">
          Reports
        </Typography>
        {mockReports.map((report, index) => {
          return (
            <Link key={index} href={`/investigations/${report.id}`}>
              <ListView
                heading={report.title}
                date={report.date}
                author={report.author}
                image={report.image}
              />
            </Link>
          );
        })}
      </Container>
      <SectionBreaker text="Related Reports" />
      <CardList type="report" />
    </Paper>
  );
};

export default Investigations;
