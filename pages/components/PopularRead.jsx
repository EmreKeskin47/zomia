import * as React from "react";
import { Grid, Typography, Link } from "@mui/material";
import Image from "next/image";
import popularImage from "../../public/static/deneme2.png";
import imageLoader from "../../loader";

const PopularRead = ({ heading, date, author }) => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            sx={{ paddingBottom: "5rem" }}
        >
            <Grid item sm={12} xs={12} md={6} lg={6}>
                <Image
                    src={popularImage}
                    //   layout="fill"
                    loader={imageLoader}
                    unoptimized
                    width="450px"
                    height="300px"
                    alt="zomia article"
                />
            </Grid>
            <Grid item sm={12} xs={12} md={6} lg={6}>
                <Grid
                    container
                    direction="column"
                    justifyContent="space-evenly"
                >
                    <Typography
                        variant="overline"
                        component="div"
                        color="whitesmoke"
                    >
                        4 min read
                    </Typography>
                    <Link variant="h4" sx={{ paddingTop: "2rem" }}>
                        {heading}
                    </Link>
                    <Typography
                        variant="overline"
                        component="div"
                        fontStyle={"italic"}
                        color="whitesmoke"
                        sx={{ paddingTop: "2rem" }}
                    >
                        {date} / {author}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default PopularRead;
