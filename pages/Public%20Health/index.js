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

const PublicHealth = () => {
  //hardcoded data- need to fetch from db
  const data = MakeArticleParagraph(mockProjects);
  const program = data[1];

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
          <Grid item xs={11}>
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
                      sx={{ fontSize: "1.4rem !important" }}
                    >
                      <b> Vaccination Study –</b>
                      {` Since 2001, the number
                            of civil wars across the globe has increased 30
                            percent, leading to a proliferation of ungoverned
                            and semi-governed spaces — territory under the
                            control of militias, insurgent groups, or other
                            autonomous local actors. This poses an acute
                            challenge to public health; one scholar noted that
                            "75 percent of epidemics during the last three
                            decades have occurred in countries where war,
                            conflict, and prolonged political violence have
                            crippled their capacity to respond, leaving their
                            neighbors and the world vulnerable.” In particular,
                            these areas are potential sources of pandemics and
                            “superbugs.” But successful public health programs
                            require strong state actors, international
                            coordination, and systemic solutions. This ongoing
                            study explores public health in non-state spaces,
                            focusing attention particularly on how basic health
                            services become privatized during times of war, and
                            the inherent weaknesses of relying on third-party
                            actors (such as international NGOs) to implement
                            public health programs. The current phase of the
                            study focuses on vaccine delivery.`}
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
                      <b>Covid-19 Support – </b>
                      {` Working with local and
                            international partners, Zomia has supported Covid-19
                            preparedness in non-state regions in the Middle East
                            and South Asia; we have supported the design and
                            development of case management protocols, produced
                            and distributed masks, and worked with ground
                            authorities to increase awareness of vaccination and
                            social distancing.`}
                    </Typography>
                  </Box>
                  <Box
                    marginY={3}
                    sx={{
                      marginLeft: {
                        lg: 0,
                      },
                      display: "flex",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ fontSize: "1.4rem !important" }}
                    >
                      <b>Leishmaniasis – </b>
                      {` Leishmaniasis is a parasitic
                            disease that can cause disfigurement through skin
                            lesions and, in some varieties, can prove fatal. The
                            disease is linked with malnutrition, a weak immune
                            system, and poor living conditions; it is an illness
                            of poverty. Zomia works with local authorities in
                            the Middle East to spray houses in prone areas in
                            order to protect against the illness. Zomia also
                            helps train local authorities and local
                            organizations to design and implement spraying
                            campaigns.`}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default PublicHealth;
