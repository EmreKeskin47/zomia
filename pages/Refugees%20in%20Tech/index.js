import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import {
  Box,
  Container,
  Stack,
  Button,
  Divider,
  CardActionArea,
} from "@mui/material";
import RenderTitle from "../../components/RenderTitle";
import CardList from "../components/CardList";
import singleContext from "../../SingleContext";
import { CardTypes } from "../../models/CardTypes";
// import Button from "../../theme/overrides/Button";
import { MainCarousel } from "../../components/MainCarousel";
import GenericModal from "../../layout/GenericModal";
import { RefugeeInfo } from "../../models/RefugeeInfo.jsx";
import OurPartners from "../../components/OurPartners";

const RefugeesInTech = () => {
  // const context = useContext(singleContext);
  //hardcoded data- need to fetch from db
  const [openModal, setOpenModal] = React.useState(false);
  const [content, setContent] = React.useState();
  const [title, setTitle] = React.useState();

  const handleClick = (newContent, newTitle) => {
    setOpenModal(true);
    setContent(newContent);
    setTitle(newTitle);
  };

  return (
    <>
      <Paper sx={{ paddingX: 15, paddingY: 10 }} className={"height-of-screen"}>
        <Container>
          <Stack gap={5}>
            <RenderTitle
              text={RefugeeInfo.titleForCarousel}
              height={"150px"}
              onlyLogo={true}
              oswald={true}
            />
            <Box>
              <MainCarousel
                inRefugeePage
                content={RefugeeInfo.imgForCarousel}
              />
              <Typography
                variant="body1"
                textAlign={"center"}
                sx={{
                  fontSize: "1.4rem !important",
                  paddingX: 3,
                  paddingTop: 3,
                }}
              >
                {RefugeeInfo.textForCarousel}
              </Typography>
            </Box>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Button
                onClick={() =>
                  handleClick(
                    RefugeeInfo.learnToCodeText,
                    RefugeeInfo.learnToCode
                  )
                }
              >
                <Typography
                  textAlign={"center"}
                  sx={{
                    cursor: "pointer",
                    borderStyle: "solid",
                    borderWidth: "2.5px",
                    padding: "0.7rem",
                    fontFamily: "Tiro Telugu !important",
                  }}
                >
                  {RefugeeInfo.learnToCode}
                </Typography>
              </Button>

              <Button
                onClick={() =>
                  handleClick(
                    RefugeeInfo.hireRefugeeText,
                    RefugeeInfo.hireRefugee
                  )
                }
              >
                <Typography
                  textAlign={"center"}
                  sx={{
                    cursor: "pointer",
                    borderStyle: "solid",
                    borderWidth: "2.5px",
                    padding: "0.7rem",
                    fontFamily: "Tiro Telugu !important",
                  }}
                >
                  {RefugeeInfo.hireRefugee}
                </Typography>
              </Button>
              <Button
                onClick={() =>
                  handleClick(
                    RefugeeInfo.partnerWithZomiaText,
                    RefugeeInfo.partnerWithZomia
                  )
                }
              >
                {" "}
                <Typography
                  textAlign={"center"}
                  sx={{
                    cursor: "pointer",
                    borderStyle: "solid",
                    borderWidth: "2.5px",
                    padding: "0.7rem",
                    fontFamily: "Tiro Telugu !important",
                  }}
                >
                  {RefugeeInfo.partnerWithZomia}
                </Typography>
              </Button>
            </Stack>
            <Box>
              <CardList type={CardTypes.refugees} unclickable />
            </Box>
            <OurPartners />
          </Stack>
        </Container>
      </Paper>
      <GenericModal
        open={openModal}
        setOpenModal={setOpenModal}
        content={content}
        title={title}
      />
    </>
  );
};

export default RefugeesInTech;
