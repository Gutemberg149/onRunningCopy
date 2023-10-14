import React from "react";

const InovationVideo1 = () => {
  return (
    <div className="video-responsive">
      <iframe
        width="100%"
        height="1100"
        src={`https://www.youtube.com/embed/VtosSdRZcsA`}
        frameBorder={0}
        border="none"
        allowFullScreen
        allow="autoplay"
      />
    </div>
  );
};
const InovationVideo2 = () => {
  return (
    <div className="video-responsive">
      <iframe
        width="100%"
        height="1100"
        src={`https://www.youtube.com/embed/zGi3f6Wyxj8`}
        frameBorder={0}
        border="none"
        allowFullScreen
        allow="autoplay"
      />
    </div>
  );
};

export { InovationVideo1, InovationVideo2 };
