import {
  Box,
  Container,
  Stack,
  Button,
  Grid,
  Divider,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { Partners } from "../models/Partners";

const OurPartners = () => {
  return (
    <>
      <Divider>
        <Typography>
          {" "}
          <h2>Our Partners</h2>
        </Typography>
      </Divider>
      <Grid container direction={"row"} justifyContent={"center"}>
        {Partners.map((partner) => (
          <Grid
            sx={{
              paddingX: 1,
              paddingY: 1,
            }}
            key={partner.img}
          >
            <Image
              src={`/partners/${partner.img}`}
              unoptimized
              width={partner.width}
              height={partner.height}
              objectFit={"cover"}
              alt="arizona state university"
            ></Image>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default OurPartners;
