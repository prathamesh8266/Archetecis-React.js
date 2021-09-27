import React from "react";
import classes from "./button.module.css";

function button(props = "Explore projects") {
  return (
    <div>
      <button className={classes.btn}>
        {props.text} <span className={classes.spn}>&rarr;</span>
      </button>
    </div>
  );
}

export default button;
