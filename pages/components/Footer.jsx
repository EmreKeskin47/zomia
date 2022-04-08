import React from "react";
import palette from "../../theme/palette";
import { Grid, Typography, Box, TextField } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Input from "@mui/material/Input";
import { Divider } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import SectionBreaker from "./SectionBreaker";

const Footer = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent={"space-evenly"}
      bgcolor={palette.orange.main}
      sx={{ padding: "1rem" }}
    >
      <Grid item>
        <Grid container direction="column" justifyContent={"space-around"}>
          <Grid item>
            <Grid container direction={"row"} justifyContent="space-evenly">
              <Grid item>
                <Typography variant="h6" color={palette.black.main}>
                  Stay Up To Date !
                </Typography>
              </Grid>
              <Grid item>
                <Input placeHolder="Email" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Second Column */}
      <Grid item>
        <Divider flexItem orientation="vertical" color={"black"}>
          <ArticleIcon />
        </Divider>
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
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
