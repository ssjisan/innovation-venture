import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Grid,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const forBelow900 = useMediaQuery("(max-width:900px)");
  const forBelow800 = useMediaQuery("(max-width:800px)");
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
          {forBelow800 ? (
            <Box style={{padding:"2%"}}>
              <img
                src="https://i.ibb.co/6yH2wPR/innovation-venture-logo.png"
                alt="logo"
                style={{ width: "50px" }}
              />
            </Box>
          ) : (
            <Box>
              <img
                src="https://i.ibb.co/VLz9zVT/innovation-venture.png"
                alt="logo"
                style={{ width: forBelow900 ? "200px" : "300px" }}
              />
            </Box>
          )}

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
