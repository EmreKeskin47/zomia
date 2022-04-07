// ----------------------------------------------------------------------

export default function TextField(theme) {
  return {
    MuiInputLabel: {
      // Name of the component ⚛️ / style sheet
      root: {
        // Name of the rule
        color: "orange",
        "&$focused": {
          // increase the specificity for the pseudo class
          color: "blue",
        },
      },
    },
  };
}
