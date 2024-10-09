import React from 'react';

const VideoPlayer = () => {
  return (
    <div>
      <h1>StartUp TN</h1>
      <video autoPlay loop muted>
      <source src="https://startuptn-public-files.s3.ap-south-1.amazonaws.com/homepage-banner-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
