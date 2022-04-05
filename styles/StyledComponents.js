import * as React from "react";
import Link from "@mui/material/Link";
import { alpha, styled } from "@mui/material/styles";

//Link
export const StyledLink = styled(Link)(({ theme }) => ({
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

export const CustomLink = () => {
  return <StyledLink />;
};
//
