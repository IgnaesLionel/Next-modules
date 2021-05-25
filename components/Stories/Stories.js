import React from "react";
import classes from "./Stories.module.scss";
import photo1 from "./img/nat-8.jpg";
import photo2 from "./img/nat-9.jpg";
import BtnSquareArrow from "../BtnSquareArrow/BtnSquareArrow";

const Stories = () => {
  return (
    <section className={classes.sectionStories} id="section-stories">
      <div className={classes.bgVideo}>
        <video className={classes.bgVideo__content} autoPlay loop muted>
          <source src="/video.mp4" type="video/mp4" />
          <source src="/video.webm" type="video/webm" />
          Your browser is not supported!
        </video>
      </div>

      <div className={classes.centerText}>
        <h2 className={`${classes.marginBottom8} ${classes.headingSecondary}`}>
          We make people genuinely Happy
        </h2>
      </div>

      <div className="row">
        <div className={classes.story}>
          <figure className={classes.story__shape}>
            {" "}
            <img
              className={classes.story__img}
              src={photo1}
              alt="Person on a tour"
            ></img>
            <figcaption className={classes.story__caption}>
              Mary Smith
            </figcaption>
          </figure>
          <div className={classes.story__text}>
            <h3
              className={`${classes.headingTertiary} ${classes.marginBottomSmall}`}
            >
              I had the best week ever with my family
            </h3>
            <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte standard de l'imprimerie depuis les années 1500,
              quand un imprimeur anonyme assembla ensemble des morceaux de texte
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className={classes.story}>
          <figure className={classes.story__shape}>
            {" "}
            <img
              className={classes.story__img}
              src={photo2}
              alt="Person on a tour"
            ></img>
            <figcaption className={classes.story__caption}>John Doe</figcaption>
          </figure>
          <div className={classes.story__text}>
            <h3
              className={`${classes.headingTertiary} ${classes.marginBottomSmall}`}
            >
              Wow ! my life is completely different !
            </h3>
            <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte standard de l'imprimerie depuis les années 1500,
              quand un imprimeur anonyme assembla ensemble des morceaux de texte
            </p>
          </div>
        </div>
      </div>

      <div className={classes.centerText}>
        <BtnSquareArrow text="Read all stories &rarr;" color="green" />
      </div>
    </section>
  );
};

export default Stories;
