import * as React from "react";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Grid } from "@mui/material";

const drawerBleeding = 56;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

function SwipeableEdgeDrawer(props) {
  console.log(props, "testing");
  const { window } = props;

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />

      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={props.open}
        onClose={props.toggleDrawer(false)}
        onOpen={props.toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={true}
        ModalProps={{
          keepMounted: false,
        }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography sx={{ p: 2 }}>Quiz Rules</Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <Grid
                container
                direction={"row"}
                gap="10px"
                alignItems={"center"}
              >
                <Grid item>
                  <img src="/timeicon.png" alt="" width={30} height={30} />
                </Grid>
                <Grid item>
                  <Grid container direction={"column"}>
                    <Grid item>
                      {" "}
                      <Typography style={{ fontWeight: 600 }}>
                        10 Mins
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography style={{ width: "300px" }}>
                        Keep in mind that it is a time-bound quiz.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction={"row"}
                gap="10px"
                alignItems={"center"}
              >
                <Grid item>
                  <img src="/questionicon.png" alt="" width={30} height={30} />
                </Grid>
                <Grid item>
                  <Grid container direction={"column"}>
                    <Grid item>
                      {" "}
                      <Typography style={{ fontWeight: 600 }}>
                        5 Questions
                      </Typography>
                    </Grid>
                    <Grid item style={{ width: "300px" }}>
                      <Typography>We believe that you will ace it!.</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction={"row"}
                gap="10px"
                alignItems={"center"}
              >
                <Grid item>
                  {" "}
                  <img src="/winsave.png" alt="" width={30} height={30} />
                </Grid>
                <Grid item>
                  <Grid container direction={"column"}>
                    <Grid item>
                      <Typography style={{ fontWeight: 600 }}>
                        50 % Passing Criteria.
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography style={{ width: "300px" }}>
                        All the best! See you on the other side.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Grid
                container
                direction="row"
                gap="10px"
                style={{ background: "green", padding: "10px" }}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Grid item>
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "10px",
                      background: "red",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    i
                  </div>
                </Grid>
                <Grid item>
                  <Typography style={{ width: "300px", fontSize: "13px" }}>
                    This quiz can only be attempted once daily.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Grid
                container
                justifyContent={"center"}
                alignItems={"center"}
                style={{ paddingBottom: "30px" }}
              >
                <Grid item>
                  <Button
                    variant="contained"
                    sx={{ borderRadius: "20px", width: "120px" }}
                  >
                    Start
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

export default SwipeableEdgeDrawer;
