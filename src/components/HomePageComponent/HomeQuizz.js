import { Grid, Typography } from "@mui/material";
import React from "react";
import CommentCardsLeft from "./CommentCardsLeft";

const HomeQuizz = () => {
  return (
    <div>
      <Grid container direction="column">
        <Grid item>
          <Typography>This Quiz Includes</Typography>
        </Grid>
        <Grid item>
          <CommentCardsLeft name={"50% Passing Percentage"} value={4} />
        </Grid>
        <Grid item>
          <CommentCardsLeft name={"5 Questions"} value={5} />
        </Grid>
        <Grid item>
          <CommentCardsLeft name={"10 Mins"} value={6} />
        </Grid>
        <Grid item>
          <CommentCardsLeft name={"1 Attempt Daily"} value={7} />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeQuizz;
