import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Box, Container, Stack, Button } from "@mui/material";
import RenderTitle from "../../components/RenderTitle";
import CardList from "../components/CardList";
import singleContext from "../../SingleContext";
import { CardTypes } from "../../models/CardTypes";
// import Button from "../../theme/overrides/Button";

const Programs = () => {
  const context = useContext(singleContext);
  //hardcoded data- need to fetch from db

  return (
    <Paper sx={{ paddingTop: 5 }} className={"height-of-screen"}>
      <Container>
        <Stack>
          <Box>text about Zomia</Box>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button>Learn to code</Button>
            <Button>Hire a refugee in tech</Button>
            <Button>Partner with Zomia</Button>
          </Stack>
          <Box>
            <CardList type={CardTypes.refugees} />
          </Box>
          <Box></Box>
        </Stack>
      </Container>
    </Paper>
  );
};

export default Programs;
