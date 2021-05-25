import React from "react";
import classes from "./PopUp00.module.scss";
import photo1 from "./img/nat-8.jpg";
import photo2 from "./img/nat-9.jpg";

const PopUp00 = () => {
  return (
    <div className={classes.popup} id="popup">
      <div className={classes.popup__content}>
        <div className={classes.popup__left}>
          <img
            src={photo1}
            alt="Tour photo"
            className={classes.popup__img}
          ></img>
          <img
            src={photo2}
            alt="Tour photo"
            className={classes.popup__img}
          ></img>
        </div>
        <div className={classes.popup__right}>
          <a href="#section-tours" className={classes.popup__close}>
            &times;
          </a>
          <h2
            className={`${classes.headingSecondary} ${classes.marginBottom4}`}
          >
            Start booking now
          </h2>
          <h3 className={`${classes.headingTertiary} ${classes.marginBottom2}`}>
            Important &ndash; Please read these terms before booking
          </h3>
          <p className={classes.popup__text}>
            On sait depuis longtemps que travailler avec du texte lisible et
            contenant du sens est source de distractions, et empêche de se
            concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum
            sur un texte générique comme 'Du texte. On sait depuis longtemps que
            travailler avec du texte lisible et contenant du sens est source de
            distractions, et empêche de se concentrer sur la mise en page
            elle-même. L'avantage du Lorem Ipsum sur un texte générique comme
            'Du texte. On sait depuis longtemps que travailler avec du texte
            lisible et contenant du sens est source de distractions, et empêche
            de se concentrer sur la mise en page elle-même. L'avantage du Lorem
            Ipsum sur un texte générique comme 'Du texte. On sait depuis
            longtemps que travailler avec du texte lisible et contenant du sens
            est source de distractions, et empêche de se concentrer sur la mise
            en page elle-même. L'avantage du Lorem Ipsum sur un texte générique
            comme 'Du texte.
          </p>

          <a href="#"> book now to remplace</a>
        </div>
      </div>
    </div>
  );
};

export default PopUp00;
