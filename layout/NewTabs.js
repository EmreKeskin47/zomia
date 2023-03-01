import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Link from "next/link";
import { Typography, Grid } from "@material-ui/core";
import Checkbox from "@mui/material/Checkbox";
import singleContext from "../SingleContext";
import palette from "../theme/palette";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@mui/material/Divider";
import MenuDropdown from "../components/MenuDropdown";
import { Tabs } from "../models/TabEnum";
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

const NewTabs = (props) => {
  const context = useContext(singleContext);
  const { border } = props;

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
      <Grid>
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
      </Grid>
      <div className="our-work-tab">
        <Link href="/Public%20Health" passhref="true">
          <Typography variant="h6">
            <span
              style={{
                color: context.darkMode ? "#fff" : palette.black.main,
              }}
            >
              Our Work
            </span>
          </Typography>
        </Link>
        <div className="our-work-dropdown">
          <MenuDropdown tabOptions={Tabs.OurWork} />
        </div>
      </div>

      <div className="publications-tab">
        <Link href="/Articles" passhref="true">
          <Typography variant="h6">
            <span
              style={{
                color: context.darkMode ? "#fff" : palette.black.main,
              }}
            >
              Publications
            </span>
          </Typography>
        </Link>
        <div className="publications-dropdown">
          <MenuDropdown tabOptions={Tabs.Publications} />
        </div>
      </div>
      <div className="about-tab">
        <Link href="/Our%20history" passhref="true">
          <Typography variant="h6">
            <span
              style={{
                color: context.darkMode ? "#fff" : palette.black.main,
              }}
            >
              About
            </span>
          </Typography>
        </Link>
        <div className="about-dropdown">
          <MenuDropdown tabOptions={Tabs.About} />
        </div>
      </div>

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
            <Link href="mailto: info@zomiacenter.org" passhref="true">
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

export default NewTabs;
