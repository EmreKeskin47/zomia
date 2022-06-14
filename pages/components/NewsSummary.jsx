import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Grid } from "@mui/material";
import palette from "../../theme/palette";
import singleContext from "../../SingleContext";

const NewsSummary = (props) => {
    const context = useContext(singleContext);
    return (
        <Grid
            sx={{
                borderRadius: 0,
                borderColor: palette.orange.main,
                border: "10px",
            }}
        >
            <Card sx={{ maxWidth: 375 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="350"
                        // image="/static/deneme2.png"
                        image={props.image}
                        alt="green iguana"
                    />
                    <CardContent
                        sx={{
                            backgroundColor: context.darkMode
                                ? palette.black.main
                                : "whitesmoke",
                            height: 450,
                            justifyContent: "flex-start",
                            flexDirection: "column",
                            alignItems: "baseline",
                            display: "flex",
                        }}
                    >
                        <Box sx={{ height: "100px" }}>
                            <Box
                                sx={{
                                    textAlign: "left",
                                    width: "100%",
                                    height: "64px",
                                }}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    sx={{ fontSize: "1.6rem" }}
                                >
                                    {props.title &&
                                        props.title.substring(0, 72)}
                                </Typography>
                            </Box>
                            <Box sx={{ textAlign: "left", width: "100%" }}>
                                <Typography align="left" variant="caption">
                                    {props.date} /
                                </Typography>
                                <Typography align="left" variant="caption">
                                    {props.author}
                                </Typography>
                            </Box>
                        </Box>

                        <hr
                            style={{
                                width: "100%",
                                marginTop: "10px",
                                marginBottom: "10px",
                            }}
                        />
                        <Typography
                            variant="body2"
                            sx={{
                                paddingTop: 1,
                                fontSize: "1.1rem !important",
                            }}
                        >
                            {props.description && props.description}
                        </Typography>
                        {/* <Divider sx={{ marginTop: 2, marginBottom: 0 }}></Divider> */}
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default NewsSummary;
