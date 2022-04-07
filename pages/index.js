import { Grid, Typography, Button } from "@mui/material";
import IntroContentSummaries from "./components/IntroContentSummaries";
import IntroArticle from "./components/IntroArticle";
import { Container } from "@mui/material";
import palette from "../theme/palette";
import SectionBreaker from "./components/SectionBreaker";
import NewsSummary from "./components/NewsSummary";
import PopularRead from "./components/PopularRead";
import Footer from "./components/Footer";

function App() {
  return (
    <Grid
      sx={{
        marginTop: { xs: 0, md: 5 },
        backgroundColor: palette.black.main,
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="row"
        sx={{ backgroundColor: palette.orange.main }}
      >
        <Typography
          variant="overline"
          component="div"
          sx={{ color: "black", padding: "1rem" }}
        >
          This will be the statement from Zomia
        </Typography>
      </Grid>
      <Container>
        {/* Intro */}
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          sx={{
            paddingTop: "3rem",
            paddingBottom: "3rem",
          }}
        >
          <Grid item lg={7} md={7} sm={12} sx={{ padding: "1rem" }}>
            <IntroArticle
              description=" Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica"
            />
          </Grid>
          <Grid
            item
            lg={5}
            md={5}
            sm={12}
            sx={{
              paddingTop: "0rem",
              paddingRight: "2rem",
              paddingLeft: "2rem",
            }}
          >
            <IntroContentSummaries />
          </Grid>
        </Grid>
        {/* End Intro */}
      </Container>
      <SectionBreaker text="Articles" color="whitesmoke" />
      {/* Articles Section */}
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        sx={{ paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        <NewsSummary type="article" />
        <NewsSummary type="article" />
        <NewsSummary type="article" />
      </Grid>
      {/* End Articles Section */}
      <SectionBreaker text="Reports" color="whitesmoke" />
      {/* Reports Section */}
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        sx={{ paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        <NewsSummary type="report" />
        <NewsSummary type="report" />
        <NewsSummary type="report" />
      </Grid>
      {/* End Reports Section */}
      <SectionBreaker text="Popular Stories" color="whitesmoke" />
      {/* Popular Reads Section */}
      <Container>
        <PopularRead
          heading={
            "The Captagon Threat: A Profile The Captagon Threat: A Profile The Captagon Threat: A Profile"
          }
          author={"Simon Arda Yuvarlak"}
          date={"05/02/1997"}
        />
        <PopularRead
          heading={"The Captagon Threat: A Profile"}
          author={"Simon Arda Yuvarlak"}
          date={"05/02/1997"}
        />
        <PopularRead
          heading={"The Captagon Threat: A Profile The Captagon Threat:"}
          author={"Simon Arda Yuvarlak"}
          date={"05/02/1997"}
        />
      </Container>
      {/* End Popular Reads Section */}
      {/* Footer */}
      <Grid>
        <Footer />
      </Grid>
      {/* End Footer */}
    </Grid>
  );
}

export default App;
