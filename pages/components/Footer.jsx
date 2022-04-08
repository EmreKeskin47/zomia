import React from "react";
import palette from "../../theme/palette";
import { Grid, Typography, Box, TextField, Button } from "@mui/material";
import Input from "@mui/material/Input";
import { Divider } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import SectionBreaker from "./SectionBreaker";
import TwitterIcon from "@mui/icons-material/Twitter";
import SendIcon from "@mui/icons-material/Send";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import styled from "@emotion/styled";

const Footer = () => {
  const StyledButton = styled(Button)(({ theme }) => ({
    color: "#000",
    "&:hover": {
      color: "white",
      backgroundColor: "transparent",
    },
  }));

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
              <Typography variant="subtitle1" component="div">
                Send Email
              </Typography>
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
              <Typography variant="subtitle1" component="div">
                Follow us on Twitter
              </Typography>
            </Grid>
          </Grid>
        </StyledButton>
      </Grid>
      <Grid item>
        <Divider
          orientation="vertical"
          variant="fullWidth"
          sx={{
            minHeight: "20px",
            borderRightWidth: 8,
            borderLeftWidth: 8,
            height: "100%",
            width: 10,
            background: palette.black.main,
            borderRadius: 6,
          }}
        ></Divider>
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
                  Stay Up To Date !
                </Typography>
              </Grid>
              <Grid item paddingLeft={"2rem"}>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <LocalPostOfficeIcon
                    sx={{ color: palette.black.main, mr: 1, my: 0.5 }}
                  />
                  <TextField
                    id="input-with-sx"
                    label="Email"
                    variant="standard"
                  />
                </Box>
              </Grid>
              <Grid item sx={{ padding: "1rem", border: "2px #000" }}>
                <StyledButton>
                  <Typography variant="h6" component="div">
                    Sign Up
                  </Typography>
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
