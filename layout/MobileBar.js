import React, { useState, useContext } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Link from "next/link";
import Image from "next/image";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import imageLoader from "../loader";
import singleContext from "../SingleContext";
import Checkbox from "@mui/material/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import palette from "../theme/palette";
//Icons
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const MobileBar = () => {
    const context = useContext(singleContext);
    const [drawer, setDrawer] = useState(false);
    const toggleDrawer = () => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setDrawer(!drawer);
    };

    const drawerItemList = () => (
        <Box
            role="presentation"
            onClick={toggleDrawer()}
            onKeyDown={toggleDrawer()}
            width={250}
        >
            <List sx={{ textAlignLast: "center" }}>
                <Divider sx={{ paddingBottom: 5, marginTop: 10 }} />
                <ListItem button>
                    <Link href="/">
                        <ListItemText primary="Home" />
                    </Link>
                </ListItem>
                <ListItem button>
                    <Link href="/analysis">
                        <ListItemText primary="Analysis" />
                    </Link>
                </ListItem>
                <ListItem button>
                    <Link href="/projects">
                        <ListItemText primary="Projects" />
                    </Link>
                </ListItem>
                <ListItem button>
                    <Link href="/investigations">
                        <ListItemText primary="Investigations" />
                    </Link>
                </ListItem>
                <ListItem button>
                    <Link href="/mission">
                        <ListItemText primary="Mission" />
                    </Link>
                </ListItem>
                <ListItem button>
                    <Link href="/bio">
                        <ListItemText primary="Bio" />
                    </Link>
                </ListItem>
                <ListItem button>
                    <FaMoon
                        style={{
                            color: context.darkMode
                                ? "#fff"
                                : palette.black.main,
                            display: context.darkMode && "none",
                            fontSize: "1rem",
                        }}
                        onClick={() => {
                            context.toggleDarkMode();
                        }}
                    />
                    <FaSun
                        style={{
                            color: context.darkMode
                                ? palette.orange.main
                                : palette.black.main,
                            display: !context.darkMode && "none",
                            fontSize: "1rem",
                        }}
                        onClick={() => {
                            context.toggleDarkMode();
                        }}
                    />
                </ListItem>
                <ListItem sx={{ justifyContent: "center !important" }}>
                    <Link
                        href="https://mobile.twitter.com/centerzomia"
                        passhref="true"
                    >
                        <a target="_blank" rel="noopener noreferrer">
                            <FaTwitter
                                style={{
                                    color: context.darkMode
                                        ? "#fff"
                                        : palette.black.main,
                                    fontSize: "1rem",
                                }}
                            />
                        </a>
                    </Link>
                </ListItem>
                <ListItem sx={{ justifyContent: "center !important" }}>
                    <Link href="mailto: info@zomiacenter.com" passhref="true">
                        <a target="_blank" rel="noopener noreferrer">
                            <FaEnvelope
                                style={{
                                    color: context.darkMode
                                        ? "#fff"
                                        : palette.black.main,
                                    fontSize: "1rem",
                                }}
                            />
                        </a>
                    </Link>
                </ListItem>
                <ListItem sx={{ justifyContent: "center !important" }}>
                    <Link
                        href="https://www.linkedin.com/company/the-zomia-center/about/?viewAsMember=true"
                        passhref="true"
                    >
                        <a target="_blank" rel="noopener noreferrer">
                            <FaLinkedin
                                style={{
                                    color: context.darkMode
                                        ? "#fff"
                                        : palette.black.main,
                                    fontSize: "1rem",
                                }}
                            />
                        </a>
                    </Link>
                </ListItem>
            </List>
            <Divider />
        </Box>
    );
    return (
        <>
            <Drawer anchor={"left"} open={drawer} onClose={toggleDrawer()}>
                {drawerItemList()}
            </Drawer>
            <AppBar>
                <Box
                    width={"95%"}
                    display={"flex"}
                    justifyContent={"space-between"}
                    sx={{ cursor: "pointer" }}
                    marginLeft={"2.5%"}
                >
                    <Link href="/">
                        <Image
                            src={
                                context.darkMode
                                    ? "/static/white-logo.png"
                                    : "/static/logo.png"
                            }
                            loader={imageLoader}
                            unoptimized
                            alt="Logo"
                            width="64px"
                            height="64px"
                        />
                    </Link>
                    <IconButton
                        edge="start"
                        aria-label="menu"
                        sx={{
                            mr: 4,
                        }}
                        onClick={toggleDrawer()}
                    >
                        <MenuIcon sx={{ color: "#F9A21B" }} />
                    </IconButton>
                </Box>
            </AppBar>
        </>
    );
};

export default MobileBar;
