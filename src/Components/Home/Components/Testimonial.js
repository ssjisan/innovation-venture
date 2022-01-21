import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../../../Assets/testimonial.json";
import RedoIcon from "@mui/icons-material/Redo";
import UndoIcon from "@mui/icons-material/Undo";
export default function Testimonial() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [testimonial, setTestimonial] = useState(data);
  const sliderRef = useRef(null);
  const forBelow600 = useMediaQuery("(max-width:600px)");
  return (
    <Box style={{ padding: "5%" }}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid
          item
          xs={12}
          sm={4}
          md={5}
          lg={5}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            style={{ fontWeight: "bold", paddingBottom: "20px" }}
          >
            What they say about us?
          </Typography>
         {!forBelow600 && <Box>
            <IconButton
              onClick={() => sliderRef.current.slickPrev()}
              style={{ boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.15)" }}
            >
              <UndoIcon />
            </IconButton>{" "}
            &nbsp;
            <IconButton
              onClick={() => sliderRef.current.slickNext()}
              style={{ boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.15)" }}
            >
              <RedoIcon />
            </IconButton>
          </Box>}
        </Grid>
        <Grid item xs={12} sm={8} md={7} lg={7}>
          <Slider {...settings} ref={sliderRef} style={{maxWidth:"98.5%"}}>
            {testimonial.map((data, i) => (
              <Box key={i}>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "",
                  }}
                >
                  {" "}
                  <Avatar
                    imgProps={{ style: { borderRadius: "50%" } }}
                    src={data.imageUrl}
                    style={{
                      width: "100px",
                      height: "100px",
                      border: "1px solid lightgray",
                      padding: "7px",
                    }}
                  />
                  <Typography
                    variant="h6"
                    style={{ padding: "2%", color: "#515151",textAlign:"justify"}}
                  >
                    {data.text}
                  </Typography>
                  <Typography variant="h6" style={{ color: "#515151"}}>
                    <span style={{ color: "#1090CB", fontWeight: "bold" }}>
                      {data.name}
                    </span>
                    , {data.title}
                  </Typography>
                  <Typography variant="h6">
                    {data.companyName}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Slider>
        </Grid>
        {forBelow600 && <Grid item xs={12} style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}><Box style={{paddingTop:"20px"}}>
            <IconButton
              onClick={() => sliderRef.current.slickPrev()}
              style={{ boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.15)" }}
            >
              <UndoIcon />
            </IconButton>{" "}
            &nbsp;
            <IconButton
              onClick={() => sliderRef.current.slickNext()}
              style={{ boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.15)" }}
            >
              <RedoIcon />
            </IconButton>
          </Box></Grid>}
      </Grid>
    </Box>
  );
}
