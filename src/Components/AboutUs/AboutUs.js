import { Box,Divider } from "@mui/material";
import React from "react";
import HeroSection from "./Components/HeroSection";
import OurTeam from "./Components/OurTeam";
import Footer from "../Footer/Footer"
import CopyRight from "../Footer/CopyRight"
import Subscription from "./Components/Subscription";

export default function AboutUs() {
  return (
    <Box>
      <HeroSection />
      <OurTeam />
      <Subscription/>
      <Footer />
      <Divider />
      <CopyRight />
    </Box>
  );
}
