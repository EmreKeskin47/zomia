import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { mockProjects } from "../../MOCK_DATA";
import Image from "next/image";
import { Box, Container, Grid } from "@mui/material";
import { MakeArticleParagraph } from "../../utils/ArticleParagraph";
import RenderTitle from "../../components/RenderTitle";
import RenderBody from "../../components/RenderBody";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import imageLoader from "../../loader";
import singleContext from "../../SingleContext";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Programs = () => {
  const context = useContext(singleContext);
  //hardcoded data- need to fetch from db
  const data = MakeArticleParagraph(mockProjects);
  const [value, setValue] = React.useState(0);
  const handleChange = (newValue) => {
    setValue(newValue);
  };

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
          <Grid item xs={12}>
            <Typography
              variant="body1"
              paragraph={true}
              sx={{
                color: context.darkMode
                  ? "whitesmoke !important"
                  : "black !important",
                fontSize: "1.4rem !important",
              }}
            >
              The Center is involved in over a dozen projects in Syria, Iraq,
              Yemen, Afghanistan, and the United States. The projects fall under
              two broad themes, the Legacy of War and Public Health Partners, in
              which Zomia collaborates with local and international partners.
            </Typography>
          </Grid>

          <Grid item xs={11}>
            <Grid sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                variant="fullWidth"
                centered
              >
                <Tab
                  label={data[0].name}
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#F9A21B !important",
                  }}
                  wrapped
                  {...a11yProps(0)}
                />
                <Tab
                  label={data[1].name}
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#F9A21B !important",
                  }}
                  wrapped
                  {...a11yProps(1)}
                />
              </Tabs>
            </Grid>
            <TabPanel value={value} index={0}>
              {renderProject1(data[0], 0)}
            </TabPanel>
            <TabPanel value={value} index={1}>
              {renderProject2(data[1], 1)}
            </TabPanel>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

function renderProject1(project, index) {
  return (
    <Grid key={index} item xs={12} lg={12} alignSelf={"center"}>
      <Grid marginY={5}>
        <Grid>
          <RenderTitle
            text={project.name}
            height={"150px"}
            onlyLogo={true}
            oswald={true}
          />
        </Grid>

        <Grid>
          <Image
            src={`/static/projects/${project.image}.png`}
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
          {project.body.split("<br />").map((paragraph, index) => {
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
              <b>Redress for Survivors of U.S. and Coalition Airstrikes –</b>
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
            <Typography variant="body1" sx={{ fontSize: "1.4rem !important" }}>
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
            <Typography variant="body1" sx={{ fontSize: "1.4rem !important" }}>
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
            <Typography variant="body1" sx={{ fontSize: "1.4rem !important" }}>
              <b> Coding Bootcamp for Afghan Refugees –</b>
              {` Since the summer of 2021, nearly 100,000 Afghans have escaped the Taliban and resettled in the US. The Zomia Coding Project teaches software development to Afghan refugees and helps them get jobs in tech. To date, over 50 Afghan refugees have participated in Zomia's pilot coding programs, learning Javascript and algorithms, and engaging in the career development workshop. In Q2 of 2023, Zomia will launch a free immersive coding bootcamp for Afghan refugees. Eight scholarship recipients will study full-stack web development full time for 6 months. The course curriculum includes Javascript, HTML, CSS, Node, Express, mySQL, API's, git, testing etc.  For inquiries please email sol@zomiacenter.org.
                            `}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

function renderProject2(project, index) {
  return (
    <Grid key={index} item xs={12} lg={12} alignSelf={"center"}>
      <Grid marginY={5}>
        <Grid>
          <RenderTitle
            text={project.name}
            height={"150px"}
            onlyLogo={true}
            oswald={true}
          />
        </Grid>

        <Grid>
          <Image
            src={`/static/projects/${project.image}.png`}
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
          {project.body.split("<br />").map((paragraph, index) => {
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
            <Typography variant="body1" sx={{ fontSize: "1.4rem !important" }}>
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
            <Typography variant="body1" sx={{ fontSize: "1.4rem !important" }}>
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
            <Typography variant="body1" sx={{ fontSize: "1.4rem !important" }}>
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
  );
}

export default Programs;
