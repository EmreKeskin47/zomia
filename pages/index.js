import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import ContentSummary from "./components/ContentSummary";
import IntroContentSummaries from "./components/IntroContentSummaries";
import IntroCarousel from "./components/IntroCarousel";

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
        <Grid item lg={6} md={6} sm={12}>
          <IntroCarousel />
        </Grid>
        <Grid item lg={6} md={6} sm={12}>
          <IntroContentSummaries />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
