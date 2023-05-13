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
          justifyContent={"space-between"}
          style={{ height: "15vh" }}
        >
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
      <Grid item>
        <HomePageRight />
      </Grid>
    </Grid>
  );
};

export default HomePageComments;
