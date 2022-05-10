// ----------------------------------------------------------------------

export default function ToolBar(theme) {
    return {
        MuiToolBar: {
            styleOverrides: {
                root: {
                    "& .MuiToolbar-gutters": {
                        paddingLeft: 0,
                        paddingRight: 0,
                    },
                },
            },
        },
    };
}
