import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import ChatIcon from "@mui/icons-material/Chat";
const CommentCardsLeft = ({ name }) => {
  return (
    <Grid container direction={"row"} alignItems={"center"} gap={"5px"}>
      <Grid item>ico</Grid>
      <Grid item>
        <Typography variant="caption">{name}</Typography>
      </Grid>
    </Grid>
  );
};

export default CommentCardsLeft;
