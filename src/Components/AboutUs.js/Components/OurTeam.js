import React, { useEffect, useState } from "react";
import { Avatar, Box, Grid, IconButton, Typography } from "@mui/material";
import data from "../../../Assets/OurTeam.json";
import { FaLinkedinIn,FaFacebookF } from "react-icons/fa";
import useStyles from "./Styles/OurTeamStyles"
export default function OurTeam() {
  // eslint-disable-next-line
  const [team, setTeam] = useState(data);
  const [category, setCategory] = useState([]);
  const [active, setActive] = useState("Leadership");
  const classes = useStyles()
  const [filteredTeam, setFilteredTeam] = useState(
    team.filter((data) => data.category === "Leadership")
  );
  useEffect(() => {
    let newArray = [];
    team.map((data) => newArray.push(data.category));
    let uniqueArray = [...new Set(newArray)];
    setCategory(uniqueArray);
  }, []);
  const handleCategory = (dataFromButton) => {
    setActive(dataFromButton);
    let newArray = team.filter((data) => data.category === dataFromButton);
    setFilteredTeam(newArray);
  };
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
            style={{
              padding: "20px",
              cursor: "pointer",
              letterSpacing: 6,
              borderBottom:
                active === data ? "1px solid blue" : "1px solid transparent",
                fontWeight:active === data&&700
            }}
            onClick={() => handleCategory(data)}
          >
            {data}
          </Typography>
        ))}
      </Box>
      <Box style={{ marginTop: "50px" }} className={classes.MainBox}>
        <Grid container spacing={2} justifyContent="center">
          {filteredTeam.map((data) => (
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              lg={3}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
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
                style={{
                  width: "200px",
                  height: "200px",
                  marginBottom:"10px"
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
