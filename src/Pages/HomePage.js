import React from "react";
import Grid from "@mui/material/Grid";
import style from "../css/HomePage.module.css";
import HomePageBody from "../components/HomePageComponent/HomePageBody";
import backgroundImg from "../Assets/udemybackgroundimage.jpg";
import { Button, Divider, Typography } from "@mui/material";
import HomeQuizz from "../components/HomePageComponent/HomeQuizz";
const HomePage = () => {
  return (
    <Grid container sx={{ height: "100vh" }} direction={"column"}>
      <Grid
        item
        sx={{
          height: "30vh",
          background: `url(${backgroundImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <Grid
          container
          alignItems={"center"}
          sx={{ height: "35vh", padding: "3%" }}
        >
          <Grid item>
            <Typography
              variant="h6"
              style={{ fontWeight: 900, width: "200px" }}
            >
              The Daily Ms Excel Quiz
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <HomePageBody />
      </Grid>
      <Grid item sx={{ padding: "2% 8% 0% 4%" }}>
        <Typography style={{ fontSize: "13px", fontWeight: 500 }}>
          The Microsoft Excel Proficiency Test is designed to evaluate and
          Individual's knwoledge and skills in using Microsoft Excel. It Covers
          a wide range of topics...
        </Typography>
      </Grid>

      <Grid item sx={{ padding: "2% 8% 0% 4%" }}>
        <HomeQuizz />
      </Grid>
      <br />
      <Divider />
      <Grid
        item
        style={{
          position: "fixed",
          bottom: 10,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Button
          variant="contained"
          style={{
            textTransform: "unset",
            borderRadius: "20px",
            backgroundColor: "red",
          }}
        >
          Take quiz
        </Button>
      </Grid>
    </Grid>
  );
};

export default HomePage;
