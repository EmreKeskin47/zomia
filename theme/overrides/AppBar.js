// ----------------------------------------------------------------------

export default function AppBar(theme) {
    return {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.secondary,
                    "& .MuiAppBar-positionFixed": {
                        "& .MuiToolbar-root": {
                            color: "black",
                        },
                    },
                    "&.MuiAppBar-colorPrimary": {
                        backgroundColor: "#231F20",
                    },
                },
            },
        },
    };
}
