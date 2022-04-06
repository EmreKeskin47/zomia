import React from "react";
import { Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import Link from "next/link";
import Button from "@mui/material/Button";

const CategoriesBar = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      sx={{
        width: "50%",
        marginLeft: "10%",
      }}
    >
      <Link href="/">
        <Button variant="text">Home</Button>
      </Link>
      <Link href="/articles">
        <Button variant="text" color="primary">
          Articles
        </Button>
      </Link>
      <Link href="/admin">
        <Button variant="text" color="primary">
          Admin
        </Button>
      </Link>
      <Link href="/about">
        <Button variant="text" color="primary">
          About
        </Button>
      </Link>
      <Link href="/contact">
        <Button variant="text" color="primary">
          Contact
        </Button>
      </Link>
    </Box>
  );
};

export default CategoriesBar;
