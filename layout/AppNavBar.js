import * as React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import CategoriesBar from "./CategoriesBar";
import LinksBar from "./LinksBar";

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
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <div>
          <Toolbar id="back-to-top-anchor" />
          <ElevationScroll {...props}>
            <AppBar position="fixed">
              <Toolbar>
                <CategoriesBar />
              </Toolbar>
            </AppBar>
          </ElevationScroll>
        </div>
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
