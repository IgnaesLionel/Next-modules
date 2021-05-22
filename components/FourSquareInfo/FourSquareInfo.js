import React from "react";
import classes from "./FourSquareInfo.module.scss";
//use icon-font.css with fonts folder

const ForSquareInfo = () => {
  return (
    <section className={classes.sectionFeatures}>
      {" "}
      <div className="row">
        <div className="col-1-of-4">
          <div className={classes.featureBox}>
            {" "}
            <i className={`${classes.featureBox__icon} icon-basic-world`} />
            <h3
              className={`${classes.headingTertiary} ${classes.marginBottom1}`}
            >
              Explore the world
            </h3>
            <p className={classes.featureBox__text}>
              {" "}
              Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou
              là, mais la majeure partie d'entre elles a été altérée par
              l'addition d'humour ou de mots aléatoires qui ne ressemblent pas
            </p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className={classes.featureBox}>
            {" "}
            <i className={`${classes.featureBox__icon} icon-basic-compass`} />
            <h3
              className={`${classes.headingTertiary} ${classes.marginBottom1}`}
            >
              meet nature
            </h3>
            <p className={classes.featureBox__text}>
              {" "}
              Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou
              là, mais la majeure partie d'entre elles a été altérée par
              l'addition d'humour ou de mots aléatoires qui ne ressemblent pas
            </p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className={classes.featureBox}>
            {" "}
            <i className={`${classes.featureBox__icon} icon-basic-map`} />
            <h3
              className={`${classes.headingTertiary} ${classes.marginBottom1}`}
            >
              find your way
            </h3>
            <p className={classes.featureBox__text}>
              {" "}
              Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou
              là, mais la majeure partie d'entre elles a été altérée par
              l'addition d'humour ou de mots aléatoires qui ne ressemblent pas
            </p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className={classes.featureBox}>
            {" "}
            <i className={`${classes.featureBox__icon} icon-basic-heart`} />
            <h3
              className={`${classes.headingTertiary} ${classes.marginBottom1}`}
            >
              Live a healthier life
            </h3>
            <p className={classes.featureBox__text}>
              {" "}
              Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou
              là, mais la majeure partie d'entre elles a été altérée par
              l'addition d'humour ou de mots aléatoires qui ne ressemblent pas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForSquareInfo;
