import { Grid } from "@mui/material";
import React from "react";
import CommentCardsLeft from "./CommentCardsLeft";
import HomePageRight from "./HomePageRight";

const HomePageComments = () => {
  return (
    <Grid container justifyContent={"space-between"}>
      <Grid item>
        <Grid container direction="column" alignItems={"stretch"} spacing={1}>
          <Grid item>
            <CommentCardsLeft name={"Leave a Comment"} value={1} />
          </Grid>
          <Grid item>
            <CommentCardsLeft name={"Save Quiz"} value={2} />
          </Grid>
          <Grid item>
            <CommentCardsLeft name={"Challenge a Friend"} value={3} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item alignItems={"stretch"}>
        <HomePageRight />
      </Grid>
    </Grid>
  );
};

export default HomePageComments;
