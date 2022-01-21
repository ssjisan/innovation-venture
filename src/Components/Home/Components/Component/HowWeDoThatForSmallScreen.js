import { Box, Card, Grid, Typography } from "@mui/material";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function HowWeDoThatForSmallScreen({ process }) {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const sliderRef = useRef(null);
  return (
    <Box>
      <Slider {...settings} ref={sliderRef} style={{maxWidth:"98%"}}>
        {process.map((data) => (
          <Box>
            <Box style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
            <Card
              style={{
                // maxWidth:"350px",
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
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
