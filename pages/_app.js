import { Paper } from "@mui/material";
import AppBar from "../layout/AppNavBar";
import Footer from "../layout/Footer";
import ThemeConfig from "../theme";
import GlobalStyles from "../theme/globalStyles";
import palette from "../theme/palette";
import { isMobile } from "react-device-detect";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeConfig>
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

      <Footer />
    </ThemeConfig>
  );
}

export default MyApp;
