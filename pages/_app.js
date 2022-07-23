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
import Loader from "../components/Loader";
import React, { useState } from "react";

const font = createTheme({
  typography: {
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
      fontFamily: "Tiro Telugu",
    },
    h1: {
      fontFamily: "Raleway",
    },
  },
});

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isStart, setIsStart] = useState(true);
  initializeApp(firebaseConfig);
  const load = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, "2000");
  }
  setTimeout(() => {
    setIsStart(false);
    load();
  }, "1000");
  return (
    <div>
      {isStart ? (
        <Loader type={0} />
      ) : (
        <Provider store={store}>
          <SingleProvider>
            <ThemeConfig>
              <ThemeProvider theme={font}>
                <GlobalStyles />
                <AppBar></AppBar>
                {isLoading ? <Loader type={1} /> : 
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
}
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
      )}
    </div>
  );
}

export default wrapper.withRedux(MyApp);
