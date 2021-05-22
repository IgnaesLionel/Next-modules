import React from "react";
import BtnSquareArrow from "../BtnSquareArrow/BtnSquareArrow";
import classes from "./About.module.scss";
import photo1 from "./img/nat-1-large.jpg";
import photo2 from "./img/nat-2-large.jpg";
import photo3 from "./img/nat-3-large.jpg";

const About = () => {
  return (
    <div>
      {" "}
      <section className={classes.section__about}>
        <div className={classes.centerText}>
          <h2
            className={`${classes.marginBottom8} ${classes.headingSecondary}`}
          >
            Exciting tours for adventurous people
          </h2>
        </div>

        <div className="row">
          <div className="col-1-of-2">
            <h3
              className={`${classes.headingTertiary} ${classes.marginBottom1}`}
            >
              You're going to fall in love with nature
            </h3>
            <p className={classes.paragraph}>
              On sait depuis longtemps que travailler avec du texte lisible et
              contenant du sens est source de distractions, et empêche de se
              concentrer sur la mise en page elle-même. L'avantage du Lorem
              Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.'
              est qu'il possède une distribution de lettres plus ou moins
              normale, et en tout cas comparable avec celle du français
              standard.
            </p>
            <h3
              className={`${classes.headingTertiary} ${classes.marginBottom1}`}
            >
              Live adventures like you never have before
            </h3>
            <p className={classes.paragraph}>
              On sait depuis longtemps que travailler avec du texte lisible et
              contenant du sens est source de distractions, et empêche de se
              concentrer sur la mise en page elle-même.
            </p>
            <BtnSquareArrow />
          </div>
          <div className="col-1-of-2">
            <div className={`${classes.composition}`}>
              <img
                src={photo1}
                alt="Photo 1"
                className={`${classes.composition__photo} ${classes.composition__photo__1}`}
              />
              <img
                src={photo2}
                alt="Photo 2"
                className={`${classes.composition__photo} ${classes.composition__photo__2}`}
              />
              <img
                src={photo3}
                alt="Photo 3"
                className={`${classes.composition__photo} ${classes.composition__photo__3}`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
