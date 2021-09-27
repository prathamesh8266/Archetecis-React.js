import React from "react";
import classes from "./Blogs.module.css";
import Button from "../util/button/button";
import Image1 from "../images/Image1.png";
import Image2 from "../images/Image2.png";
import Image3 from "../images/Image3.png";

function Blogs() {
  return (
    <div className={classes.div}>
      <div className={classes.head}>
        <h2 className={classes.head2}>
          Early Digital Explorations From Our Daily Blog
        </h2>
        <Button text="Read out blogs" className={classes.btn} />
      </div>
      <div className={classes.flex}>
        <div className={classes.image}>
          <img src={Image1} alt="balcony" className={classes.img}></img>
          <div className={classes.over}>
            <p className={classes.para}>
              by <span className={classes.span}>Monju Aflame</span>, 3 days ago
            </p>
            <h3>Beef Meat sit amet, cte tur adipiscing....</h3>
          </div>
        </div>
        <div className={classes.image}>
          <img src={Image2} alt="balcony" className={classes.img}></img>
          <div className={classes.over}>
            <p className={classes.para}>
              by <span className={classes.span}>Monju Aflame</span>, 3 days ago
            </p>
            <h3>Beef Meat sit amet lolia dur amito, cte tur adipiscing</h3>
          </div>
        </div>
        <div className={classes.image}>
          <img src={Image3} alt="balcony" className={classes.img}></img>
          <div className={classes.over}>
            <p className={classes.para}>
              by <span className={classes.span}>Monju Aflame</span>, 3 days ago
            </p>
            <h3>
              Beef Meat sit amet, viva la respitol relancetunod cte tur
              adipiscing
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
