import React from "react";
import Button from "@mui/material/Button";
//import ButtonGroup from "@mui/material/ButtonGroup";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import HomeIcon from "@mui/icons-material/Home";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import './index.css';

const Buttons = ({
  start,
  pause,
  continueB,
  reset,
  startDisable,
  pauseDisable,
  continueDisable
}) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button
      //  variant="contained"
       color="success"
        size="large"
        onClick={start}
        startIcon={
          <AlarmOnIcon color={startDisable ? "disabled" : "success"} />
        }
        disabled={startDisable}
      >
       <span id="a">Start </span>
         
      </Button>
      <Button
      color="success"
        size="large"
        onClick={pause}
        startIcon={<PauseIcon color={pauseDisable ? "disabled" : "success"} />}
        disabled={pauseDisable}
      >
        Pause
      </Button>
      <Button
      color="success"
        size="large"
        onClick={continueB}
        startIcon={
          <PlayArrowIcon color={continueDisable ? "disabled" : "success"} />
        }
        disabled={continueDisable}
      >
        Continue
      </Button>
      <Button
      color="error"
        size="large"
        onClick={reset}
        startIcon={<HomeIcon color="error" />}
      >
        Reset
      </Button>
    </div>
  );
};

export default Buttons;
