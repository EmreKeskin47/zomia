import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import ContentSummary from "./components/ContentSummary";
import IntroContentSummaries from "./components/IntroContentSummaries";
import IntroArticle from "./components/IntroArticle";

function App() {
  return (
    <Grid>
      {/* Intro */}
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        sx={{ paddingLeft: "1rem", paddingRight: "1rem" }}
      >
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
        <Grid item lg={4} md={4} sm={12}>
          <IntroContentSummaries />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
