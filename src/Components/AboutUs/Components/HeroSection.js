import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function HeroSection() {
  return (
    <Box style={{ padding: "5%" }}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={12} lg={6}>
          <Box>
            <Grid container alignItems="flex-end">
              <Grid
                item
                xs={6}
                sm={6}
                lg={6}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  src="https://i.ibb.co/3YNdnyN/aboutUs1.jpg"
                  style={{ width: "80%", borderRadius: "10px" }}
                />
              </Grid>
              <Grid
                item
                xs={6}
                sm={6}
                lg={6}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  src="https://i.ibb.co/Yhq3KtG/aboutUs2.jpg"
                  style={{ width: "80%", borderRadius: "10px" }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} lg={6}>
          <Typography variant="h3">Who we are</Typography>
          <Typography
            variant="body1"
            style={{ maxWidth: 500, marginTop: "20px" }}
          >
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "24px",
                color: "#1090CB",
              }}
            >
              Innovation Venture
            </span>{" "}
            is a complete tech service provider company. We offer all kinds of
            websites, mobile applications, graphic design materials and digital
            branding of any product services. Our main goal is to be faithful to
            the client by meeting all their requirements
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
