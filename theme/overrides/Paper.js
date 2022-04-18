// ----------------------------------------------------------------------

import palette from "../palette";

export default function Paper() {
  return {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },

      styleOverrides: {
        root: {
          backgroundImage:
            "url(https://background-tiles.com/overview/black/patterns/large/1001.png)",
          backgroundSize: "175px auto",
          // backgroundColor: palette.black.main,
        },
      },
    },
  };
}
