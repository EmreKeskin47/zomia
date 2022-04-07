import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Grid, Paper } from "@mui/material";
import VerticalDivider from "../../components/VerticalDivider";
import { bulletList1, bulletList2, MISSION } from "./mission";
import { MakeArticleParagraph2 } from "../../utils/ArticleParagraph";
import ListItemIcon from "@mui/material/ListItemIcon";
import SendIcon from "@mui/icons-material/Send";
import Image from "next/image";

const Mission = () => {
    const mission = MakeArticleParagraph2(MISSION);
    const bullet1 = MakeArticleParagraph2(bulletList1);
    const bullet2 = MakeArticleParagraph2(bulletList2);

    const renderBullet = (text, index) => {
        return (
            <Box
                marginY={3}
                sx={{
                    marginLeft: {
                        lg: 15,
                    },
                }}
                key={index}
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

    const renderTitle = (title) => {
        return (
            <Box display="flex" alignItems="center" marginY={5}>
                <VerticalDivider />
                <Box>
                    <Typography variant="h2" sx={{ marginY: 3 }}>
                        {title}
                    </Typography>
                </Box>
            </Box>
        );
    };

    const renderBodyParagraph = (paragraph, index) => {
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
                <Typography variant="body1">{paragraph}</Typography>
            </Box>
        );
    };
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
                        {renderTitle("About")}
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
                                return renderBodyParagraph(paragraph, index);
                            })}
                        </Grid>

                        {renderTitle("Current initiatives")}
                        <Box marginBottom={10}>
                            {bullet1.split("<br />").map((paragraph, index) => {
                                return renderBullet(paragraph, index);
                            })}
                        </Box>
                        {renderBodyParagraph(
                            "The Center is unique in linking these endeavors to cutting-edge, granular research in non-state spaces. The Center produces deeply researched reports for the public on issues ranging from the Syrian war to vaccination deserts in the United States. "
                        )}

                        {renderTitle("Current Themes")}
                        <Box marginBottom={10}>
                            {bullet2.split("<br />").map((paragraph, index) => {
                                return renderBullet(paragraph, index);
                            })}
                        </Box>
                        {renderBodyParagraph(
                            "The Center seeks to encourage the free exchange of information among the scholarly and humanitarian communities. Named for the historically contested uplands of Southeast Asia, The Zomia Center aims to build on a rich tradition of non-state scholarship and activism, in the belief that empirical understanding of the contested present is necessary for a more peaceful and egalitarian future."
                        )}

                        {renderTitle("Support Zomia")}

                        {renderBodyParagraph(
                            "Zomia is a 501(c)(3) non-profit organization and all donations are tax deductible. Our federal ID number is 30-1201889. Contributions may be submitted online, or by wire transfer. For information about wire transfers, please contact us via the form above."
                        )}

                        {renderTitle("Partners")}
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
