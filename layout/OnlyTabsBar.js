import React from "react";
import { Box } from "@mui/system";
import Image from "next/image";
import Tabs from "./Tabs";

const OnlyTabsBar = () => {
    return (
        <Box justifyContent="space-around" display="flex" width={"100%"}>
            <Box
                width={"30%"}
                justifyContent="center"
                display="flex"
                alignItems={"center"}
            >
                <Image
                    src="/static/logo.svg"
                    alt="Logo"
                    width="250px"
                    height="50px"
                />
            </Box>
            <Box width={"60%"}>
                <Tabs />
            </Box>
        </Box>
    );
};

export default OnlyTabsBar;
