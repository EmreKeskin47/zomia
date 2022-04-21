import React, { useState } from "react";
import { Box } from "@mui/system";
import Link from "next/link";
import Typography from "@mui/material/Typography";

const AdminAppBar = () => {
    return (
        <Box justifyContent="space-around" display="flex" width={"100%"}>
            <Box width={"80%"} sx={{ marginRight: "10%" }}>
                <Box
                    justifyContent="space-between"
                    display="flex"
                    height={54}
                    alignItems={"center"}
                    sx={{
                        cursor: "pointer",
                    }}
                >
                    <Link href="/admin/create-article" passHref>
                        <Typography variant="h6">Create Article</Typography>
                    </Link>
                    <Link href="/admin/edit-article" passHref>
                        <Typography variant="h6">Edit Article</Typography>
                    </Link>

                    <Link href="/admin/create-report" passHref>
                        <Typography variant="h6">Create Report</Typography>
                    </Link>

                    <Link href="/admin/edit-report" passHref>
                        <Typography variant="h6">Edit Report</Typography>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default AdminAppBar;
