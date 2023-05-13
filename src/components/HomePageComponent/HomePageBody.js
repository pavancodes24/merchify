import { Grid } from "@mui/material";
import React from "react";
import HomePageComments from "./HomePageComments";

const HomePageBody = () => {
  return (
    <div>
      <Grid
        container
        direction={"column"}
        sx={{ padding: "4% 8% 0% 4%" }}
        spacing={2}
      >
        <Grid item>
          <div style={{ fontWeight: 900, fontSize: "22px" }}>
            The Daily MS Excel Quiz
          </div>{" "}
        </Grid>
        <Grid item>
          <HomePageComments />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePageBody;
