import { Box, Divider } from '@mui/material';
import React from 'react';
import CopyRight from '../Footer/CopyRight';
import Footer from '../Footer/Footer';
import HeroSection from './Components/HeroSection';

export default function ContactUs() {
  return <Box>
      <HeroSection/>
      <Footer />
      <Divider />
      <CopyRight />
  </Box>;
}
