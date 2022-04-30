import palette from "../palette";
import { useContext } from "react";
import singleContext from "../../SingleContext";

export default function Typography(theme) {
  const context = useContext(singleContext);
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2),
        },
        gutterBottom: {
          marginBottom: theme.spacing(1),
        },
        root: {
          color: context.darkMode ? "white" : palette.black.main,
          // color: "#FFF",
          "&::-moz-selection, & *::-moz-selection": {
            backgroundColor: palette.orange.main,
          },
          "&::-webkit-selection, & *::-webkit-selection": {
            backgroundColor: palette.orange.main,
          },
          "&::selection, & *::selection": {
            backgroundColor: palette.orange.main,
          },
        },
      },
    },
  };
}
