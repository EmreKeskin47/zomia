import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import SendIcon from "@mui/icons-material/Send";
const RenderBulletPoint = (props) => {
    const { text } = props;
    return (
        <Box
            marginY={3}
            sx={{
                marginLeft: {
                    lg: 10,
                },
            }}
        >
            <Box display="flex">
                <ListItemIcon>
                    <SendIcon color="secondary" sx={{ marginRight: 1 }} />
                </ListItemIcon>

                <Typography variant="body1">{text}</Typography>
            </Box>
        </Box>
    );
};
export default RenderBulletPoint;
