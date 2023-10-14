import React from "react";

const TheFaceVideo = () => {
  return (
    <div className="video-responsive">
      <iframe
        width="100%"
        height="1100"
        src={`https://www.youtube.com/embed/ILN99_PZzko`}
        frameBorder={0}
        border="none"
        allowFullScreen
        allow="autoplay"
      />
    </div>
  );
};

export default TheFaceVideo;
