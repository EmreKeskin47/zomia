import palette from "../palette";

export default function Typography(theme) {
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
          color: "#FFFFFF",
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
