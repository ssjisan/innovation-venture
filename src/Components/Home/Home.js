import { Box, Button, Grid, Typography } from "@mui/material";
import Lottie from "lottie-web";
import React, { useEffect, useRef } from "react";

export default function Home() {
  const container = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoPlay: true,
      animationData: require("../../Assets/home.json"),
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
          md={6}
          lg={6}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box style={{ width: "500px" }}>
            <Box style={{}}>
              <Typography variant="h4" style={{ paddingBottom: "10px" }}>
                Experienced
                <span style={{ color: "#1090CB" }}> mobile and web</span>
              </Typography>
              <Typography variant="h4" style={{ paddingBottom: "10px" }}>
                applications and website
              </Typography>
              <Typography variant="h4" style={{ paddingBottom: "10px" }}>
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
        <Grid item md={6} lg={6}>
          <Box ref={container} style={{ width: "600px" }}></Box>
        </Grid>
      </Grid>
    </Box>
  );
}
