import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import RoomIcon from "@mui/icons-material/Room";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineMedium } from "react-icons/ai";

export default function Footer() {
  return (
    <Box style={{ padding: "5%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <img
            src="https://i.ibb.co/55J6mNr/innovation-venture.png"
            alt="logo"
            style={{ width: "300px", paddingBottom: "20px" }}
          />
          <Typography variant="h6">
            With well written codes, we build amazing apps for all platforms,
            mobile and web apps in general.
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4} md={2} lg={2}>
          <Typography
            variant="h6"
            style={{ paddingBottom: "5px", fontWeight: "bold" }}
          >
            Menu
          </Typography>
          <Typography variant="body1" style={{ paddingBottom: "5px" }}>
            Home
          </Typography>
          <Typography variant="body1" style={{ paddingBottom: "5px" }}>
            About Us
          </Typography>
          <Typography variant="body1" style={{ paddingBottom: "5px" }}>
            Services
          </Typography>
          <Typography variant="body1" style={{ paddingBottom: "5px" }}>
            Blog
          </Typography>
          <Typography variant="body1" style={{ paddingBottom: "5px" }}>
            Careers
          </Typography>
        </Grid>
        <Grid item  xs={6} sm={4} md={3} lg={3}>
          <Typography
            variant="h6"
            style={{ paddingBottom: "5px", fontWeight: "bold" }}
          >
            Contact Us
          </Typography>
          <Typography variant="body1">
            <RoomIcon /> Banani, Dhaka, Bangladesh
          </Typography>
          <Typography variant="body1">
            <EmailIcon /> info@innovationventure.com
          </Typography>
          <Typography variant="body1">
            <PhoneIcon /> +88 01786 90 40 78
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3} >
          <Typography
            variant="h6"
            style={{ paddingBottom: "5px", fontWeight: "bold" }}
          >
            Find us on
          </Typography>
          <Box style={{ display: "flex" }}>
            <Box
              style={{
                backgroundColor: "#fff",
                boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.15)",
                width: "30px",
                height: "30px",
                padding: "2%",
                borderRadius: "50%",
                textAlign: "center",
                marginRight: "10px",
              }}
            >
              <FaFacebookF size="30px" />{" "}
            </Box>
            <Box
              style={{
                backgroundColor: "#fff",
                boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.15)",
                width: "30px",
                height: "30px",
                padding: "2%",
                borderRadius: "50%",
                textAlign: "center",
                marginRight: "10px",
              }}
            >
              <BsYoutube size="30px" />{" "}
            </Box>
            <Box
              style={{
                backgroundColor: "#fff",
                boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.15)",
                width: "30px",
                height: "30px",
                padding: "2%",
                borderRadius: "50%",
                textAlign: "center",
                marginRight: "10px",
              }}
            >
              <FaLinkedinIn size="30px" />{" "}
            </Box>
            <Box
              style={{
                backgroundColor: "#fff",
                boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.15)",
                width: "30px",
                height: "30px",
                padding: "2%",
                borderRadius: "50%",
                textAlign: "center",
                marginRight: "10px",
              }}
            >
              <AiOutlineMedium size="30px" />{" "}
            </Box>
          </Box>
        </Grid>
      </Grid>
      
    </Box>
  );
}
