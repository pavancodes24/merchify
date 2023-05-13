import React from "react";
import Grid from "@mui/material/Grid";
import style from "../css/HomePage.module.css";
import HomePageBody from "../components/HomePageComponent/HomePageBody";
import backgroundImg from "../Assets/udemybackgroundimage.jpg";
import { Typography } from "@mui/material";
import HomeQuizz from "../components/HomePageComponent/HomeQuizz";
const HomePage = () => {
  return (
    <Grid container sx={{ height: "100vh" }} direction={"column"}>
      <Grid
        item
        sx={{
          height: "40vh",
          background: `url(${backgroundImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></Grid>
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
    </Grid>
  );
};

export default HomePage;
