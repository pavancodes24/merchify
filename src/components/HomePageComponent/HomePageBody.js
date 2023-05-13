import { Grid } from "@mui/material";
import React from "react";
import HomePageComments from "./HomePageComments";

const HomePageBody = () => {
  return (
    <div>
      <Grid container direction={"column"} sx={{ padding: "4% 6% 3% 3%" }}>
        <Grid item>The Daily MS Excel Quiz </Grid>
        <Grid item>
          <HomePageComments />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePageBody;
