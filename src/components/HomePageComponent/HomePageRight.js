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
        justifyContent={"space-between"}
      >
        <Grid item>
          <Typography variant="caption">
            <ImagesGroup />
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="caption"
            sx={{ fontSize: "8px", fontWeight: 600 }}
          >
            people enrolled
          </Typography>
        </Grid>
        <Grid item>
          <Rating style={{ fontSize: "13px" }} value={"3"} readOnly />
        </Grid>
        <Grid item>
          <Typography variant="caption" style={{ fontSize: "9px" }}>
            3 Ratings (5.0)
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePageRight;
