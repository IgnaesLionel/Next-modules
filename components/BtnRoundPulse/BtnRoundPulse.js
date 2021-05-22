import React from "react";
import classes from "./BtnRoundPulse.module.scss";

const BtnPulse = ({ text, color }) => {
  let selectedColor = "";

  if (color == "white") {
    selectedColor = classes.btn__white;
  }

  if (color == "green") {
    selectedColor = classes.btn__green;
  }
  return (
    <a
      href="#"
      className={`${classes.btn} ${selectedColor} ${classes.btn__animated}`}
    >
      {text}
    </a>
  );
};

export default BtnPulse;
