import React from "react";
import Navbar from "./navbar";
import header_i from "../images/header-img.svg";
import classes from "./header.module.css";
import Button from "../util/button/button";

function header() {
  return (
    <div>
      <Navbar />
      <div className={classes["header-body"]}>
        <div className={classes.left}>
          <h1 className={classes.hed1}>
            Elegant Interior Design
            <br />
            for your home & office
          </h1>
          <p className={classes.para}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. mollit anim id est laborum."
          </p>
          <Button text="Explore projects" />
        </div>
        <div className={classes.right}>
          <img src={header_i} alt="ilustration" className={classes.img} />
        </div>
      </div>
    </div>
  );
}

export default header;
