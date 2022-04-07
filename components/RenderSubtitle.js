import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const RenderSubtitle = (props) => {
    const { text } = props;
    return (
        <Box
            marginY={3}
            sx={{
                marginLeft: {
                    lg: 15,
                },
            }}
        >
            <Typography variant="h4">{text}</Typography>
        </Box>
    );
};

export default RenderSubtitle;
