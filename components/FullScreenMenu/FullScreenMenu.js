import React, { useState } from "react";
import classes from "./FullScreenMenu.module.scss";

const FullScreenMenu = () => {
  const [count, setCount] = useState(false);

  return (
    <div className={classes.navigation}>
      <input
        type="checkbox"
        className={classes.navigation__checkbox}
        id="navi-toggle"
        checked={count}
        /*  value={count} */
        onClick={() => {
          setCount(!count);
        }}
      ></input>
      <label for="navi-toggle" className={classes.navigation__button}>
        <span className={classes.navigation__icon}></span>
      </label>

      <div className={classes.navigation__background}>&nbsp;</div>

      <nav className={classes.navigation__nav}>
        <ul className={classes.navigation__list}>
          <li className={classes.navigation__item}>
            <a
              href="#"
              className={classes.navigation__link}
              onClick={() => {
                setCount(!count);
              }}
            >
              <span>01</span>About us
            </a>{" "}
          </li>
          <li className={classes.navigation__item}>
            <a
              href="#"
              className={classes.navigation__link}
              onClick={() => {
                setCount(!count);
              }}
            >
              <span>02</span>Your benefits
            </a>{" "}
          </li>
          <li className={classes.navigation__item}>
            <a
              href="#section-tours"
              className={classes.navigation__link}
              onClick={() => {
                setCount(!count);
              }}
            >
              <span>03</span> Popular tours
            </a>{" "}
          </li>
          <li className={classes.navigation__item}>
            <a
              href="#section-stories"
              className={classes.navigation__link}
              onClick={() => {
                setCount(!count);
              }}
            >
              <span>04</span>our stories
            </a>{" "}
          </li>
          <li className={classes.navigation__item}>
            <a
              href="#"
              className={classes.navigation__link}
              onClick={() => {
                setCount(!count);
              }}
            >
              <span>05</span> Book now
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default FullScreenMenu;
