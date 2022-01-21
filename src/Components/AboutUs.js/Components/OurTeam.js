import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import data from "../../../Assets/OurTeam.json";
export default function OurTeam() {
  const [team, setTeam] = useState(data);
  const [category, setCategory] = useState([]);
  const [filteredTeam, setFilteredTeam] = useState([]);
  useEffect(() => {
    let newArray = [];
    team.map((data) => newArray.push(data.category));
    let uniqueArray = [...new Set(newArray)];
    setCategory(uniqueArray);
  }, []);
  const handleCategory = (dataFromButton) => {
    let newArray = team.filter((data) => data.category === dataFromButton);
    setFilteredTeam(newArray);
  };
  console.log(filteredTeam);
  return (
    <Box style={{ padding: "5%" }}>
      <Typography
        variant="h5"
        style={{ textAlign: "center", paddingBottom: "20px", fontWeight: 700 }}
      >
        Our Team
      </Typography>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        {category.map((data) => (
          <Typography
            style={{ padding: "20px", cursor: "pointer", letterSpacing: 6 }}
            onClick={() => handleCategory(data)}
          >
            {data}
          </Typography>
        ))}
      </Box>
      <Box style={{ marginTop: "50px" }}>
        <Grid container spacing={2} justifyContent="center">
          {filteredTeam.map((data) => (
            <Grid
              item
              lg={3}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body1"
                style={{ letterSpacing: 3, marginBottom: "10px" }}
              >
                {data.name}
              </Typography>
              <Typography
                variant="body2"
                style={{ fontStyle: "italic", marginBottom: "10px" }}
              >
                {data.position}
              </Typography>
              <Avatar
                src={data.imgUrl}
                style={{ width: "200px", height: "200px",marginBottom:"50px"}}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
