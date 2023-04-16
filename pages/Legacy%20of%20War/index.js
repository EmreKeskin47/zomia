import React from "react";
import { Helmet } from "react-helmet";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { mockProjects } from "../../MOCK_DATA";
import Image from "next/image";
import { Box, Container, Grid } from "@mui/material";
import { MakeArticleParagraph } from "../../utils/ArticleParagraph";
import RenderTitle from "../../components/RenderTitle";
import RenderBody from "../../components/RenderBody";
import imageLoader from "../../loader";

const LegacyOfWar = () => {
  //hardcoded data- need to fetch from db
  const data = MakeArticleParagraph(mockProjects);
  const program = data[0];

  return (
    <Paper sx={{ paddingTop: 5 }}>
      <Helmet>
        <title>Zomia Center Programs</title>
      </Helmet>
      <Container>
        <Grid
          container
          justifyItems={"center"}
          justifySelf={"center"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item xs={12} lg={12} alignSelf={"center"}>
            <Grid marginY={5}>
              <Grid>
                <RenderTitle
                  text={program.name}
                  height={"150px"}
                  onlyLogo={true}
                  oswald={true}
                />
              </Grid>

              <Grid>
                <Image
                  src={`/static/projects/${program.image}.png`}
                  loader={imageLoader}
                  unoptimized
                  width={"1100"}
                  height={"750"}
                />
              </Grid>
              <Grid
                item
                xs={12}
                lg={12}
                justifyItems={"center"}
                justifyContent={"center"}
                alignItems={"center"}
                justifySelf={"center"}
              >
                {program.body.split("<br />").map((paragraph, index) => {
                  return <RenderBody key={index} text={paragraph} />;
                })}
                <Box
                  marginY={3}
                  sx={{
                    marginLeft: {
                      lg: 0,
                    },
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.4rem !important",
                    }}
                  >
                    <b>
                      Redress for Survivors of U.S. and Coalition Airstrikes –
                    </b>
                    {` The U.S.-led air war against the Islamic State has
                            potentially killed tens of thousands of civilians in
                            Iraq and Syria. Until now, most of these victims and
                            their loved ones have not received condolence
                            payments that they are eligible for under U.S. law,
                            nor have they received support for medical bills and
                            lifelong disabilities. At Zomia, we are working with
                            survivors and legal experts to redress civilian harm
                            and to coordinate medical support.`}
                  </Typography>
                </Box>
                <Box
                  marginY={3}
                  sx={{
                    marginLeft: {
                      lg: 0,
                    },
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "1.4rem !important" }}
                  >
                    <b> Birth Defects in Fallujah –</b>
                    {` The Iraqi city
                            of Fallujah has suffered three major conflicts in
                            recent years, including the U.S.-led Operation
                            Phantom Fury in 2004. In the wake of this
                            devastating assault, Iraqi physicians noted an
                            increase in birth anomalies, which some experts
                            contend is linked to the massive deployment of
                            American weaponry. Partnering with Drexel University
                            and Arizona State University, Zomia researchers are
                            studying the levels and effects of lead and depleted
                            uranium on birth outcomes. The project is part of a
                            larger effort to identify public health consequences
                            of war, and in particular, the legacy of lead on
                            cognitive and physical development in post-conflict
                            environments.`}
                  </Typography>
                </Box>
                <Box
                  marginY={3}
                  sx={{
                    marginLeft: {
                      lg: 0,
                    },
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "1.4rem !important" }}
                  >
                    <b> Syrian Bombing Survey –</b>
                    {` Between 2014 and 2019, the U.S. carried out one of the most intensive
                            aerial bombing campaigns in recent history,
                            targeting Islamic State strongholds in eastern Syria
                            and in Iraq. Cities like Raqqa and parts of Mosul
                            lay in ruins as a result, while the conflict remains
                            the most understudied of America’s recent wars.
                            Zomia is conducting the first-ever bombing survey of
                            eastern Syria—and the first attempt at a systematic
                            bombing survey of a theater of conflict since World
                            War II—in order to document the consequences of
                            bombardment to infrastructure and civilian lives. By
                            determining the location and effects of bombings,
                            including, where possible, a complete roster of
                            bombardment sites, we hope to illuminate the
                            consequences of modern air war and support survivors
                            of these attacks.`}
                  </Typography>
                </Box>
                <Box
                  marginY={3}
                  sx={{
                    marginLeft: {
                      lg: 0,
                    },
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "1.4rem !important" }}
                  >
                    <b> Coding Bootcamp for Afghan Refugees –</b>
                    {` Since the summer of 2021, over 85,000 Afghans refugees have resettled in the United States. Zomia Coding Project teaches software development to Afghan refugees and helps them get jobs in tech. To date, Zomia has reached nearly 500 Afghan refugees. In Q2 of 2023, Zomia launched our first free immersive coding bootcamp for Afghan refugees, providing scholarships for eight recipients to studying web development full time. The course curriculum includes Javascript, HTML, CSS, React, Node, Express, mySQL, API's, git, testing etc.  For inquiries please email sol@zomiacenter.org.`}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default LegacyOfWar;
