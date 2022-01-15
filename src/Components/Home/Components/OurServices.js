import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import data from "../../../Assets/Services.json";
export default function OurServices() {
  const forBelow500 = useMediaQuery("(max-width:500px)");
  const [services, setServices] = useState(data);
  return (
    <Box style={{ padding: "5%" }}>
      <Typography
        variant="h5"
        style={{ textAlign: "center", paddingBottom: "20px", fontWeight: 700 }}
      >
        Services we provide..
      </Typography>
      <Grid container spacing={1} justifyContent="center" alignItems="center">
        {services.slice(0,3).map((data) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Card style={{maxWidth:"100%",padding:"2%",maxWidth:"350px"}}>
              <img src={data.imgUrl} alt={data.title} style={{width:"100px"}}/>
              <CardContent>
                <Typography
                  variant="h6"
                  style={{fontWeight:"bold"}}
                >
                  {data.title}
                </Typography>
                <Typography variant="body2">
                  {data.shortDescription}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  style={{ borderRadius: "50px"}}
                >
                  See More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box style={{display:"flex",justifyContent: "center",paddingTop:"40px"}}><Button size="big"
                  variant="contained"
                  style={{ borderRadius: "50px",background:"#1090CB"}}>See All</Button></Box>
    </Box>
  );
}
