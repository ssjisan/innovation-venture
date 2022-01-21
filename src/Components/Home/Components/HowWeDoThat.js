import { Box, Card, Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import data from "../../../Assets/process.json";
import HowWeDoThatForBigScreen from "./Component/HowWeDoThatForBigScreen";
import HowWeDoThatForMediumScreen from "./Component/HowWeDoThatForMediumScreen";
import HowWeDoThatForSmallScreen from "./Component/HowWeDoThatForSmallScreen";
export default function HowWeDoThat() {
  const [process, setProcess] = useState(data);
  const forBelow900 = useMediaQuery("(max-width:900px)");
  const forBelow600 = useMediaQuery("(max-width:600px)");
  return (
    <Box style={{padding:"5%"}}>
      <Typography
        variant="h5"
        style={{ textAlign: "center", paddingBottom: "20px", fontWeight: 700 }}
      >
        How we do that
      </Typography>
      {(forBelow600 && <HowWeDoThatForSmallScreen process={process} />) ||
        (forBelow900 && <HowWeDoThatForMediumScreen process={process} />) || (
          <HowWeDoThatForBigScreen process={process} />
        )}
    </Box>
  );
}
