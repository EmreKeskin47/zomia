import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import styled from "@emotion/styled";
import palette from "../../theme/palette";

export default function IntroArticle(props) {
    const StyledButton = styled(Button)(({ theme }) => ({
        color: "#000",
        "&:hover": {
            color: theme.palette.secondary.main,
            backgroundColor: "transparent",
        },
    }));

    return (
        <Grid
            sx={{
                borderRadius: 0,
                borderColor: palette.orange.main,
                border: "10px",
            }}
        >
            <Card
                sx={{
                    maxWidth: 1,
                }}
            >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image="/static/articles/2.png"
                        alt="top article"
                    />
                    <CardContent sx={{ backgroundColor: palette.black.main }}>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{ color: "whitesmoke" }}
                        >
                            American Withdrawal and the Creeping Syrian Regime:
                            The View from Manbij
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{ color: "whitesmoke" }}
                        >
                            Short Description or first line of the article
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}
