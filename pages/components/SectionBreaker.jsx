import React from "react";
import { Link } from "@mui/material";
import { Divider } from "@mui/material";

const SectionBreaker = (props) => {
    return (
        <Divider flexItem sx={{ paddingBottom: "2rem", paddingTop: "3rem" }}>
            <Link href="#" underline="none" color="whitesmoke" variant="h4">
                {props.text}
            </Link>
        </Divider>
    );
};

export default SectionBreaker;
