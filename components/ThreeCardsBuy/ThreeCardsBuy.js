import React from "react";
import BtnRoundPulse from "../BtnRoundPulse/BtnRoundPulse";
import classes from "./ThreeCardsBuy.module.scss";

const ThreeCardsBuy = () => {
  return (
    <section className={classes.sectionTours} id="section-tours">
      <div className={classes.centerText}>
        <h2 className={`${classes.marginBottom8} ${classes.headingSecondary}`}>
          Most popular tours
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          <div className={classes.card}>
            <div
              className={`${classes.card__side__front} ${classes.card__side}`}
            >
              <div
                className={`${classes.card__picture} ${classes.card__picture__1}`}
              >
                &nbsp;
              </div>
              <div className={classes.card__heading}>
                <span className={classes.card__heading__span__1}>
                  The Sea Explorer
                </span>
              </div>
              <div className={classes.card__details}>
                <ul>
                  <li>3 day tous</li>
                  <li>up to 30 people</li>
                  <li>2 tour guides</li>
                  <li>Sleep in cozy hotels</li>
                  <li>Difficulty : Easy</li>
                </ul>
              </div>
            </div>
            <div
              className={`${classes.card__side__back} ${classes.card__side} ${classes.card__side__back__1}`}
            >
              <div className={classes.card__cta}>
                <div className={classes.card__priceBox}>
                  <p className={classes.card__priceOnly}>Only</p>

                  <p className={classes.card__priceValue}>$297</p>
                </div>

                <BtnRoundPulse text="BOOK NOW!" color="white" path="#popup" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className={classes.card}>
            <div
              className={`${classes.card__side__front} ${classes.card__side}`}
            >
              <div
                className={`${classes.card__picture} ${classes.card__picture__2}`}
              >
                &nbsp;
              </div>
              <div className={classes.card__heading}>
                <span className={classes.card__heading__span__2}>
                  the forest hiker
                </span>
              </div>
              <div className={classes.card__details}>
                <ul>
                  <li>7 day tous</li>
                  <li>up to 40 people</li>
                  <li>6 tour guides</li>
                  <li>Sleep in provided tents</li>
                  <li>Difficulty : Medium</li>
                </ul>
              </div>
            </div>
            <div
              className={`${classes.card__side__back} ${classes.card__side} ${classes.card__side__back__2}`}
            >
              <div className={classes.card__cta}>
                <div className={classes.card__priceBox}>
                  <p className={classes.card__priceOnly}>Only</p>

                  <p className={classes.card__priceValue}>$666</p>
                </div>

                <BtnRoundPulse text="BOOK NOW!" color="white" path="#popup" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className={classes.card}>
            <div
              className={`${classes.card__side__front} ${classes.card__side}`}
            >
              <div
                className={`${classes.card__picture} ${classes.card__picture__3}`}
              >
                &nbsp;
              </div>
              <div className={classes.card__heading}>
                <span className={classes.card__heading__span__3}>
                  the snow adventurer
                </span>
              </div>
              <div className={classes.card__details}>
                <ul>
                  <li>5 day tous</li>
                  <li>up to 15 people</li>
                  <li>3 tour guides</li>
                  <li>Sleep in provided tents</li>
                  <li>Difficulty : Hard</li>
                </ul>
              </div>
            </div>
            <div
              className={`${classes.card__side__back} ${classes.card__side} ${classes.card__side__back__3}`}
            >
              <div className={classes.card__cta}>
                <div className={classes.card__priceBox}>
                  <p className={classes.card__priceOnly}>Only</p>

                  <p className={classes.card__priceValue}>$777</p>
                </div>

                <BtnRoundPulse text="BOOK NOW!" color="white" path="#popup" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.centerText}>
        <BtnRoundPulse text="Discover our tours!" color="green" path="#popup" />
      </div>
    </section>
  );
};

export default ThreeCardsBuy;
