import React from "react";
import classes from "./Footer00.module.scss";
import logo from "./logo-green-2x.png";

const Footer00 = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__logoBox}>
        <img src={logo} alt="Full logo" className={classes.footer__logo}></img>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className={classes.footer__navigation}>
            <ul>
              <li className={classes.footer__item}>
                <a href="#" className={classes.footer__link}>
                  Compagny
                </a>
              </li>
              <li className={classes.footer__item}>
                <a href="#" className={classes.footer__link}>
                  Contact us
                </a>
              </li>
              <li className={classes.footer__item}>
                <a href="#" className={classes.footer__link}>
                  Carrers
                </a>
              </li>
              <li className={classes.footer__item}>
                <a href="#" className={classes.footer__link}>
                  Privacy policy
                </a>
              </li>
              <li className={classes.footer__item}>
                <a href="#" className={classes.footer__link}>
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className={classes.footer__copyright}>
            Built by
            <a href="#" className={classes.footer__link}>
              Ignaes Lionel
            </a>
            Copyright &copy;
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer00;
