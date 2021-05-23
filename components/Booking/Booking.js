import React from "react";
import classes from "./Booking.module.scss";
import BtnRoundPulse from "../BtnRoundPulse/BtnRoundPulse";
const Booking = () => {
  return (
    <section className={classes.sectionBook}>
      <div className="row">
        <div className={classes.book}>
          <div className={classes.book__form}>
            <form action="#" className={classes.form}>
              <h2
                className={`${classes.marginBottom4} ${classes.headingSecondary}`}
              >
                Start booking now
              </h2>

              <div className={classes.form__group}>
                <input
                  type="text"
                  className={classes.form__input}
                  placeholder="Full Name"
                  id="name"
                  required
                ></input>
                <label className={classes.form__label} for="name">
                  {" "}
                  Full name
                </label>
              </div>
              <div className={classes.form__group}>
                <input
                  type="email"
                  className={classes.form__input}
                  placeholder="Email address"
                  id="email"
                  required
                ></input>
                <label className={classes.form__label} for="email">
                  {" "}
                  Email address
                </label>
              </div>
              <div className={classes.form__group}>
                <div className={classes.form__radio__group}>
                  <input
                    type="radio"
                    className={classes.form__radio__input}
                    id="small"
                    name="size"
                  ></input>
                  <label for="small" className={classes.form__radio__label}>
                    <span className={classes.form__radio__button}></span>Small
                    tour group
                  </label>
                </div>
                <div className={classes.form__radio__group}>
                  <input
                    type="radio"
                    className={classes.form__radio__input}
                    id="large"
                    name="size"
                  ></input>
                  <label for="large" className={classes.form__radio__label}>
                    <span className={classes.form__radio__button}></span>Large
                    tour group
                  </label>
                </div>

                <div className={classes.form__group}>
                  <div className={classes.marginTop3}>
                    <BtnRoundPulse text="NEXT STEP " color="green" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
