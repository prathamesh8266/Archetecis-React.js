import React from "react";
import classes from "./projects.module.css";
import i1 from "../images/desk-1081708_640.jpg";
import i2 from "../images/furniture-998265_640.jpg";
import i3 from "../images/interior-2685521_640.jpg";
import i4 from "../images/kitchen-1940174_640.jpg";
import i5 from "../images/kitchen-2165756_640.jpg";
import i6 from "../images/living-room-1835923_640.jpg";
import i7 from "../images/living-room-2155376_640.jpg";
import i8 from "../images/living-room-2569325_640.jpg";
import i9 from "../images/room-1336497_640.jpg";

function projects() {
  return (
    <div>
      <div className={classes.head}>
        <h1 className={classes.heading}>
          Amazing projects from most talented <br />
          builders architects & designers
        </h1>
        <hr />
      </div>
      <div className={classes.images}>
        <img src={i1} alt="project1" className={classes.i1}></img>
        <img src={i2} alt="project2" className={classes.i2}></img>
        <img src={i3} alt="project3" className={classes.i3}></img>
        <img src={i4} alt="project4" className={classes.i4}></img>
        <img src={i5} alt="project5" className={classes.i5}></img>
        <img src={i6} alt="project6" className={classes.i6}></img>
        <img src={i7} alt="project7" className={classes.i7}></img>
        <img src={i8} alt="project8" className={classes.i8}></img>
        <img src={i9} alt="project9" className={classes.i9}></img>
      </div>
    </div>
  );
}

export default projects;
