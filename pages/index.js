import { Grid, Typography, Button } from "@mui/material";
import IntroContentSummaries from "./components/IntroContentSummaries";
import IntroArticle from "./components/IntroArticle";
import { Container } from "@mui/material";
import palette from "../theme/palette";
import SectionBreaker from "./components/SectionBreaker";
import { Divider } from "@mui/material";

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
    </Grid>
  );
}

export default App;
