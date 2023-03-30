import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Box, Container, Grid } from "@mui/material";
import RenderTitle from "../../components/RenderTitle";

import singleContext from "../../SingleContext";

const Programs = () => {
  const context = useContext(singleContext);
  //hardcoded data- need to fetch from db

  return (
    <Paper sx={{ paddingTop: 5 }} className={"height-of-screen"}>
      <Helmet>
        <title>Zomia Center Programs</title>
      </Helmet>
      <Container>
        <Box>
          <RenderTitle
            text="Programs"
            height="100px"
            onlyLogo={true}
            oswald={true}
          />
        </Box>

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
        </Grid>
      </Container>
    </Paper>
  );
};

export default Programs;
