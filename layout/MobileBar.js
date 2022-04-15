import React, { useState } from "react";
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
                <Divider sx={{ paddingBottom: 5, marginTop: 10 }} />
                <ListItem button sx={{ marginY: 2 }}>
                    <Link href="/">
                        <ListItemText primary="Home" margin={10} />
                    </Link>
                </ListItem>

                <ListItem button>
                    <Link href="/admin">
                        <ListItemText primary="Admin" />
                    </Link>
                </ListItem>
                <ListItem button sx={{ marginY: 2 }}>
                    <Link href="/analysis">
                        <ListItemText primary="Analysis" />
                    </Link>
                </ListItem>
                <ListItem button>
                    <Link href="/projects">
                        <ListItemText primary="Projects" />
                    </Link>
                </ListItem>
                <ListItem button sx={{ marginY: 2 }}>
                    <Link href="/investigations">
                        <ListItemText primary="Investigations" />
                    </Link>
                </ListItem>
                <ListItem button>
                    <Link href="/mission">
                        <ListItemText primary="Mission" />
                    </Link>
                </ListItem>
                <ListItem button sx={{ marginY: 2 }}>
                    <Link href="/bio">
                        <ListItemText primary="Bio" />
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
                    sx={{ cursor: "pointer" }}
                >
                    <Link href="/">
                        <Image
                            src="/static/logo.jpeg"
                            alt="Logo"
                            width="140px"
                            height="64px"
                        />
                    </Link>
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
