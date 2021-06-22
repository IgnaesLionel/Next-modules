import React from "react";
import classes from "./Header01.module.scss";
import BtnPulseSass from "../BtnRoundPulse/BtnRoundPulse";
import logo from "./logo-white.png";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__logoBox}>
        <img className={classes.header__logo} src={logo}></img>
      </div>
      <div className={classes.header__textBox}>
        <h1 className={classes.headingPrimary}>
          <span className={classes.headingPrimary__main}> Outdoors</span>
          <span className={classes.headingPrimary__sub}>
            is where life happens
          </span>
        </h1>
        <BtnPulseSass
          text="Discover our tours!"
          color="white"
          path="#section-tours"
        />
      </div>
    </header>
  );
};

export default Header;
