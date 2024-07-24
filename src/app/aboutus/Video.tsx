import React from "react";
const Video = () => {
  return (
    <div className="flex flex-row gap-2 justify-center mt-3 pl-20 pr-20">
      <iframe
        className="content-center"
        width="1100"
        height="500"
        src="https://www.youtube.com/embed/qsJo9SdgvwM?si=7JARJb1b8dD7aS3S"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
