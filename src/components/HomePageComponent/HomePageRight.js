import { Grid, Rating, Typography } from "@mui/material";
import React from "react";
import ImagesGroup from "./ImagesGroup";

const HomePageRight = () => {
  return (
    <div>
      <Grid
        container
        direction={"column"}
        alignItems={"center"}
        justifyContent={"space-around"}
        style={{ height: "13vh" }}
      >
        <Grid item>
          <Typography variant="caption">
            <ImagesGroup />
          </Typography>
        </Grid>
        <Grid item>
          <div style={{ fontSize: "8px", fontWeight: 600 }}>
            people enrolled
          </div>
        </Grid>
        <Grid item>
          <Rating style={{ fontSize: "13px" }} value={"3"} readOnly />
        </Grid>
        <Grid item>
          <div style={{ fontSize: "9px" }}>3 Ratings (5.0)</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePageRight;
