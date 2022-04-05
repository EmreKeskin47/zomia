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
        <Grid item sx={{ width: "200px" }}>
          <IntroCarousel />
        </Grid>
        <Grid item>
          <IntroContentSummaries />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
