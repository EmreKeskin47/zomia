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
          <IntroArticle />
        </Grid>
        <Grid item lg={4} md={4} sm={12}>
          <IntroContentSummaries />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
