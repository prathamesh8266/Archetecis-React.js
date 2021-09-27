import React, { useState } from "react";
import classes from "./questions.module.css";
import frame from "../images/Frame.svg";
import Button from "../util/button/button";

function Questions() {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const firstClicked = () => {
    setFirst(true);
    setSecond(false);
    setThird(false);
    setFourth(false);
  };
  const secondClicked = () => {
    setFirst(false);
    setSecond(true);
    setThird(false);
    setFourth(false);
  };
  const thirdClicked = () => {
    setFirst(false);
    setSecond(false);
    setThird(true);
    setFourth(false);
  };
  const fourthClicked = () => {
    setFirst(false);
    setSecond(false);
    setThird(false);
    setFourth(true);
  };
  return (
    <div className={classes.div}>
      <div className={classes.left}>
        <div className={classes.block}>
          <h2 className={classes.head2}>
            How can I contact with you
            <span className={classes.span} onClick={firstClicked}>
              {!first && <p>&or;</p>}
            </span>
          </h2>
          {first && (
            <p className={classes.para}>
              If you are ipsum dolor sit amet, consectetur adipiscing elit.
              Enim, nisi eget egestas proin. Diam bibendum facilisi risus
              scelerisque tellus bibendum tristique. Sit augue id nibh feugiat
              dui. Ipsum tortor integer suspendisse arcu, maecenas lacus.
              Rhoncus ac.
            </p>
          )}
        </div>
        <div className={classes.block}>
          <h2 className={classes.head2}>
            How can i get the package
            <span className={classes.span} onClick={secondClicked}>
              {!second && <p>&or;</p>}
            </span>
          </h2>
          {second && (
            <p className={classes.para}>
              If you are ipsum dolor sit amet, consectetur adipiscing elit.
              Enim, nisi eget egestas proin. Diam bibendum facilisi risus
              scelerisque tellus bibendum tristique. Sit augue id nibh feugiat
              dui. Ipsum tortor integer suspendisse arcu, maecenas lacus.
              Rhoncus ac.
            </p>
          )}
        </div>
        <div className={classes.block}>
          <h2 className={classes.head2}>
            Where is your office located
            <span className={classes.span} onClick={thirdClicked}>
              {!third && <p>&or;</p>}
            </span>
          </h2>
          {third && (
            <p className={classes.para}>
              If you are ipsum dolor sit amet, consectetur adipiscing elit.
              Enim, nisi eget egestas proin. Diam bibendum facilisi risus
              scelerisque tellus bibendum tristique. Sit augue id nibh feugiat
              dui. Ipsum tortor integer suspendisse arcu, maecenas lacus.
              Rhoncus ac.
            </p>
          )}
        </div>
        <div className={classes.block}>
          <h2 className={classes.head2}>
            Can you renovate my car?
            <span className={classes.span} onClick={fourthClicked}>
              {!fourth && <p>&or;</p>}
            </span>
          </h2>
          {fourth && (
            <p className={classes.para}>
              If you are ipsum dolor sit amet, consectetur adipiscing elit.
              Enim, nisi eget egestas proin. Diam bibendum facilisi risus
              scelerisque tellus bibendum tristique. Sit augue id nibh feugiat
              dui. Ipsum tortor integer suspendisse arcu, maecenas lacus.
              Rhoncus ac.
            </p>
          )}
        </div>
        <div className={classes.btn}>
          <Button className={classes.btn} text={"More queries"} />
        </div>
      </div>
      <div className={classes.right}>
        <img src={frame} alt="frame" className={classes.frame} />
      </div>
    </div>
  );
}

export default Questions;
