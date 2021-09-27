import React from "react";
import medal from "../images/medal 1.svg";
import hands from "../images/support 1.svg";
import pen from "../images/vector 1.svg";
import classes from "./specifics.module.css";

function specifics() {
  return (
    <div className={classes.main}>
      <div className={classes.medal}>
        <img src={medal} alt="medal" className={classes["medal-logo"]} />
        <h2 className={classes.h2}>Certified Company</h2>
        <p className={classes.para}>
          Morbi volutpat nisi a ligula vestibulum placerat. Suspendisse
          venenatis pulvinar nibh sed convallis
        </p>
      </div>
      <div className={classes.hand}>
        <img src={hands} alt="medal" className={classes["hand-logo"]} />
        <h2 className={classes.h2}>Best After Support</h2>
        <p className={classes.para}>
          Morbi volutpat nisi a ligula vestibulum placerat. Suspendisse
          venenatis pulvinar nibh sed convallis
        </p>
      </div>
      <div className={classes.pen}>
        <img src={pen} alt="medal" className={classes["pen-logo"]} />
        <h2 className={classes.h2}>Brilliant Designer</h2>
        <p className={classes.para}>
          Morbi volutpat nisi a ligula vestibulum placerat. Suspendisse
          venenatis pulvinar nibh sed convallis
        </p>
      </div>
    </div>
  );
}

export default specifics;
