import React, { useContext } from "react";
import { Typography } from "@material-ui/core";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
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
        // sx={{
        //   cursor: "pointer",
        //   background: context.darkMode
        //     ? "radial-gradient(circle, rgba(255,255,255,100) 50%, rgba(227,222,222,1) 64%, #858181 74%, rgba(0,0,0,1) 83%)"
        //     : "radial-gradient(circle, rgba(0,0,0,100) 50%, rgba(227,222,222,1) 64%, #858181 74%, rgba(0,0,0,1) 83%)",
        // }}
      >
        <Link href="/">
          <Image
            src={
              context.darkMode ? "/static/white-logo.png" : "/static/logo.png"
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
