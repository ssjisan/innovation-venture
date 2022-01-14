import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CopyRight from "../Footer/CopyRight";
import Footer from "../Footer/Footer";
import HeroSection from "./Components/HeroSection";
import OurClients from "./Components/OurClients";
import WhatWeDo from "./Components/WhatWeDo";

export default function Home() {
  
  return (
    <Box>
        <HeroSection/>
        <WhatWeDo/>
        <Divider/>
        <OurClients/>
        <Footer/>
        <Divider/>
        <CopyRight/>
    </Box>
  );
}
