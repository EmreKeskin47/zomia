import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Tabs from "./Tabs";
import imageLoader from "../loader";
import singleContext from "../SingleContext";
import palette from "../theme/palette";

const FullAppBar = () => {
    const context = useContext(singleContext);

    return (
        <Box
            justifyContent="space-evenly"
            display="flex"
            width={"100%"}
            height={"105px"}
            bgcolor={context.darkMode ? palette.black.main : "whitesmoke"}
        >
            <Box
                width={"20%"}
                justifyContent="center"
                display="flex"
                alignItems={"center"}
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
                        width="200px"
                        height="200px"
                    />
                </Link>
            </Box>

            <Box width={"70%"} sx={{ paddingTop: "2%" }}>
                <Tabs />
            </Box>
        </Box>
    );
};

export default FullAppBar;
