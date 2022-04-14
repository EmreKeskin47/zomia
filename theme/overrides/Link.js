// ----------------------------------------------------------------------

export default function Link(theme) {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          "&:hover": {
            color: theme.palette.orange.main,
          },
          textDecoration: "none",
          color: "whitesmoke",
        },
      },
    },
  };
}
