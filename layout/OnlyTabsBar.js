import React from "react";
import { Box } from "@mui/system";
import Image from "next/image";
import Tabs from "./Tabs";
import Link from "next/link";
import imageLoader from "../loader";

const OnlyTabsBar = () => {
    return (
        <Box justifyContent="space-around" display="flex" width={"100%"}>
            <Box
                width={"30%"}
                justifyContent="center"
                display="flex"
                alignItems={"center"}
                sx={{ cursor: "pointer" }}
            >
                <Link href="/" passHref>
                    <Image
                        src="/static/logo.svg"
                        loader={imageLoader}
                        unoptimized
                        alt="Logo"
                        width="250px"
                        height="50px"
                    />
                </Link>
            </Box>
            <Box width={"60%"} sx={{ marginRight: "5%" }}>
                <Tabs />
            </Box>
        </Box>
    );
};

export default OnlyTabsBar;
