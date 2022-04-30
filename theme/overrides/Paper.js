// ----------------------------------------------------------------------
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
          backgroundImage: context.darkMode
            ? "url(https://background-tiles.com/overview/black/patterns/large/1001.png)"
            : "url(https://background-tiles.com/overview/white/patterns/large/1014.png)",
          backgroundSize: "175px auto",
        },
      },
    },
  };
}
