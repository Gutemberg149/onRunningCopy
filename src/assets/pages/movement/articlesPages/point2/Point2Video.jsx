import React from "react";

const Point2Video = () => {
  return (
    <div className="video-responsive">
      <iframe
        width="100%"
        height="1100"
        src={`https://www.youtube.com/embed/VuNqZzciy4g`}
        frameBorder={0}
        border="none"
        allowFullScreen
        allow="autoplay"
      />
    </div>
  );
};

export default Point2Video;
