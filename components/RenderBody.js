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
                    lg: 15,
                },
            }}
        >
            <Typography variant="h6">{text}</Typography>
        </Box>
    );
};
export default RenderBody;
