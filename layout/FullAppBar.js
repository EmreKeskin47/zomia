import React from "react";
import { Typography } from "@material-ui/core";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import NotificationsIcon from "@mui/icons-material/Notifications";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SearchIcon from "@mui/icons-material/Search";
import Tabs from "./Tabs";
import imageLoader from "../loader";

const FullAppBar = () => {
    return (
        <Box justifyContent="space-around" display="flex" width={"100%"}>
            <Box
                width={"20%"}
                justifyContent="center"
                display="flex"
                alignItems={"center"}
                sx={{
                    cursor: "pointer",
                }}
            >
                <Link href="/">
                    <Image
                        src="/static/logo.jpeg"
                        loader={imageLoader}
                        unoptimized
                        alt="Logo"
                        width="220px"
                        height="90px"
                    />
                </Link>
            </Box>

            <Box width={"70%"}>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    height={54}
                    sx={{
                        cursor: "pointer",
                    }}
                >
                    <Box
                        borderLeft={"1px solid #2c253c"}
                        borderRight={"1px solid #2c253c"}
                        display="flex"
                        width={"30%"}
                        justifyContent={"space-around"}
                    >
                        <Link href="/admin">
                            <Typography variant="h6">Admin</Typography>
                        </Link>
                        <Link href="/">
                            <Typography variant="h6">Subscribe</Typography>
                        </Link>
                    </Box>
                    <Box
                        display="flex"
                        width={"40%"}
                        justifyContent={"space-around"}
                    >
                        <InstagramIcon />
                        <TwitterIcon />
                        <FacebookIcon />
                        <EmailIcon />
                        <YouTubeIcon />
                        <LinkedInIcon />
                        <NotificationsIcon />
                    </Box>
                    <Box
                        display="flex"
                        width={"10%"}
                        justifyContent={"space-around"}
                        borderLeft={"1px solid #2c253c"}
                    >
                        <SearchIcon />
                    </Box>
                </Box>
                <Tabs border={true} />
            </Box>
        </Box>
    );
};

export default FullAppBar;
