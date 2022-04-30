// ----------------------------------------------------------------------
import React, { useContext } from "react";
import singleContext from "../../SingleContext";
import palette from "../palette";
export default function Link(theme) {
  const context = useContext(singleContext);
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          "&:hover": {
            color: theme.palette.orange.main,
          },
          textDecoration: "none",
          color: context.darkMode ? "whitesmoke" : palette.black.main,
        },
      },
    },
  };
}
