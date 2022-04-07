import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import VerticalDivider from "./VerticalDivider";

const RenderTitle = (props) => {
    const { text } = props;
    return (
        <Box display="flex" alignItems="center" marginY={5}>
            <VerticalDivider />
            <Box>
                <Typography variant="h2" sx={{ marginY: 3 }}>
                    {text}
                </Typography>
            </Box>
        </Box>
    );
};
export default RenderTitle;
