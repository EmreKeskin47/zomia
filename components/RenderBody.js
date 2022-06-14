import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const RenderBody = (props) => {
    const { text } = props;
    return (
        <Box
            marginY={3}
            sx={{
                marginLeft: {
                    lg: 0,
                },
            }}
        >
            <Typography variant="body1" sx={{ fontSize: "1.2rem !important" }}>
                {text}
            </Typography>
        </Box>
    );
};
export default RenderBody;
