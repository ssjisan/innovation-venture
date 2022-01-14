import { Box, Grid, Typography, Container } from "@mui/material";
import React from "react";
export default function WhatWeDo() {
  return (
    <Box
      style={{
        padding: "1% 5% 5% 5%",
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "10px",
                backgroundColor: "#EFEAFF",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://i.ibb.co/122WWwk/seo.png"
                style={{ width: "40px" }}
              />
            </Box>
            <Typography
              variant="body1"
              style={{ fontWeight: "bold", padding: "2%" }}
            >
              Web Development
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            <Box
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "10px",
                backgroundColor: "#FFE5DA",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://i.ibb.co/vxXw0HY/coding.png"
                style={{ width: "40px" }}
              />
            </Box>
            <Typography
              variant="body1"
              style={{ fontWeight: "bold", padding: "2%" }}
            >
              App Development
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            <Box
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "10px",
                backgroundColor: "#DAE6FF",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://i.ibb.co/23992Ck/social-media.png"
                style={{ width: "40px" }}
              />
            </Box>
            <Typography
              variant="body1"
              style={{ fontWeight: "bold", padding: "2%" }}
            >
              Digital Marketing
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            <Box
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "10px",
                backgroundColor: "#ECFFDA",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://i.ibb.co/z8QjKQT/graphic-design.png"
                style={{ width: "40px" }}
              />
            </Box>
            <Typography
              variant="body1"
              style={{ fontWeight: "bold", padding: "2%" }}
            >
              Graphics Design
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
