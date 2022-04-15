import React from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { AppBar, Box, Grid, Paper } from "@mui/material";
import { MakeArticleParagraph2 } from "../utils/ArticleParagraph";
import OnlyTabsBar from "../layout/OnlyTabsBar";
import VerticalDivider from "./VerticalDivider";
import RenderSubtitle from "./RenderSubtitle";
import RenderBody from "./RenderBody";
import CardList from "../pages/components/CardList";
import SectionBreaker from "../pages/components/SectionBreaker";

const Article = (props) => {
    const { article, isReport } = props;
    console.log(article);

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

                <Paper>
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
                                    <VerticalDivider />
                                    <Box>
                                        <Typography
                                            variant="h2"
                                            sx={{ marginY: 3 }}
                                        >
                                            {article.title}
                                        </Typography>
                                        {article.author && (
                                            <>
                                                <Typography
                                                    variant="subtitle1"
                                                    fontStyle={"italic"}
                                                    sx={{ marginY: 3 }}
                                                >
                                                    {"by " + article.author}
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
                                                    fontStyle={"italic"}
                                                    sx={{ marginY: 3 }}
                                                >
                                                    {"on " + article.date}
                                                </Typography>
                                            </>
                                        )}
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
                                            if (paragraph.includes(".")) {
                                                return (
                                                    <RenderBody
                                                        key={index}
                                                        text={paragraph}
                                                    />
                                                );
                                            } else {
                                                return (
                                                    <RenderSubtitle
                                                        key={index}
                                                        text={paragraph}
                                                    />
                                                );
                                            }
                                        })}
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                    {!isReport && (
                        <>
                            <SectionBreaker text="Related Articles" />
                            <CardList type="report" />
                        </>
                    )}
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
