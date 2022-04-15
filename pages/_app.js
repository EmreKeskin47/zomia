import { Paper, Grid } from "@mui/material";
import AppBar from "../layout/AppNavBar";
import Footer from "../layout/Footer";
import ThemeConfig from "../theme";
import GlobalStyles from "../theme/globalStyles";
import palette from "../theme/palette";
import { isMobile } from "react-device-detect";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const font = createTheme({
  typography: {
    fontFamily: [
      "Raleway",
      // "Montserrat",
      "Nunito",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeConfig>
      <ThemeProvider theme={font}>
        <GlobalStyles />
        <AppBar></AppBar>
        <Paper
          sx={
            isMobile
              ? {
                  paddingTop: { xs: 0, md: 5 },
                  backgroundColor: palette.black.main,
                  width: isMobile && "120%",
                }
              : {
                  paddingTop: { xs: 0, md: 5 },
                  backgroundColor: palette.black.main,
                }
          }
        >
          <Component {...pageProps} />
        </Paper>
        <Grid
          sx={
            isMobile && {
              marginRight: -10,
            }
          }
        >
          <Footer />
        </Grid>
      </ThemeProvider>
    </ThemeConfig>
  );
}

export default MyApp;
