import AppBar from "../layout/AppNavBar";
import ThemeConfig from "../theme";
import GlobalStyles from "../theme/globalStyles";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeConfig>
            <GlobalStyles />
            <AppBar>
                <Component {...pageProps} />
            </AppBar>
        </ThemeConfig>
    );
}

export default MyApp;
