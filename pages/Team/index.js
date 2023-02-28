import React from "react";
import { Helmet } from "react-helmet";
import { Box, Grid, Paper } from "@mui/material";
import { team, directors } from "../../components/data/people";
import { MakeArticleParagraph2 } from "../../utils/ArticleParagraph";
import RenderTitle from "../../components/RenderTitle";
import RenderBody from "../../components/RenderBody";
import RenderSubtitle from "../../components/RenderSubtitle";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import imageLoader from "../../loader";

const Team = () => {
  const teamData = MakeArticleParagraph2(team);
  const directorsData = MakeArticleParagraph2(directors);

  const renderTeamTitle = () => {
    return (
      <Box display="flex" alignItems="center" marginY={5}>
        <Box sx={{ marginRight: { xs: 2 } }}>
          <Image
            src="/static/o-logo.png"
            loader={imageLoader}
            unoptimized
            alt="Logo"
            width="100px"
            height="120px"
          />
        </Box>
        <Box display="flex">
          <Typography
            variant="h2"
            sx={{
              fontSize: " 3.75rem !important",
              fontFamily: "Tiro Telugu !important",
            }}
          >
            Team
          </Typography>
        </Box>
      </Box>
    );
  };

  return (
    <Paper sx={{ paddingTop: 5 }}>
      <Helmet>
        <title>Zomia Center People</title>
      </Helmet>
      <Grid
        container
        justifyItems={"center"}
        justifySelf={"center"}
        justifyContent={"center"}
        alignItems={"center"}
        paddingBottom="125px"
      >
        <Grid item xs={10} lg={9} alignSelf={"center"}>
          <Box marginY={5}>
            <Box sx={{ marginLeft: { md: 2.5 } }}>{renderTeamTitle()}</Box>
            <Grid
              item
              xs={12}
              lg={10}
              justifyItems={"center"}
              justifyContent={"center"}
              alignItems={"center"}
              justifySelf={"center"}
            >
              {teamData.split("<br />").map((paragraph, index) => {
                if (paragraph.includes(".")) {
                  return <RenderBody key={index} text={paragraph} />;
                } else {
                  return (
                    <RenderSubtitle key={index} text={paragraph} team={true} />
                  );
                }
              })}
            </Grid>
            <Box sx={{ marginLeft: { md: 2.5 } }}>
              <RenderTitle text="Board Of Directors" height="100px" />
            </Box>
            <Grid
              item
              xs={12}
              lg={10}
              justifyItems={"center"}
              justifyContent={"center"}
              alignItems={"center"}
              justifySelf={"center"}
            >
              {directorsData.split("<br />").map((paragraph, index) => {
                if (paragraph.includes(".") && !paragraph.includes("A.")) {
                  return <RenderBody key={index} text={paragraph} />;
                } else {
                  return (
                    <RenderSubtitle key={index} text={paragraph} team={true} />
                  );
                }
              })}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Team;
