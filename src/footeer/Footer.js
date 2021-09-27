import React from "react";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.main}>
      <div className={classes.flex1}>
        <div>
          <h2 className={classes.h1}>Company</h2>
          <ul className={classes.ul}>
            <li className={classes.li}>Career</li>
            <li className={classes.li}>About Us</li>
            <li className={classes.li}>Blogs</li>
            <li className={classes.li}>Feature</li>
            <li className={classes.li}>Story</li>
          </ul>
        </div>
        <div>
          <h2 className={classes.h1}>Design</h2>
          <ul className={classes.ul}>
            <li className={classes.li}>2D Design</li>
            <li className={classes.li}>3D Design</li>
            <li className={classes.li}>Collabration</li>
            <li className={classes.li}>Tools</li>
            <li className={classes.li}>Important links</li>
          </ul>
        </div>
        <div>
          <h2 className={classes.h1}>Links</h2>
          <ul className={classes.ul}>
            <li className={classes.li}>Projects</li>
            <li className={classes.li}>Contact</li>
            <li className={classes.li}>Send Email</li>
            <li className={classes.li}>Fiveer</li>
            <li className={classes.li}>upWorks</li>
          </ul>
        </div>
        <div>
          <h2 className={classes.h1}>Material</h2>
          <ul className={classes.ul}>
            <li className={classes.li}>Company Profile</li>
            <li className={classes.li}>Asset</li>
            <li className={classes.li}>Location Map</li>
            <li className={classes.li}>Estimated Cost</li>
            <li className={classes.li}>Default Quotation</li>
          </ul>
        </div>
      </div>
      <div className={classes.flex2}>
        <h3 className={classes.h1}>Subscribe</h3>
        <div className={classes.flex}>
          <input
            type="text"
            placeholder="Email Address"
            className={classes.text}
          />
          <button className={classes.btn}>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
