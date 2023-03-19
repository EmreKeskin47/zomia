import React, { useState } from "react";
import { Box } from "@mui/system";
import Link from "next/link";
import { Typography } from "@mui/material";
import palette from "../../theme/palette";

const AdminAppBar = () => {
  return (
    <Box justifyContent="space-around" display="flex" width={"100%"}>
      <Box width={"100%"}>
        <Box
          justifyContent="space-between"
          display="flex"
          height={74}
          alignItems={"center"}
          sx={{
            cursor: "pointer",
          }}
        >
          <Link href="/admin/create-article" passhref="true">
            <Typography variant="h6" sx={{ color: "whitesmoke" }}>
              Create Article
            </Typography>
          </Link>
          <Link href="/admin/edit-article" passhref="true">
            <Typography variant="h6" sx={{ color: "whitesmoke" }}>
              Edit Article
            </Typography>
          </Link>

          <Link href="/admin/create-report" passhref="true">
            <Typography variant="h6" sx={{ color: "whitesmoke" }}>
              Create Report
            </Typography>
          </Link>

          <Link href="/admin/edit-report" passhref="true">
            <Typography variant="h6" sx={{ color: "whitesmoke" }}>
              Edit Report
            </Typography>
          </Link>

          <Link href="/admin/add-to-carousel" passhref="true">
            <Typography variant="h6" sx={{ color: "whitesmoke" }}>
              Add To Carousel
            </Typography>
          </Link>

          <Link href="/admin/edit-carousel" passhref="true">
            <Typography variant="h6" sx={{ color: "whitesmoke" }}>
              Edit Carousel
            </Typography>
          </Link>
          <Link href="/admin/edit-cards" passhref="true">
            <Typography variant="h6" sx={{ color: "whitesmoke" }}>
              Edit Cards
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminAppBar;
