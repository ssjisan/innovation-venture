import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';

export default function Subscription() {
  return <Box style={{padding:"5%",backgroundColor:"#E8F4FA",height:300, display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}style={{display: 'flex', justifyContent: 'center',marginBottom:"50px"}}>
              <Typography variant="h5" style={{fontWeight:"bold",textAlign:"center"}}>Subscribe us for any kind of update and offer. <br/> Get in touch</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} style={{display: 'flex', justifyContent: 'center'}}>
              <TextField size="small" placeholder="Enter your email" style={{width:"25%",marginRight:"20px",borderRadius:"10px"}}/>
              <Button size="small" variant="contained" style={{backgroundColor:"#000"}}>SUBSCRIBE</Button>
          </Grid>
      </Grid>
  </Box>;
}
