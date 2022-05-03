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
    <Box justifyContent="space-around" display="flex" width={"100%"}>
      <Box
        width={"30%"}
        justifyContent="center"
        display="flex"
        alignItems={"center"}
        sx={{
          cursor: "pointer",
          background: context.darkMode
            ? "radial-gradient(circle, rgba(255,255,255,100) 50%, rgba(227,222,222,1) 64%, #858181 74%, rgba(0,0,0,1) 83%)"
            : "radial-gradient(circle, rgba(0,0,0,100) 50%, rgba(227,222,222,1) 64%, #858181 74%, rgba(0,0,0,1) 83%)",
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

      <Box width={"50%"}>
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
            width={"80%"}
            justifyContent={"space-around"}
          >
            {/* <Link href="/admin/create-report">
              <Typography variant="h6">Admin</Typography>
            </Link>
            <Link href="/">
              <Typography variant="h6">Newsletter</Typography>
            </Link> */}
            <Typography variant="h6">
              <span
                style={{
                  color: context.darkMode ? "whitesmoke" : palette.black.main,
                }}
              >
                Follow us on social media
              </span>
            </Typography>
          </Box>
          <Box display="flex" width={"20%"} justifyContent={"space-around"}>
            <TwitterIcon
              sx={{
                color: context.darkMode ? "#fff" : palette.black.main,
              }}
            />
            <EmailIcon
              sx={{
                color: context.darkMode ? "#fff" : palette.black.main,
              }}
            />
            <LinkedInIcon
              sx={{
                color: context.darkMode ? "#fff" : palette.black.main,
              }}
            />
          </Box>
        </Box>
        <Tabs border={true} />
      </Box>
    </Box>
  );
};

export default FullAppBar;
