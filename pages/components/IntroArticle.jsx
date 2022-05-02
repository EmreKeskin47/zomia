import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import { useRouter } from "next/router";
import palette from "../../theme/palette";
import singleContext from "../../SingleContext";

export default function IntroArticle(props) {
    const context = useContext(singleContext);
    const router = useRouter();
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
                <CardActionArea onClick={() => router.push("")}>
                    <CardMedia
                        component="img"
                        image="/static/articles/2.png"
                        alt="top article"
                    />
                    <CardContent
                        sx={{
                            backgroundColor: context.darkMode
                                ? palette.black.main
                                : "white",
                        }}
                    >
                        <Typography gutterBottom variant="h5" component="div">
                            Proxy War in the Northern Corridor: How Inequality
                            Shaped the Syrian War: The Case of Mare’a
                        </Typography>
                        <Typography variant="subtitle1">
                            During the Syrian civil war, towns and cities across
                            the country overthrew the central government and
                            governed themselves. Ultimately, however, this
                            experiment in self-rule collapsed: some cities
                            fell...
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}
