import React, { useContext } from "react";
import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { Toolbar } from "@material-ui/core";
import FullAppBar from "./FullAppBar";
import OnlyTabsBar from "./OnlyTabsBar";
import MobileBar from "./MobileBar";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import singleContext from "../SingleContext";
import palette from "../theme/palette";

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

function HideOnScroll(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

const AppNavBar = (props) => {
    const context = useContext(singleContext);
    return (
        <>
            <React.Fragment>
                <Toolbar
                    id="back-to-top-anchor"
                    disableGutters={true}
                    sx={{ paddingLeft: 0, paddingRight: 0 }}
                />

                <Box
                    sx={{
                        display: { xs: "none ", md: "flex" },
                    }}
                >
                    <ElevationScroll {...props}>
                        <AppBar position="fixed" sx={{ zIndex: 1 }}>
                            <Toolbar
                                disableGutters={true}
                                sx={{
                                    padding: 0,
                                    minHeight: "48px !important",
                                }}
                            >
                                <OnlyTabsBar />
                            </Toolbar>
                        </AppBar>
                    </ElevationScroll>
                    <HideOnScroll {...props}>
                        <AppBar position="fixed" sx={{ zIndex: 3 }}>
                            <Toolbar
                                disableGutters={true}
                                sx={{ paddingRight: 10 }}
                            >
                                <FullAppBar />
                            </Toolbar>
                        </AppBar>
                    </HideOnScroll>
                </Box>
                <Box
                    sx={{
                        display: { xs: "flex", md: "none" },
                        justifyContent: "end",
                    }}
                >
                    <MobileBar />
                </Box>
            </React.Fragment>
            <main role="main">
                {props.preContainer && props.preContainer}
                <div className="album py-5 bg-light">
                    <div className="container">{props.children}</div>
                </div>
            </main>
        </>
    );
};

export default AppNavBar;
