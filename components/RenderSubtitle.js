import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const RenderSubtitle = (props) => {
    const { text } = props;
    return (
        <Box
            marginY={4}
            sx={{
                marginLeft: {
                    lg: 0,
                },
            }}
        >
            <Typography variant="h3">{text}</Typography>
        </Box>
    );
};

export default RenderSubtitle;
