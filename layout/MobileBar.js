import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Link from "next/link";
import Image from "next/image";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import AppBar from "@mui/material/AppBar";

const MobileBar = () => {
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
            <List>
                <ListItem button marginY={10} marginTop={10}>
                    <Link href="/">
                        <ListItemText primary="Home" margin={10} />
                    </Link>
                </ListItem>

                <ListItem button>
                    <Link href="/">
                        <ListItemText primary="Admin" />
                    </Link>
                </ListItem>
                <ListItem button>
                    <Link href="/">
                        <ListItemText primary="About" />
                    </Link>
                </ListItem>
                <ListItem button>
                    <Link href="/">
                        <ListItemText primary="Contact" />
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
                    width={"100%"}
                    display={"flex"}
                    justifyContent={"space-between"}
                >
                    <Image
                        src="/static/logo.jpeg"
                        alt="Logo"
                        width="140px"
                        height="64px"
                    />
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 4 }}
                        onClick={toggleDrawer()}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>
            </AppBar>
        </>
    );
};

export default MobileBar;
