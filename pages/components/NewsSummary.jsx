import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Divider, Grid } from "@mui/material";
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
                paddingBottom: "2rem",
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
                            height: 350,
                            justifyContent: "flex-start",
                            flexDirection: "column",
                            alignItems: "center",
                            display: "flex",
                        }}
                    >
                        <Typography gutterBottom variant="h5" component="div">
                            {props.title && props.title.substring(0, 72)}
                        </Typography>
                        <Box sx={{ textAlign: "left", width: "100%" }}>
                            <Typography align="left" variant="caption">
                                {props.date} /
                            </Typography>
                            <Typography align="left" variant="caption">
                                {props.author}
                            </Typography>
                        </Box>
                        <hr
                            style={{
                                width: "100%",
                                marginTop: "10px",
                                marginBottom: "10px",
                            }}
                        />
                        <Typography variant="body2" sx={{ paddingTop: 1 }}>
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
