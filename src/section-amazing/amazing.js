import React from "react";
import classes from "./amazing.module.css";
import amazing_i from "../images/amazing_i.svg";

function amazing() {
  return (
    <div className={classes.main}>
      <div className={classes.left}>
        <img src={amazing_i} alt="illustration" className={classes.img} />
      </div>
      <div className={classes.right}>
        <h1 className={classes.head}>
          We are designing amazing stuff from last 5 years
        </h1>
        <h2 className={`${classes.g1} ${classes.g}`}>
          01 / <p>Architecture</p>
        </h2>
        <h2 className={`${classes.g2} ${classes.g}`}>
          02 / <p>Construction</p>
        </h2>
        <h2 className={`${classes.g3} ${classes.g}`}>
          03 / <p>Equipment</p>
        </h2>
        <h2 className={`${classes.g4} ${classes.g}`}>
          04 / <p>Renovation</p>
        </h2>
        <h2 className={`${classes.g5} ${classes.g}`}>
          05 / <p>Sanity</p>
        </h2>
        <h2 className={`${classes.g6} ${classes.g}`}>
          06 / <p>Isolation</p>
        </h2>
      </div>
    </div>
  );
}

export default amazing;
