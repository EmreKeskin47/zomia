import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { mockProjects } from "../../MOCK_DATA";
import Image from "next/image";
import { Box, Grid } from "@mui/material";
import { MakeArticleParagraph } from "../../utils/ArticleParagraph";
import RenderTitle from "../../components/RenderTitle";
import RenderBody from "../../components/RenderBody";

const Projects = () => {
    const data = MakeArticleParagraph(mockProjects);

    return (
        <Paper sx={{ paddingTop: 5 }}>
            <Grid
                container
                justifyItems={"center"}
                justifySelf={"center"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Grid item xs={10}>
                    <Typography variant="subtitle1" paragraph={true}>
                        The Center is involved in over a dozen projects in
                        Syria, Iraq, Yemen, Afghanistan, and the United States.
                        The projects fall under two broad programs, the Legacy
                        of War and Public Health Partners, in which Zomia
                        collaborates with local and international partners.
                    </Typography>
                </Grid>

                {data.map((project, index) => {
                    return (
                        <Grid
                            key={index}
                            item
                            xs={10}
                            lg={9}
                            alignSelf={"center"}
                        >
                            <Box marginY={5}>
                                <RenderTitle text={project.name} />

                                <Box>
                                    <Image
                                        src={`/static/projects/${project.image}.png`}
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
                                    {project.body
                                        .split("<br />")
                                        .map((paragraph, index) => {
                                            return (
                                                <RenderBody
                                                    key={index}
                                                    text={paragraph}
                                                />
                                            );
                                        })}
                                </Grid>
                            </Box>
                        </Grid>
                    );
                })}
            </Grid>
        </Paper>
    );
};

export default Projects;
