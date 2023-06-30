import React from 'react';

const VideoPlayer = ({ video }) => {
  return (
    <div className="w-full rounded-md w-full mb-4">
      <video src={video} controls loop preload="auto" autoPlay className="w-full rounded-md" />
    </div>
  );
};

export default VideoPlayer;
