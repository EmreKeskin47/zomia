import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import { bulletList1, bulletList2, MISSION } from "./mission";
import { MakeArticleParagraph2 } from "../../utils/ArticleParagraph";
import Image from "next/image";
import RenderTitle from "../../components/RenderTitle";
import RenderBody from "../../components/RenderBody";
import RenderBulletPoint from "../../components/RenderBulletPoint";
import RenderSubtitle from "../../components/RenderSubtitle";

const Mission = () => {
    const mission = MakeArticleParagraph2(MISSION);
    const bullet1 = MakeArticleParagraph2(bulletList1);
    const bullet2 = MakeArticleParagraph2(bulletList2);

    return (
        <Paper sx={{ paddingTop: 5 }}>
            <Grid
                container
                justifyItems={"center"}
                justifySelf={"center"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Grid item xs={10} lg={9} alignSelf={"center"}>
                    <Box marginY={5}>
                        <RenderTitle text="About" />
                        <Grid
                            item
                            xs={12}
                            lg={10}
                            justifyItems={"center"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            justifySelf={"center"}
                        >
                            {mission.split("<br />").map((paragraph, index) => {
                                return (
                                    <RenderBody key={index} text={paragraph} />
                                );
                            })}
                        </Grid>
                        <RenderSubtitle text="Current Initiatives" />

                        <Box marginBottom={10}>
                            {bullet1.split("<br />").map((paragraph, index) => {
                                return (
                                    <RenderBulletPoint
                                        key={index}
                                        text={paragraph}
                                    />
                                );
                            })}
                        </Box>
                        <RenderBody
                            text={
                                "The Center is unique in linking these endeavors to cutting-edge, granular research in non-state spaces. The Center produces deeply researched reports for the public on issues ranging from the Syrian war to vaccination deserts in the United States. "
                            }
                        />
                        <RenderSubtitle text="Current Themes" />
                        <Box marginBottom={10}>
                            {bullet2.split("<br />").map((paragraph, index) => {
                                return (
                                    <RenderBulletPoint
                                        key={index}
                                        text={paragraph}
                                    />
                                );
                            })}
                        </Box>
                        <RenderBody
                            text={
                                "The Center seeks to encourage the free exchange of information among the scholarly and humanitarian communities. Named for the historically contested uplands of Southeast Asia, The Zomia Center aims to build on a rich tradition of non-state scholarship and activism, in the belief that empirical understanding of the contested present is necessary for a more peaceful and egalitarian future."
                            }
                        />

                        <RenderTitle text="Support Zomia" />
                        <RenderBody
                            text={
                                "Zomia is a 501(c)(3) non-profit organization and all donations are tax deductible. Our federal ID number is 30-1201889. Contributions may be submitted online, or by wire transfer. For information about wire transfers, please contact us via the form above."
                            }
                        />

                        <RenderTitle text="Partners" />
                        <Box display="flex" marginLeft={15}>
                            <Image
                                src="/static/partners/partner1.png"
                                width={550}
                                height={250}
                            />
                            <Image
                                src="/static/partners/partner2.png"
                                width={550}
                                height={250}
                            />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Mission;
