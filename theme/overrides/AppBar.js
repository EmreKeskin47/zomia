import React, { useContext } from "react";
import singleContext from "../../SingleContext";

export default function AppBar(theme) {
  const context = useContext(singleContext);

  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: context.darkMode ? "#231F20" : "whitesmoke",
          "& .MuiAppBar-positionFixed": {
            "& .MuiToolbar-root": {
              color: context.darkMode ? "#231F20" : "whitesmoke",
            },
          },
          "&.MuiAppBar-colorPrimary": {
            backgroundColor: context.darkMode ? "#231F20" : "whitesmoke",
          },
        },
      },
    },
  };
}
