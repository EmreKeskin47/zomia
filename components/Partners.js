import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";

const Partners = () => {
    return (
        <Grid
            container
            sx={{ display: " flex", textAlign: "center" }}
            justifyContent="center"
        >
            <Grid item xs={12} md={6}>
                <Image
                    src="/static/partners/partner1.png"
                    width={400}
                    height={150}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <Image
                    src="/static/partners/partner2.png"
                    width={300}
                    height={150}
                />
            </Grid>
        </Grid>
    );
};

export default Partners;
