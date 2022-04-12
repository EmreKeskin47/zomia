import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import { team, directors } from "./bio";
import { MakeArticleParagraph2 } from "../../utils/ArticleParagraph";
import RenderTitle from "../../components/RenderTitle";
import RenderBody from "../../components/RenderBody";
import RenderSubtitle from "../../components/RenderSubtitle";

const Bio = () => {
    const teamData = MakeArticleParagraph2(team);
    const directorsData = MakeArticleParagraph2(directors);

    return (
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
                        <RenderTitle text="Team" />
                        <Grid
                            item
                            xs={12}
                            lg={10}
                            justifyItems={"center"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            justifySelf={"center"}
                        >
                            {teamData
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

                        <RenderTitle text="Board Of Directors" />
                        <Grid
                            item
                            xs={12}
                            lg={10}
                            justifyItems={"center"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            justifySelf={"center"}
                        >
                            {directorsData
                                .split("<br />")
                                .map((paragraph, index) => {
                                    if (
                                        paragraph.includes(".") &&
                                        !paragraph.includes("A.")
                                    ) {
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
        </Paper>
    );
};

export default Bio;
