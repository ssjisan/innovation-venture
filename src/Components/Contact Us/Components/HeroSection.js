import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

export default function HeroSection() {
  return <Box>
      <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} sm ={12} md={6} lg={4} style={{display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
              <Typography variant="h4" style={{fontWeight:"bold"}}>Let's Collaborate</Typography>
              <Typography variant="h6" style={{marginTop:"20px"}}>We are wating for you.</Typography>
          </Grid>
          <Grid item xs={12} sm ={12} md={6} lg={8} style={{display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
              <img src="https://i.ibb.co/tJykjKq/contact-us.png" alt="map" style={{width:"100%"}}/>
          </Grid>
      </Grid>
  </Box>
  ;
}
