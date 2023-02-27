import React, { useContext } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { About, Publications, OurWork } from "../models/TabEnum";
import ActiveLink from "../pages/components/ActiveLink";
import singleContext from "../SingleContext";
import palette from "../theme/palette";

const NavModel = {
  OurWork: [
    OurWork.refugeesInTech,
    OurWork.programs,
    OurWork.publicHealth,
    OurWork.legacyOfWar,
  ],
  Publications: [
    Publications.reports,
    Publications.articles,
    Publications.ourMethodology,
  ],
  About: [About.ourHistory, About.team, About.supportUs],
};

export default function MenuDropdown(props) {
  const { tabOptions } = props;
  const context = useContext(singleContext);

  const listToDisplay = NavModel[tabOptions];
  const list = listToDisplay.map((item) => {
    console.log(item);
    return (
      <ListItem>
        <ActiveLink href={`/new/${item}`}>
          <ListItemText primary={item} />
        </ActiveLink>
      </ListItem>
    );
  });

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
      }}
      bgcolor={context.darkMode ? palette.black.main : "whitesmoke"}
    >
      <nav aria-label="main mailbox folders">
        <List>{list}</List>
      </nav>
    </Box>
  );
}
