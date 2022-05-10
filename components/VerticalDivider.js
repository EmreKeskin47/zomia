import React from "react";
import Divider from "@mui/material/Divider";
import Image from "next/image";

import imageLoader from "../loader";
const VerticalDivider = (props) => {
    const { height } = props;
    if (!height) {
        height = "200px";
    }
    return (
        <div>
            <Image
                src="/static/o-logo.png"
                loader={imageLoader}
                unoptimized
                alt="Logo"
                width="100px"
                height="150px"
            />
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
                    background: "#F9A21B",
                    marginRight: { xs: 5, md: 10 },
                }}
            ></Divider>
        </div>
    );
};
export default VerticalDivider;
