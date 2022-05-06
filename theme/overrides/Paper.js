// ----------------------------------------------------------------------
import palette from "../palette";
import React, { useContext } from "react";
import singleContext from "../../SingleContext";

export default function Paper() {
  const context = useContext(singleContext);
  return {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },

      styleOverrides: {
        root: {
          // backgroundImage: context.darkMode
          // ? "url('https://www.transparenttextures.com/patterns/black-thread-light.png')"
          // : "url('https://www.transparenttextures.com/patterns/black-thread.png')",
          // backgroundSize: "175px auto",
          background: context.darkMode ? palette.black.main : "whitesmoke",
        },
      },
    },
  };
}
