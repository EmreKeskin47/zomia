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
                    backgroundImage: "none",
                    // backgroundColor: "#000",
                    backgroundColor: palette.black.main,
                },
            },
        },
    };
}
