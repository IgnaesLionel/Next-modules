import Image from "next/image";
import React from "react";
import classes from "./NextBackground.module.scss";

const NextBackground = () => {
  return (
    <div className={classes.container}>
      <Image
        src="/500pxphoto.jpeg"
        alt="Picture"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <h1 className={classes.landingText}>Find pros in your country</h1>
    </div>
  );
};

export default NextBackground;
