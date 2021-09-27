import React from "react";
import rect from "../images/Rectangle 313.png";
import left from "../images/Group 84.png";
import thumbs from "../images/thumbs-up.png";
import classes from "./testimonials.module.css";

function testimonials() {
  return (
    <div className={classes.div}>
      <img src={rect} alt="rectange-illustrate" className={classes.rect} />
      <div className={classes.main}>
        <div>
          <img src={left} alt="person-pic" className={classes.left} />
        </div>
        <div className={classes.right}>
          <h2 className={classes.head}>
            I am ipsum dolor sit amet, consectetur adipiscing elit. Ornare sit
            convallis risus sit elit. Rutrum arcu cursus aenean ut.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Ornare sit convallis{" "}
          </h2>
          <div className={classes.name}>
            <img src={thumbs} className={classes.thumb} alt="thumbs" />
            <h3 className={classes.head3}>Shahid Zaman</h3>
          </div>
          <p className={classes.para}>Graphic Designer, Intelligent Project</p>
        </div>
      </div>
    </div>
  );
}

export default testimonials;
