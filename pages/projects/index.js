import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { mockProjects } from "../../MOCK_DATA";
import Image from "next/image";
import { Box, Grid } from "@mui/material";
import { MakeArticleParagraph } from "../../utils/ArticleParagraph";
import Divider from "@mui/material/Divider";

const Projects = () => {
    const data = MakeArticleParagraph(mockProjects);

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
                                    <Typography
                                        variant="h2"
                                        sx={{ marginY: 3 }}
                                    >
                                        {project.name}
                                    </Typography>
                                </Box>

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
                                                <Box
                                                    key={index}
                                                    marginY={3}
                                                    sx={{
                                                        marginLeft: {
                                                            lg: 15,
                                                        },
                                                    }}
                                                >
                                                    <Typography variant="body1">
                                                        {paragraph}
                                                    </Typography>
                                                </Box>
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
