import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Link from "next/link";
import Menu from "@mui/material/Menu";
import { MenuItem, Typography, Grid } from "@material-ui/core";
import Checkbox from "@mui/material/Checkbox";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import singleContext from "../SingleContext";
import palette from "../theme/palette";
import { withStyles } from "@material-ui/core/styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Divider from "@mui/material/Divider";

const checkBoxStyles = (theme) => ({
  root: {
    color: "#F9A21B ",
    marginRight: "5%",
  },
});

const CustomCheckbox = withStyles(checkBoxStyles)(Checkbox);

const Tabs = (props) => {
  const context = useContext(singleContext);

  const [anchorElUser, setAnchorElUser] = useState(null);
  const { border } = props;

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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
        <Typography variant="h5">
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
        <Typography variant="h5">
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
        <Typography variant="h5">
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
        <Typography variant="h5">
          <span
            style={{
              color: context.darkMode ? "#fff" : palette.black.main,
            }}
          >
            Investigations
          </span>
        </Typography>
      </Link>

      <Box sx={{ flexGrow: 0 }}>
        <Box onClick={handleOpenUserMenu}>
          <Typography variant="h5" passhref="true">
            <span
              style={{
                color: context.darkMode ? "#fff" : palette.black.main,
              }}
            >
              About
            </span>
          </Typography>
        </Box>
        <Menu
          sx={{ mt: "30px", ml: "30px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem onClick={handleCloseUserMenu}>
            <Box
              sx={{
                color: context.darkMode ? "#fff" : palette.black.main,
                height: "20%",
              }}
            >
              <Link href="/mission" passhref="true">
                <Typography
                  variant="h6"
                  sx={{
                    color: context.darkMode ? "#fff" : palette.black.main,
                  }}
                >
                  Mission
                </Typography>
              </Link>

              <Link href="/bio" passhref="true">
                <Typography variant="h6">Bio</Typography>
              </Link>
            </Box>
          </MenuItem>
        </Menu>
      </Box>
      <CustomCheckbox
        icon={
          <NightsStayIcon
            color={"#F9A21B"}
            sx={{
              color: "#F9A21B !important",
              marginRight: "5% !important",
            }}
          />
        }
        checkedIcon={
          <WbSunnyIcon
            sx={{
              color: "#F9A21B !important",
              marginRight: "5% !important",
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
            <Link href="/" passhref="true">
              <TwitterIcon
                sx={{
                  color: context.darkMode ? "#fff" : palette.black.main,
                }}
              />
            </Link>
          </Grid>

          <Grid item>
            <Link href="/" passhref="true">
              <EmailIcon
                sx={{
                  color: context.darkMode ? "#fff" : palette.black.main,
                }}
              />
            </Link>
          </Grid>

          <Grid item>
            <Link href="/" passhref="true">
              <LinkedInIcon
                sx={{
                  color: context.darkMode ? "#fff" : palette.black.main,
                }}
              />
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Tabs;
