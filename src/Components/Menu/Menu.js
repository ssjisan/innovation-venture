import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  Grid,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./Styles/MenuStyle";
export default function Menu() {
  const classes = useStyles();
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
            <Box style={{ padding: "2%" }}>
              <img
                src="https://i.ibb.co/6yH2wPR/innovation-venture-logo.png"
                alt="logo"
                style={{ width: "50px" }}
              />
            </Box>
          ) : (
            <Box>
              <img
                src="https://i.ibb.co/55J6mNr/innovation-venture.png"
                alt="logo"
                style={{ width: forBelow900 ? "200px" : "300px" }}
              />
            </Box>
          )}

          <Box>
            <Grid container spacing={5}>
              <Grid item>
                <Link to="/" className={classes.Link}>
                  <Typography variant="body1" className={classes.MenuTitle}>Home</Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/about-us" className={classes.Link}>
                  <Typography variant="body1" className={classes.MenuTitle}>About Us</Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link  to="/" className={classes.Link}>
                  <Typography variant="body1" className={classes.MenuTitle}>Services</Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link  to="/" className={classes.Link}>
                  <Typography variant="body1" className={classes.MenuTitle}>Blog</Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link  to="/" className={classes.Link}>
                  <Typography variant="body1" className={classes.MenuTitle}>Contact us</Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link  to="/" className={classes.Link}>
                  <Button variant="outlined" size="small">
                    Login
                  </Button>
                </Link>
              </Grid>
              <Grid item>
                <Link  to="/" className={classes.Link}>
                  <Button variant="contained" size="small">
                    Sign up
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
