import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import ChatIcon from "@mui/icons-material/Chat";
const CommentCardsLeft = ({ name, value }) => {
  return (
    <Grid container direction={"row"} alignItems={"center"} gap={"5px"}>
      <Grid item>
        <div style={{ fontSize: "10px" }}>
          <Avatar
            src={
              value == "1"
                ? "/chat.png"
                : value == "2"
                ? "/winsave.png"
                : value == "3"
                ? "/courage.png"
                : ""
            }
            sx={{ width: "15px", height: "15px" }}
          />
        </div>
      </Grid>
      <Grid item>
        <div style={{ fontSize: "15px", fontWeight: "600" }}>{name}</div>
      </Grid>
    </Grid>
  );
};

export default CommentCardsLeft;
