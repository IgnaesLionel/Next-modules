import classes from "./BackgroundVideo.module.scss";
import React from "react";

//video from public/video.mp4
// parent need to be position relative
const BackgroundVideo = () => {
  return (
    <div className={classes.bgVideo}>
      <video className={classes.bgVideo___content} autoPlay loop muted>
        <source src="/video.mp4" type="video/mp4" />
        <source src="/video.webm" type="video/webm" />
        Your browser is not supported!
      </video>
    </div>
  );
};

export default BackgroundVideo;
