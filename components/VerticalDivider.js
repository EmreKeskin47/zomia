import React from "react";
import Divider from "@mui/material/Divider";

const VerticalDivider = () => {
  return (
    <Divider
      orientation="vertical"
      variant="fullWidth"
      sx={{
        minHeight: "200px",
        borderRightWidth: 8,
        borderLeftWidth: 8,
        height: "100%",
        borderRadius: 8,
        width: 10,
        background: "#e5c15e",
        marginRight: 10,
      }}
    ></Divider>
  );
};
export default VerticalDivider;
