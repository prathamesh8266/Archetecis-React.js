import React from "react";
import classes from "./experiance.module.css";
import circle from "../images/Ellipse 25.svg";
import circle2 from "../images/Ellipse 27.png";
import architect from "../images/architect4.png";

function experiance() {
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <hr className={classes.line} />
        <h1 className={classes.head}>
          We create digital experiance local to worldwide
        </h1>
      </div>
      <img src={circle} alt="circle" className={classes.circle}></img>
      <img src={circle2} alt="circle2" className={classes.circle2} />
      <img src={circle2} alt="circle3" className={classes.circle3} />
      <div className={classes.flex}>
        <div className={classes.div}>
          <img src={architect} alt="architect" className={classes.architect} />
          <h2 className={classes.head2}>Share Your Ideas</h2>
          <p className={classes.para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare sit
            convallis risus sit elit. Rutrum arcu cursus aenean ut.
          </p>
        </div>
        <div className={classes.div}>
          <img src={architect} alt="architect" className={classes.architect} />
          <h2 className={classes.head2}>Share Your Ideas</h2>
          <p className={classes.para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare sit
            convallis risus sit elit. Rutrum arcu cursus aenean ut.
          </p>
        </div>
        <div className={classes.div}>
          <img src={architect} alt="architect" className={classes.architect} />
          <h2 className={classes.head2}>Share Your Ideas</h2>
          <p className={classes.para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare sit
            convallis risus sit elit. Rutrum arcu cursus aenean ut.
          </p>
        </div>
      </div>
    </div>
  );
}

export default experiance;
