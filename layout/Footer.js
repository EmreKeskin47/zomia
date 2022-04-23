import React, { useState } from "react";
import palette from "../theme/palette";
import { Grid, Typography, Box, TextField, Button } from "@mui/material";
import { Divider } from "@mui/material";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import TwitterIcon from "@mui/icons-material/Twitter";
import SendIcon from "@mui/icons-material/Send";
import styled from "@emotion/styled";
import { isMobile } from "react-device-detect";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import { collection, getDocs, getFirestore, addDoc } from "firebase/firestore";
import { db } from "../store/store";

const Footer = () => {
  const [email, setEmail] = useState("");

  const StyledButton = styled(Button)(({ theme }) => ({
    color: "#000",
    "&:hover": {
      color: "white",
      backgroundColor: "transparent",
    },
  }));

  const StyledTypography = styled(Typography)(({ theme }) => ({
    color: "#000",
    "&:hover": {
      color: "white",
      backgroundColor: "transparent",
    },
  }));

  const saveEmail = async () => {
    console.log("saveEmail has been clicked");
    console.log(email);
    console.log("save email inside the async part");
    try {
      const docRef = await addDoc(collection(db, "emails"), {
        email: email,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent={"space-evenly"}
      bgcolor={palette.orange.main}
      sx={{ padding: "1rem" }}
    >
      <Grid item sx={{ padding: "1rem" }}>
        <StyledButton>
          <Grid container direction={"row"}>
            <Grid item sx={{ paddingRight: "0.5rem" }}>
              <SendIcon />
            </Grid>
            <Grid item>
              <StyledTypography variant="subtitle1" component="div">
                Send Email
              </StyledTypography>
            </Grid>
          </Grid>
        </StyledButton>
      </Grid>
      <Grid item sx={{ padding: "1rem" }}>
        <StyledButton>
          <Grid container direction={"row"}>
            <Grid item sx={{ paddingRight: "0.5rem" }}>
              <TwitterIcon />
            </Grid>
            <Grid item>
              <StyledTypography variant="subtitle1" component="div">
                Follow us on Twitter
              </StyledTypography>
            </Grid>
          </Grid>
        </StyledButton>
      </Grid>
      <Grid item sx={{ padding: "1rem" }}>
        <StyledButton>
          <Grid container direction={"row"} sx={{ paddingLeft: isMobile && 5 }}>
            <Grid item sx={{ paddingRight: "0.5rem" }}>
              <ShuffleIcon />
            </Grid>
            <Grid item>
              <StyledTypography variant="subtitle1" component="div">
                Read latest
              </StyledTypography>
            </Grid>
          </Grid>
        </StyledButton>
      </Grid>
      <Grid item>
        {!isMobile && (
          <Divider
            orientation="vertical"
            variant="fullWidth"
            sx={{
              minHeight: "20px",
              height: "100%",
              width: 10,
              background: palette.black.main,
              borderRadius: 6,
            }}
          ></Divider>
        )}
      </Grid>
      {/* Third Column */}
      <Grid item>
        <Grid container direction="column" justifyContent={"space-around"}>
          <Grid item>
            <Grid container direction={"row"} justifyContent="space-evenly">
              <Grid item>
                <Typography
                  variant="h5"
                  color={palette.black.main}
                  sx={{ padding: "1rem" }}
                >
                  Subscribe to our newsletter
                </Typography>
              </Grid>
              <Grid item paddingLeft={"1rem"}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <LocalPostOfficeIcon
                    sx={{
                      color: palette.black.main,
                      mr: 1,
                      my: 0.5,
                    }}
                  />
                  <TextField
                    id="input-with-sx"
                    label="Email"
                    variant="standard"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Box>
              </Grid>
              <Grid item sx={{ padding: "1rem", border: "2px #000" }}>
                <StyledButton>
                  <StyledTypography
                    variant="h6"
                    component="div"
                    onClick={saveEmail}
                  >
                    Sign Up
                  </StyledTypography>
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
