import React, { useContext } from "react";
import { Box } from "@mui/system";
import Image from "next/image";
import Tabs from "./Tabs";
import Link from "next/link";
import imageLoader from "../loader";
import singleContext from "../SingleContext";
import palette from "../theme/palette";

const OnlyTabsBar = () => {
  const context = useContext(singleContext);
  return (
    <Box
      justifyContent="space-around"
      display="flex"
      width={"100%"}
      sx={{
        backgroundColor: context.darkMode ? palette.black.main : "whitesmoke",
      }}
    >
      <Box
        width={"30%"}
        justifyContent="center"
        display="flex"
        alignItems={"center"}
        sx={{ cursor: "pointer" }}
      >
        <Link href="/" passhref="true">
          <Image
            src="/static/amblem.png"
            loader={imageLoader}
            unoptimized
            alt="Logo"
            width="70px"
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
