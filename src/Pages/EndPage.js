import { Avatar, Button, Chip, Grid, Typography } from "@mui/material";
import React from "react";

const EndPage = () => {
  return (
    <div>
      <Grid container direction={"column"}>
        <Grid item sx={{ background: "#663595", height: "80vh" }}>
          <Grid
            container
            direction={"column"}
            alignItems={"center"}
            justifyContent={"space-around"}
            sx={{ height: "80vh" }}
          >
            <Grid item>
              <Grid
                container
                direction="column"
                alignItems={"center"}
                gap="10px"
              >
                <Grid item>
                  <Avatar
                    src={"./endicon.png"}
                    sx={{ width: "150px", height: "150px" }}
                  />
                </Grid>
                <Grid item>
                  <Chip
                    style={{
                      width: "80px",
                      height: "40px",
                      color: "white",
                      fontSize: "20px",
                    }}
                    label={
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "5px",
                        }}
                      >
                        <div>
                          <img
                            src="/staricon.png"
                            width="20px"
                            height="20px"
                            style={{ marginTop: "6px" }}
                            alt=""
                          />
                        </div>
                        <div>60</div>
                      </div>
                    }
                  />
                </Grid>
                <Grid item>
                  <div
                    style={{
                      color: "white",
                      fontSize: "20px",
                      fontWeight: 600,
                    }}
                  >
                    Karma Points Earned !
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column" style={{ color: "white" }}>
                <Grid item>
                  <Typography>What are Karma Points ?</Typography>
                </Grid>
                <Grid item style={{ width: "250px" }}>
                  <Typography variant="caption" style={{ color: "#f0f0f0" }}>
                    Karma points are awarded for various actions like attempting
                    quizzes and watching videos,allowing you to move up the
                    leaderboards and unlock new features.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            style={{
              postion: "fixed",
              bottom: -10,
              left: "50%",
              transform: "translateX(-50%)",
              textTransform: "unset",
              backgroundColor: "#663595",
              borderRadius: "20px",
              padding: "10px",
            }}
          >
            Check Result
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default EndPage;
