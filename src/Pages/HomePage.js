import React from "react";
import Grid from "@mui/material/Grid";
import style from "../css/HomePage.module.css";
import HomePageBody from "../components/HomePageComponent/HomePageBody";
const HomePage = () => {
  return (
    <Grid container sx={{ height: "100vh" }} direction={"column"}>
      <Grid item sx={{height:'30vh',background:'red'}}>Image</Grid>
      <Grid item>
        <HomePageBody />
      </Grid>
      <Grid item>end</Grid>
    </Grid>
  );
};

export default HomePage;
