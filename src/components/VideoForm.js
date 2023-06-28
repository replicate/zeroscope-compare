'use client'

import React, { useState } from 'react';
import VideoPlayer from "@/components/VideoPlayer";

const VideoForm = ({ formId }) => {
  const [videoType, setVideoType] = useState("num_inference_steps");
  const [videoValue, setVideoValue] = useState(10);

  const handleVideoTypeChange = (e) => {
    const newType = e.target.value;
    setVideoType(newType);
    if (newType === "guidance_scale") {
      setVideoValue(12.5);
    } else if (newType === "num_frames") {
      setVideoValue(24);
    } else {
      setVideoValue(50);
    }
  };

  const handleVideoValueChange = (e) => {
    setVideoValue(e.target.value);
  };

  const step = videoType === "num_inference_steps" ? "5" : videoType === "guidance_scale" ? "0.5" : "1"
  const min = videoType === "num_inference_steps" ? "5" : videoType === "guidance_scale" ? "1.0" : "2"
  const max = videoType === "num_inference_steps" ? "400" : videoType === "guidance_scale" ? "40.0" : "120"

  // Convert the video value based on the type
  let videoValueStr;
  if (videoType === "guidance_scale") {
    videoValueStr = (videoValue * 100).toString();
  } else {
    videoValueStr = videoValue.toString().padStart(3, '0'); // pad with leading zeros
  }

  const videoPath = `/videos/clown_fish_${videoType}_${videoValueStr}.mp4`;

  return (
    <div className="flex flex-col items-center">
      <label htmlFor={`videoType_${formId}`}>Select video type:</label>
      <select id={`videoType_${formId}`} value={videoType} onChange={handleVideoTypeChange}>
        <option value="num_inference_steps">Number of Inference Steps</option>
        <option value="guidance_scale">Guidance Scale</option>
        <option value="num_frames">Number of Frames</option>
      </select>

      <label htmlFor={`videoValue_${formId}`}>{videoType.replace('_', ' ')}:</label>
      <div className="flex items-center">
        <span>{min}</span>
        <input
          id={`videoValue_${formId}`}
          type="range"
          step={step}
          min={min}
          max={max}
          value={videoValue}
          onChange={handleVideoValueChange}
        />
        <span>{max}</span>
      </div>

      <VideoPlayer video={videoPath} />
    </div>
  );
};

export default VideoForm;
