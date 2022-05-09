import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Link from "next/link";
import Menu from "@mui/material/Menu";
import { MenuItem, Typography } from "@material-ui/core";
import Checkbox from "@mui/material/Checkbox";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import singleContext from "../SingleContext";
import palette from "../theme/palette";
import { withStyles } from "@material-ui/core/styles";

const checkBoxStyles = (theme) => ({
  root: {
    // "&$checked": {
    //   color: "#3D70B2",
    // },
    color: "black",
  },
  // checked: {},
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
      height={54}
      alignItems={"center"}
      sx={{
        cursor: "pointer",
        borderTop: border && "1px solid #2c253c",
      }}
    >
      <Link href="/" passhref="true">
        <Typography variant="h5">
          <span
            style={{ color: context.darkMode ? "#fff" : palette.black.main }}
          >
            Home
          </span>
        </Typography>
      </Link>
      <Link href="/analysis" passhref="true">
        <Typography variant="h5">
          <span
            style={{ color: context.darkMode ? "#fff" : palette.black.main }}
          >
            Analysis
          </span>
        </Typography>
      </Link>

      <Link href="/projects" passhref="true">
        <Typography variant="h5">
          <span
            style={{ color: context.darkMode ? "#fff" : palette.black.main }}
          >
            Projects
          </span>
        </Typography>
      </Link>

      <Link href="/investigations" passhref="true">
        <Typography variant="h5">
          <span
            style={{ color: context.darkMode ? "#fff" : palette.black.main }}
          >
            Investigations
          </span>
        </Typography>
      </Link>

      <Box sx={{ flexGrow: 0 }}>
        <Box onClick={handleOpenUserMenu}>
          <Typography variant="h5" passhref="true">
            <span
              style={{ color: context.darkMode ? "#fff" : palette.black.main }}
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
                  sx={{ color: context.darkMode ? "#fff" : palette.black.main }}
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
        icon={<NightsStayIcon />}
        checkedIcon={<WbSunnyIcon />}
        onClick={() => {
          context.toggleDarkMode();
        }}
      />
    </Box>
  );
};

export default Tabs;
