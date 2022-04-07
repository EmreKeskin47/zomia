import React from "react";
import palette from "../../theme/palette";
import { Grid, Typography, Box, TextField } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Input from "@mui/material/Input";
import { Divider } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";

const Footer = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent={"space-evenly"}
      bgcolor={palette.orange.main}
    >
      <Grid item>
        <Grid container direction="column" justifyContent={"space-around"}>
          <Grid item>
            <Grid container direction={"row"} justifyContent="space-evenly">
              <Grid item sx={{ padding: "3rem" }}>
                <Typography variant="h6" color={palette.black.main}>
                  Stay Up To Date !
                </Typography>
              </Grid>
              <Grid item sx={{ padding: "3rem" }}>
                <Input placeHolder="Email" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Second Column */}
      <Grid item>
        <Divider
          flexItem
          sx={{ paddingBottom: "5rem", paddingTop: "5rem" }}
          color={palette.black.main}
        >
          <ArticleIcon />
        </Divider>
      </Grid>
      {/* Third Column */}
      <Grid item>
        <Grid container direction="column" justifyContent={"space-around"}>
          <Grid item>
            <Grid container direction={"row"} justifyContent="space-evenly">
              <Grid item sx={{ padding: "3rem" }}>
                <Typography variant="h6" color={palette.black.main}>
                  Stay Up To Date !
                </Typography>
              </Grid>
              <Grid item sx={{ padding: "3rem" }}>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <LocalPostOfficeIcon
                    sx={{ color: palette.black.main, mr: 1, my: 0.5 }}
                  />
                  <TextField
                    id="input-with-sx"
                    label="With sx"
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

// MuiInput-root:before {
//     border-bottom-color: #000;
// }

// MuiInputLabel-root {
//     color: rgba(1, 1, 1, 1);

// MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
//     color: {palette.black.main};
// }
