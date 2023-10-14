import React from "react";

const TheRunVideo1 = () => {
  return (
    <div className="video-responsive">
      <iframe
        width="100%"
        height="1100"
        src={`https://www.youtube.com/embed/8tusqlgi90g`}
        frameBorder={0}
        border="none"
        allowFullScreen
        allow="autoplay"
      />
    </div>
  );
};

const TheRunVideo2 = () => {
  return (
    <div className="video-responsive">
      <iframe
        width="100%"
        height="1100"
        src={`https://www.youtube.com/embed/21x92GkzaU4`}
        frameBorder={0}
        border="none"
        allowFullScreen
        allow="autoplay"
      />
    </div>
  );
};

export { TheRunVideo1, TheRunVideo2 };
