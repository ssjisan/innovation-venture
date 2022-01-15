import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import Lottie from "lottie-web";
import React, { useEffect, useRef } from "react";
export default function HeroSection() {
  const container = useRef(null);
  const forBelow600 = useMediaQuery("(max-width:600px)");
  const forBelow900 = useMediaQuery("(max-width:900px)");
  const forBelow1000 = useMediaQuery("(max-width:1000px)");
  const forBelow1050 = useMediaQuery("(max-width:1050px)");
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoPlay: true,
      animationData: require("../../../Assets/home.json"),
    });
  }, []);
  return (
    <Box style={{ backgroundColor: "#E7F4FA" }}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        alignContent="center"
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            style={{
              width:
                (forBelow600 && "90%") ||
                (forBelow900 && "500px") ||
                (forBelow1050 && "95%") ||
                "500px",
            }}
          >
            <Box style={{}}>
              <Typography
                variant={forBelow1000 ? "h5" : "h4"}
                style={{ fontWeight: "bold", paddingBottom: "10px" }}
              >
                Experienced
                <span style={{ color: "#1090CB" }}> mobile and web</span>
              </Typography>
              <Typography
                variant={forBelow1000 ? "h5" : "h4"}
                style={{ fontWeight: "bold", paddingBottom: "10px" }}
              >
                applications and website
              </Typography>
              <Typography
                variant={forBelow1000 ? "h5" : "h4"}
                style={{ fontWeight: "bold", paddingBottom: "10px" }}
              >
                builders measuring.
              </Typography>
            </Box>
            <Box style={{ paddingBottom: "30px" }}>
              <Typography variant="body1">
                Innovation Venture is a team of experienced mobile and web
                applications and website builders measuring dozens of completed
                projects. We build and develop mobile applications for several
                top platforms, including Android & IOS.{" "}
              </Typography>
            </Box>
            <Box>
              <Button variant="contained">Contact us</Button> &nbsp;
              <Button variant="outlined">View More</Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box ref={container} style={{ width: "100%" }}></Box>
        </Grid>
      </Grid>
    </Box>
  );
}
