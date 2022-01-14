import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

export default function MenuForMobileScreen({ openDrawerHandler }) {
  return (
    <Box style={{ paddingBottom: "70px" }}>
      <AppBar
        position="fixed"
        style={{ backgroundColor: "#fff", color: "#444" }}
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box style={{padding:"2%"}}><img
              src="https://i.ibb.co/6yH2wPR/innovation-venture-logo.png"
              alt="logo"
              style={{ width: "50px" }}
            /></Box>
          <Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={openDrawerHandler}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
