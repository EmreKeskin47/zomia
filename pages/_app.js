import { Paper, Grid } from "@mui/material";
import AppBar from "../layout/AppNavBar";
import Footer from "../layout/Footer";
import ThemeConfig from "../theme";
import GlobalStyles from "../theme/globalStyles";
import palette from "../theme/palette";
import { isMobile } from "react-device-detect";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { wrapper, store } from "../store/store";
import { Provider } from "react-redux";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../store/firebase";
import SingleProvider from "../SingleProvider";

const font = createTheme({
  typography: {
    //Contents
    //h6 is bigger and subtitle1 is smaller
    h6: {
      fontFamily: "Montserrat",
    },
    subtitle1: {
      fontFamily: "Raleway",
    },
    subtitle2: {
      fontFamily: "Oswald",
    },
    caption: {
      fontFamily: "Oswald",
    },
    overline: {
      fontFamily: "Oswald",
    },
    body1: {
      fontFamily: "Raleway",
    },
    body2: {
      fontFamily: "Raleway",
    },
    //Heading
    h5: {
      fontFamily: "Oswald",
    },
    h4: {
      fontFamily: "Oswald",
    },
    h3: {
      fontFamily: "Oswald",
    },
    h2: {
      fontFamily: "Joan",
    },
    h1: {
      fontFamily: "Raleway",
    },
    // fontFamily: [
    //   "Raleway",
    //   "Montserrat",
    //   "Nunito",
    //   "Roboto",
    //   "Helvetica Neue",
    //   "Arial",
    //   "sans-serif",
    // ].join(","),
  },
});

function MyApp({ Component, pageProps }) {
  initializeApp(firebaseConfig);
  return (
    <Provider store={store}>
      <SingleProvider>
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
      </SingleProvider>
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
