import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";

export default function OurClients() {
    const forBelow500=useMediaQuery("(max-width:500px)")
  return (
    <Box style={{ padding: "5%" }}>
        <Typography variant="h5" style={{textAlign: "center",paddingBottom:"20px",fontWeight:700}}>Our Clients</Typography>
      <Grid container spacing={1}>
        <Grid
          item
          xs={6}
          sm={6}
          md={3}
          lg={3}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="https://i.ibb.co/Qfc5Bfv/comapny1.png" style={{width:forBelow500&&"80%",}}/>
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={3}
          lg={3}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="https://i.ibb.co/bRh09cP/company2.png"style={{width:forBelow500&&"80%"}} />
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={3}
          lg={3}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="https://i.ibb.co/CK8vb7z/company3.png"style={{width:forBelow500&&"80%"}} />
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={3}
          lg={3}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="https://i.ibb.co/D40qf8v/company4.png" style={{width:forBelow500&&"80%"}}/>
        </Grid>
      </Grid>
    </Box>
  );
}
