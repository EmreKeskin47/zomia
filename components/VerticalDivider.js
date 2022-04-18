import React from "react";
import Divider from "@mui/material/Divider";

const VerticalDivider = (props) => {
    const { height } = props;
    if (!height) {
        height = "200px";
    }
    return (
        <Divider
            orientation="vertical"
            variant="fullWidth"
            sx={{
                minHeight: height,
                borderRightWidth: 8,
                borderLeftWidth: 8,
                height: "100%",
                borderRadius: 8,
                width: 10,
                background: "#e5c15e",
                marginRight: { xs: 5, md: 10 },
            }}
        ></Divider>
    );
};
export default VerticalDivider;
