import { Grid, Typography, Button } from "@mui/material";
import IntroContentSummaries from "./components/IntroContentSummaries";
import IntroArticle from "./components/IntroArticle";
import { Container } from "@mui/material";

function App() {
  return (
    <Container>
      {/* Intro */}
      <Grid container direction="row" justifyContent="space-between">
        <Grid item lg={8} md={8} sm={12} sx={{ padding: "1rem" }}>
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
        <Grid item lg={4} md={4} sm={12} sx={{ paddingTop: "0.5rem" }}>
          <IntroContentSummaries />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
