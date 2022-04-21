import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import { useRouter } from "next/router";
import palette from "../../theme/palette";

export default function IntroArticle(props) {
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
                <CardActionArea
                    onClick={() => router.push("/investigations/1")}
                >
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
                            Proxy War in the Northern Corridor: How Inequality
                            Shaped the Syrian War: The Case of Mare’a
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{ color: "whitesmoke" }}
                        >
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
