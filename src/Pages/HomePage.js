import React from "react";
import Grid from "@mui/material/Grid";
import style from "../css/HomePage.module.css";
import HomePageBody from "../components/HomePageComponent/HomePageBody";
import backgroundImg from "../Assets/udemybackgroundimage.jpg";
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
      ></Grid>
      <Grid item>
        <HomePageBody />
      </Grid>
      <Grid item sx={{ padding: "0% 8% 0% 4%" }}>
        <div style={{ fontSize: "10px", fontWeight: 500 }}>
          The Microsoft Excel Proficiency Test is designed to evaluate and
          Individual's knwoledge and skills in using Microsoft Excel. It Covers
          a wide range of topics...
        </div>
      </Grid>
      <Grid item>end</Grid>
    </Grid>
  );
};

export default HomePage;
