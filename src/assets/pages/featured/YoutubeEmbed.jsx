import React from "react";

import propTypes from "prop-types";

const YoutubeEmbed = ({ embedID }) => {
  return (
    <div className="video-responsive">
      <iframe
        width="100%"
        height="1100"
        src={`https://www.youtube.com/embed/${embedID}`}
        frameBorder={0}
        border="none"
        allowFullScreen
        allow="autoplay"
      />
    </div>
  );
};

//this is validatio
YoutubeEmbed.propTypes = {
  embedID: propTypes.string.isRequired,
};

export default YoutubeEmbed;
//------------------------------------------------------------------------
export const YoutubeEmbed2 = ({ embedID }) => {
  return (
    <div className="video-responsive">
      <iframe
        width="100%"
        height="1100"
        src={`https://www.youtube.com/embed/${embedID}`}
        frameBorder={0}
        border="none"
        allowFullScreen
        allow="autoplay"
      />
    </div>
  );
};

//this is validatio
YoutubeEmbed2.propTypes = {
  embedID: propTypes.string.isRequired,
};
