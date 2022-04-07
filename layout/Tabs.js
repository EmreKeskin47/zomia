import React from "react";
import { Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import Link from "@mui/material/Link";

const Tabs = (props) => {
    const { border } = props;
    return (
        <Box
            justifyContent="space-between"
            display="flex"
            height={54}
            alignItems={"center"}
            sx={{
                cursor: "pointer",
                borderTop: border && "1px solid #2c253c",
            }}
        >
            <Link href="/">
                <Typography variant="h6" color="text.secondary">
                    Home
                </Typography>
            </Link>
            <Link href="/articles">
                <Typography variant="h6" color="text.primary">
                    Articles
                </Typography>
            </Link>
            <Link href="/admin">
                <Typography variant="h6" color="text.primary">
                    Admin
                </Typography>
            </Link>
            <Link href="/about">
                <Typography variant="h6" color="text.primary">
                    About
                </Typography>
            </Link>
            <Link href="/contact">
                <Typography variant="h6" color="text.primary">
                    Contact
                </Typography>
            </Link>
        </Box>
    );
};

export default Tabs;
