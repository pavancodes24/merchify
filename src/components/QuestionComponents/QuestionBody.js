import { Button, Grid } from "@mui/material";
import React from "react";
import Radio from "@mui/material/Radio";
import { useNavigate } from "react-router-dom";

const QuestionBody = ({ count, setCount }) => {
  const [selectedValue, setSelectedValue] = React.useState("");
  const navigate = useNavigate();
  const handleChange = (id) => {
    console.log(id);
    setSelectedValue(id);
  };
  return (
    <>
      <Grid
        container
        style={{ padding: "4% 2% 5% 2%", height: "60vh" }}
        direction={"column"}
        justifyContent={"space-between"}
      >
        <Grid item>Which formula is NOT equivalent to all of the others ?</Grid>
        <Grid item>
          <Grid
            container
            spacing={3}
            direction={"column"}
            style={{ padding: "0 3%" }}
          >
            {[
              { id: "a", value: "Match" },
              { id: "b", value: "Index" },
              { id: "c", value: "HLookup" },
              { id: "d", value: "VLookup" },
            ].map((a) => (
              <Grid item>
                <div
                  onClick={() => handleChange(a.id)}
                  style={{
                    width: "90%",
                    height: "50px",
                    paddingLeft: "15px",
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "15px",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "20px",
                        border: "1px solid #663595",
                        textAlign: "center",
                        textTransform: "capitalize",
                        fontSize: "12px",
                        color: selectedValue == a.id ? "white" : "black",
                        background: selectedValue == a.id ? "#663595" : "white",
                      }}
                    >
                      {a.id}
                    </div>
                    <div style={{ fontSize: "10px" }}>{a.value}</div>
                  </div>
                  <div>
                    <Radio
                      onChange={() => handleChange(a.id)}
                      checked={selectedValue === a.id}
                      value="a"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "A" }}
                    />
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          disabled={selectedValue == ""}
          onClick={() => {
            if (count == 5) {
              navigate("/end-page");
            } else {
              setCount(Number(count) + 1);
              setSelectedValue("");
            }
          }}
          style={{
            background: "#663595",
            color: "white",
            position: "fixed",
            bottom: 15,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100px",
            borderRadius: "20px",
            textTransform: "unset",
          }}
        >
          Next
        </Button>
      </Grid>
    </>
  );
};

export default QuestionBody;
