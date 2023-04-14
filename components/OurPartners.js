import {
  Box,
  Container,
  Stack,
  Button,
  Divider,
  Typography,
} from "@mui/material";
import Image from "next/image";

const OurPartners = () => {
  return (
    <>
      <Divider>
        <Typography>
          {" "}
          <h2>Our Partners</h2>
        </Typography>
      </Divider>
      <Stack direction="row" spacing={6} justifyContent="center">
        <Box>
          <Image
            src={"/partners/arizona-state-university.jpg"}
            unoptimized
            width={"120px"}
            height={"80px"}
            objectFit={"cover"}
            alt="arizona state university"
          ></Image>
        </Box>
        <Box>
          <Image
            src={"/partners/american-university-of-afghanistan.png"}
            unoptimized
            width={"120px"}
            height={"80px"}
            objectFit={"cover"}
            alt="american university of afghanistan"
          ></Image>
        </Box>
        <Box>
          {" "}
          <Image
            src={"/partners/code-to-inspire.png"}
            unoptimized
            width={"120px"}
            height={"80px"}
            objectFit={"cover"}
            alt="code to inspire"
          ></Image>
        </Box>

        <Box>
          {" "}
          <Image
            src={"/partners/The-Trade-Desk.png"}
            unoptimized
            width={"280px"}
            height={"80px"}
            objectFit={"cover"}
            alt="the trade desk"
          ></Image>
        </Box>

        <Box>
          {" "}
          <Image
            src={"/partners/International_Rescue_Committee.png"}
            unoptimized
            width={"280px"}
            height={"80px"}
            objectFit={"cover"}
            alt="International Rescue Committee"
          ></Image>
        </Box>

        <Box>
          {" "}
          <Image
            src={"/partners/EMM.png"}
            unoptimized
            width={"120px"}
            height={"80px"}
            objectFit={"cover"}
            alt="Episcopal Migration Ministries"
          ></Image>
        </Box>
        <Box>
          {" "}
          <Image
            src={"/partners/LIRS.jpg"}
            unoptimized
            width={"280px"}
            height={"80px"}
            objectFit={"cover"}
            alt="Episcopal Migration Ministries"
          ></Image>
        </Box>
        <Box>
          {" "}
          <Image
            src={"/partners/HIAS.png"}
            unoptimized
            width={"150px"}
            height={"80px"}
            objectFit={"cover"}
            alt="Episcopal Migration Ministries"
          ></Image>
        </Box>
      </Stack>
    </>
  );
};

export default OurPartners;
