// ----------------------------------------------------------------------

export default function Input(theme) {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            "& svg": { color: theme.palette.text.disabled },
          },
          color: theme.palette.black.main,
        },
        input: {
          "&::placeholder": {
            opacity: 1,
            color: theme.palette.black.main,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottomColor: theme.palette.black.main,
          },
          "&:after": {
            borderBottomColor: theme.palette.black.main,
          },
        },
      },
    },
    // MuiInputLabel: {
    //   // Name of the component ⚛️ / style sheet
    //   root: {
    //     // Name of the rule
    //     color: "#000",
    //     "&:focused": {
    //       // increase the specificity for the pseudo class
    //       color: "#000",
    //     },
    //   },
    // },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: theme.palette.black.main,
          "&.Mui-focused": {
            color: theme.palette.black.main,
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.grey[500_12],
          "&:hover": {
            backgroundColor: theme.palette.grey[500_16],
          },
          "&.Mui-focused": {
            backgroundColor: theme.palette.action.focus,
          },
          "&.Mui-disabled": {
            backgroundColor: theme.palette.action.disabledBackground,
          },
        },
        underline: {
          "&:before": {
            borderBottomColor: theme.palette.grey[500_56],
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.grey[500_32],
          },
          "&.Mui-disabled": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.action.disabledBackground,
            },
          },
        },
      },
    },
  };
}
