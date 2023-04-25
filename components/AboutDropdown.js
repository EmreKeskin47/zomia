import { React, useContext, useState, useRef, useEffect } from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import { Typography } from "@mui/material";
import singleContext from "../SingleContext";
import palette from "../theme/palette";
import styled from "@emotion/styled";
import { withStyles } from "@material-ui/core/styles";

export default function AboutDropdown() {
  const context = useContext(singleContext);

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div style={{ backgroundColor: "transparent !important" }}>
      <Stack direction="row" spacing={2} sx={{ backgroundColor: "black" }}>
        <div
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <MenuItem onClick={handleClose} sx={{ backgroundColor: "black" }}>
            <Typography variant="h6">
              <span
                style={{
                  color: context.darkMode ? "#fff" : palette.black.main,
                }}
              >
                About
              </span>
            </Typography>
          </MenuItem>
        </div>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}>
                      <Link href="/Mission" passhref="true">
                        <Typography variant="h6">
                          <span
                            style={{
                              color: context.darkMode
                                ? "#fff"
                                : palette.black.main,
                            }}
                          >

                          </span>
                        </Typography>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MenuItem onClick={handleClose}>
                        <Link href="/bio" passhref="true">
                          <Typography variant="h6">
                            <span
                              style={{
                                color: context.darkMode
                                  ? "#fff"
                                  : palette.black.main,
                              }}
                            >
                              Team
                            </span>
                          </Typography>
                        </Link>
                      </MenuItem>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Stack>
    </div>
  );
}
