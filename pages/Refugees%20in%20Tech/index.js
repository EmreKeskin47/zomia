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
import { MainCarousel } from "../../components/MainCarousel";
import GenericModal from "../../layout/GenericModal";

const RefugeesInTech = () => {
  // const context = useContext(singleContext);
  //hardcoded data- need to fetch from db
  const [openModal, setOpenModal] = React.useState(false);
  // const [closeModal, setCloseModal] = React.useState(false);

  const imgForCarousel = [
    { image: "/refugees/class.png" },
    { image: "/refugees/muzamel_k.jpg" },
    {
      image: "/refugees/sol_zubaida_diwa.jpg",
    },
  ];

  return (
    <>
      <Paper sx={{ paddingTop: 5 }} className={"height-of-screen"}>
        <Container>
          <Stack>
            <Box>
              <MainCarousel inRefugeePage content={imgForCarousel} />
            </Box>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Button onClick={() => setOpenModal(true)}>Learn to code</Button>
              <Button onClick={() => setOpenModal(true)}>
                Hire a refugee in tech
              </Button>
              <Button onClick={() => setOpenModal(true)}>
                Partner with Zomia
              </Button>
            </Stack>
            <Box>
              <CardList type={CardTypes.refugees} />
            </Box>
            <Box></Box>
          </Stack>
        </Container>
      </Paper>
      <GenericModal open={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default RefugeesInTech;
