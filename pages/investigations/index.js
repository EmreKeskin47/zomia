import { Link, Paper, Typography } from "@mui/material";
import React, { useContext } from "react";
import ListView from "../../components/ListView";
import { Container } from "@mui/material";
import singleContext from "../../SingleContext";

const Investigations = () => {
  const context = useContext(singleContext);
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
        {context.reportList &&
          context.reportList.map((report, index) => {
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
    </Paper>
  );
};

export default Investigations;
