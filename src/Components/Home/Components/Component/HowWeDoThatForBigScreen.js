import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";

export default function HowWeDoThatForBigScreen({process}) {
  return (
    <Box>
      <Grid container spacing={2}>
        {process.map((data) => (
          <Grid
            key={data.id}
            item
            md={4}
            lg={4}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop:
                (data.id === 2 && "150px") ||
                (data.id === 4 && "-150px") ||
                (data.id === 6 && "-150px"),
            }}
          >
            <Card
              style={{
                maxWidth:"350px",
                height: "390px",
                borderRadius: "10px",
                backgroundColor: "#faf5f5",
              }}
            >
              <Box
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  backgroundColor:
                    (data.id === 1 && "#dfe625") ||
                    (data.id === 2 && "#92CA40") ||
                    (data.id === 3 && "#48BC93") ||
                    (data.id === 4 && "#3BC2CD") ||
                    (data.id === 5 && "#3B99CB") ||
                    (data.id === 6 && "#406FBC"),
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Typography
                  variant="h2"
                  style={{ padding: "5%", fontWeight: "bold", color: "white" }}
                >
                  0{data.id}
                </Typography>
              </Box>
              <Box>
                <Grid
                  container
                  style={{ padding: "5%" }}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid
                    item
                    lg={12}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={data.imgUrl} width="25%" />
                  </Grid>
                  <Grid
                    item
                    lg={12}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h6"
                      style={{
                        marginTop: "10px",
                        color:
                          (data.id === 1 && "#dfe625") ||
                          (data.id === 2 && "#92CA40") ||
                          (data.id === 3 && "#48BC93") ||
                          (data.id === 4 && "#3BC2CD") ||
                          (data.id === 5 && "#3B99CB") ||
                          (data.id === 6 && "#406FBC"),
                        fontWeight: "bold",
                      }}
                    >
                      {data.title}
                    </Typography>{" "}
                    <Typography
                      variant={"body1"}
                      style={{
                        marginTop: "10px",
                        textAlign: "justify",
                        height: "170px",
                        fontStyle: "italic",
                      }}
                    >
                      {data.description}
                    </Typography>{" "}
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
