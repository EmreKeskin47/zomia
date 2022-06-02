import React from "react";
import Divider from "@mui/material/Divider";
import Image from "next/image";

import imageLoader from "../loader";
import { Box } from "@mui/system";
const VerticalDivider = (props) => {
  const { height, onlyLogo } = props;

  if (onlyLogo) {
    return (
      <Box sx={{ marginRight: { xs: 2 } }}>
        <Image
          src="/static/o-logo.png"
          loader={imageLoader}
          unoptimized
          alt="Logo"
          width="80px"
          height="120px"
        />
      </Box>
    );
  } else {
    return (
      <Divider
        orientation="vertical"
        variant="fullWidth"
        sx={{
          minHeight: height ? height : "200px",
          //   borderRightWidth: 8,
          //   borderLeftWidth: 8,
          height: "100%",
          //   borderRadius: 8,
          width: 8,
          background: "#F9A21B",
          marginRight: { xs: 5, md: 10 },
        }}
      ></Divider>
    );
  }
};
export default VerticalDivider;
