import { Grid } from "@mui/material";
import React from "react";
import CommentCardsLeft from "./CommentCardsLeft";
import HomePageRight from "./HomePageRight";

const HomePageComments = () => {
  return (
    <Grid container justifyContent={"space-between"}>
      <Grid item>
        <Grid
          container
          direction="column"
          justifyContent={"space-around"}
          style={{ height: "100px" }}
        >
          <Grid item>
            <CommentCardsLeft name={"Leave a Comment"} />
          </Grid>
          <Grid item>
            <CommentCardsLeft name={"Save Quiz"} />
          </Grid>
          <Grid item>
            <CommentCardsLeft name={"Challenge a Friend"} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ height: "100px" }}>
        <HomePageRight />
      </Grid>
    </Grid>
  );
};

export default HomePageComments;
