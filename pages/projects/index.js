import React, { useContext } from "react";
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

function renderProject(project, index) {
  return (
    <Grid key={index} item xs={12} lg={12} alignSelf={"center"}>
      <Grid marginY={5}>
        <Grid>
          <RenderTitle text={project.name} height={"150px"} onlyLogo={true} />
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
        </Grid>
      </Grid>
    </Grid>
  );
}

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

const Projects = () => {
  const context = useContext(singleContext);
  const data = MakeArticleParagraph(mockProjects);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{ paddingTop: 5 }}>
      <Container>
        <Grid
          container
          justifyItems={"center"}
          justifySelf={"center"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item xs={12}>
            <Typography variant="body1" paragraph={true}>
              <span
                style={{
                  color: context.darkMode ? "whitesmoke" : "black",
                }}
              >
                The Center is involved in over a dozen projects in Syria, Iraq,
                Yemen, Afghanistan, and the United States. The projects fall
                under two broad programs, the Legacy of War and Public Health
                Partners, in which Zomia collaborates with local and
                international partners.
              </span>
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
              {renderProject(data[0], 0)}
            </TabPanel>
            <TabPanel value={value} index={1}>
              {renderProject(data[1], 1)}
            </TabPanel>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Projects;
