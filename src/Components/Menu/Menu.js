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
import { Link } from "react-router-dom";

export default function Menu() {
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
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          <Box>Logo</Box>
          <Box>
            <Grid container spacing={2}>
              <Grid item>
                <Link to="/">
                  <Typography variant="h6">Home</Typography>
                </Link>
              </Grid>
              <Grid item>
              <Link to="/about-us">
                  <Typography variant="h6">About Us</Typography>
                </Link>
              </Grid>
              <Grid item>
                <Typography variant="h6">Services</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">Blog</Typography>
              </Grid>
              <Grid item>
                <Button variant="contained">Contact us</Button>
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
