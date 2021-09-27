import React from "react";
import classes from "./navbar.module.css";
import logo from "../images/Vector.svg";

function navbar() {
  return (
    <div>
      <div className={classes.navbar}>
        <div className={classes.logos}>
          <img src={logo} alt="logo" className={classes.logo}></img>
          <p className={classes["logo-name"]}>ARCHIRA</p>
        </div>
        <ul className={classes.lists}>
          <li className={classes.list}>HOME</li>
          <li className={classes.list}>SERVICE</li>
          <li className={classes.list}>PROJECTS</li>
          <li className={classes.list}>NEWS</li>
        </ul>
        <div className={classes.disp}>&#x2630;</div>
      </div>
    </div>
  );
}

export default navbar;
