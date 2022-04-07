import React from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { AppBar, Box, Grid, Paper } from "@mui/material";
import Divider from "@mui/material/Divider";
import { MakeArticleParagraph2 } from "../utils/ArticleParagraph";
import OnlyTabsBar from "../layout/OnlyTabsBar";

const Article = (props) => {
    const { article } = props;

    if (article) {
        article.text = MakeArticleParagraph2(article.text);

        return (
            <>
                <AppBar position="fixed" sx={{ zIndex: 2 }}>
                    <OnlyTabsBar />
                    <AppBar position="relative" color="secondary">
                        <Typography>{article.title}</Typography>
                    </AppBar>
                </AppBar>

                <Paper
                    sx={{
                        marginTop: { xs: 5, md: 10 },
                    }}
                >
                    <Grid
                        container
                        justifyItems={"center"}
                        justifySelf={"center"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <Grid item xs={10} lg={9} alignSelf={"center"}>
                            <Box marginY={5}>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    marginY={5}
                                >
                                    <Divider
                                        orientation="vertical"
                                        variant="fullWidth"
                                        sx={{
                                            minHeight: "200px",
                                            borderRightWidth: 8,
                                            borderLeftWidth: 8,
                                            height: "100%",
                                            borderRadius: 8,
                                            width: 10,
                                            background: "#bfa359",
                                            marginRight: 10,
                                        }}
                                    ></Divider>
                                    <Box>
                                        <Typography
                                            variant="h2"
                                            sx={{ marginY: 3 }}
                                        >
                                            {article.title}
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            sx={{ marginY: 3 }}
                                        >
                                            {"by " + article.author}
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            sx={{ marginY: 3 }}
                                        >
                                            {"on " + article.date}
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box>
                                    <Image
                                        src={article.image}
                                        width={1300}
                                        height={750}
                                    />
                                </Box>

                                <Grid
                                    item
                                    xs={12}
                                    lg={10}
                                    justifyItems={"center"}
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                    justifySelf={"center"}
                                >
                                    {article.text
                                        .split("<br />")
                                        .map((paragraph, index) => {
                                            return (
                                                <Box
                                                    key={index}
                                                    marginY={3}
                                                    sx={{
                                                        marginLeft: {
                                                            lg: 15,
                                                        },
                                                    }}
                                                >
                                                    {paragraph.includes(".") ? (
                                                        <Typography variant="body1">
                                                            {paragraph}
                                                        </Typography>
                                                    ) : (
                                                        <Typography variant="h4">
                                                            {paragraph}
                                                        </Typography>
                                                    )}
                                                </Box>
                                            );
                                        })}
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </>
        );
    } else {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }
};

export default Article;
