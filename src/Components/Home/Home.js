import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CopyRight from "../Footer/CopyRight";
import Footer from "../Footer/Footer";
import HeroSection from "./Components/HeroSection";
import OurClients from "./Components/OurClients";
import OurServices from "./Components/OurServices";
import Testimonial from "./Components/Testimonial";
import WhatWeDo from "./Components/WhatWeDo";

export default function Home() {
  
  return (
    <Box>
        <HeroSection/>
        <WhatWeDo/>
        <Divider/>
        <OurServices/>
        <OurClients/>
        <Testimonial/>
        <Footer/>
        <Divider/>
        <CopyRight/>
    </Box>
  );
}
