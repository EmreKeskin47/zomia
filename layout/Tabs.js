import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Link from "next/link";
import Menu from "@mui/material/Menu";
import { MenuItem, Button, Typography, Grid } from "@material-ui/core";
import Checkbox from "@mui/material/Checkbox";
import singleContext from "../SingleContext";
import palette from "../theme/palette";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@mui/material/Divider";
import AboutDropdown from "../components/AboutDropdown";
import styled from "@emotion/styled";
//Icons
import { FaTwitter } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

const checkBoxStyles = (theme) => ({
  root: {
    color: "#F9A21B ",
    marginRight: "5%",
  },
});

const CustomCheckbox = withStyles(checkBoxStyles)(Checkbox);

const Tabs = (props) => {
  const context = useContext(singleContext);

  const { border } = props;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      justifyContent="space-between"
      display="flex"
      height={"48px"}
      alignItems={"center"}
      sx={{
        cursor: "pointer",
        borderTop: border && "1px solid #2c253c",
        padding: 0,
      }}
    >
      <Link href="/" passhref="true">
        <Typography variant="h6">
          <span
            style={{
              color: context.darkMode ? "#fff" : palette.black.main,
            }}
          >
            Home
          </span>
        </Typography>
      </Link>
      <Link href="/analysis" passhref="true">
        <Typography variant="h6">
          <span
            style={{
              color: context.darkMode ? "#fff" : palette.black.main,
            }}
          >
            Analysis
          </span>
        </Typography>
      </Link>

      <Link href="/projects" passhref="true">
        <Typography variant="h6">
          <span
            style={{
              color: context.darkMode ? "#fff" : palette.black.main,
            }}
          >
            Projects
          </span>
        </Typography>
      </Link>

      <Link href="/investigations" passhref="true">
        <Typography variant="h6">
          <span
            style={{
              color: context.darkMode ? "#fff" : palette.black.main,
            }}
          >
            Investigations
          </span>
        </Typography>
      </Link>

      <Grid sx={{ flexGrow: 0 }}>
        <AboutDropdown style={{backgroundColor: 'transparent'}} />
      </Grid>
      <CustomCheckbox
        icon={
          <FaMoon
            style={{
              color: context.darkMode ? "#fff" : palette.black.main,
            }}
          />
        }
        checkedIcon={
          <FaSun
            style={{
              color: context.darkMode
                ? palette.orange.main
                : palette.black.main,
            }}
          />
        }
        onClick={() => {
          context.toggleDarkMode();
        }}
      />
      <Divider orientation="vertical" flexItem />
      <Box
        sx={{
          color: context.darkMode ? "#fff" : palette.black.main,
          height: "30%",
          paddingBottom: "25px",
        }}
      >
        <Grid container flexDirection={"row"} justifyContent={"space-around"}>
          <Grid item>
            <Link href="https://mobile.twitter.com/centerzomia" passhref="true">
              <a target="_blank" rel="noopener noreferrer">
                <FaTwitter
                  style={{
                    color: context.darkMode ? "#fff" : palette.black.main,
                    marginRight: "5px",
                  }}
                />
              </a>
            </Link>
          </Grid>

          <Grid item>
            <Link href="mailto: info@zomiacenter.com" passhref="true">
              <a target="_blank" rel="noopener noreferrer">
                <FaEnvelope
                  style={{
                    color: context.darkMode ? "#fff" : palette.black.main,
                    marginRight: "5px",
                  }}
                />
              </a>
            </Link>
          </Grid>

          <Grid item>
            <Link
              href="https://www.linkedin.com/company/the-zomia-center/about/?viewAsMember=true"
              passhref="true"
            >
              <a target="_blank" rel="noopener noreferrer">
                <FaLinkedin
                  style={{
                    color: context.darkMode ? "#fff" : palette.black.main,
                  }}
                />
              </a>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Tabs;
