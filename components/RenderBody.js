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
            {/* style={whitespace: 'preline'} allows typography to read newline chars in hardcoded text */}
            <Typography variant="body1" sx={{ fontSize: "1.4rem !important"}} style={{whiteSpace: 'pre-line'}}> 
                {text}
            </Typography>
        </Box>
    );
};
export default RenderBody;
