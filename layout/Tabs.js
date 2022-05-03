import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Link from "next/link";
import Menu from "@mui/material/Menu";
import { MenuItem, Typography } from "@material-ui/core";
import Checkbox from "@mui/material/Checkbox";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import singleContext from "../SingleContext";

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
        <Typography variant="h6">Home</Typography>
      </Link>
      <Link href="/analysis" passhref="true">
        <Typography variant="h6">Analysis</Typography>
      </Link>

      <Link href="/projects" passhref="true">
        <Typography variant="h6">Projects</Typography>
      </Link>

      <Link href="/investigations" passhref="true">
        <Typography variant="h6">Investigations</Typography>
      </Link>

      <Box sx={{ flexGrow: 0 }}>
        <Box onClick={handleOpenUserMenu}>
          <Typography variant="h6" passhref="true">
            About
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
                color: "whitesmoke",
                height: "20%",
              }}
            >
              <Link href="/mission" passhref="true">
                <Typography variant="h6" color="">
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
      <Checkbox
        icon={<NightsStayIcon />}
        checkedIcon={<WbSunnyIcon />}
        onClick={() => {
          console.log(context);
          context.toggleDarkMode();
          console.log(context);
        }}
      />
    </Box>
  );
};

export default Tabs;
