import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Chip from "@mui/material/Chip";
const QuestionHeader = ({ count, setCount }) => {
  const [seconds, setSeconds] = useState(
    parseInt(localStorage.getItem("timerValue")) || 600
  );

  useEffect(() => {
    localStorage.setItem("timerValue", seconds.toString());
  }, [seconds]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds == 0) {
        return clearInterval(interval);
      }
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return (
    <div>
      <Grid container justifyContent={"space-between"}>
        <Grid item>
          <Chip
            label={`${count} / 05`}
            sx={{
              width: "80px",
              background: "green",
              height: "25px",
              color: "white",
            }}
          />
        </Grid>
        <Grid item>
          <Chip
            label={`${minutes} : ${
              remainingSeconds < 10 ? "0" : ""
            }${remainingSeconds}`}
            sx={{
              width: "80px",
              background: "#663595",
              height: "25px",
              color: "white",
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default QuestionHeader;
