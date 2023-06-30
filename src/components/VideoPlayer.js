import React from 'react';

const VideoPlayer = ({ video, autoPlay = true }) => {
  return (
    <div className="w-full rounded-md w-full mb-4">
      <video src={video} playsInline controls loop preload="auto" autoPlay={autoPlay} className="w-full rounded-md" />
    </div>
  );
};

export default VideoPlayer;
