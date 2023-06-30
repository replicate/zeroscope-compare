'use client'

import React, { useState } from 'react';
import VideoPlayer from "@/components/VideoPlayer";

const VideoForm = ({ formId }) => {
  const [videoType, setVideoType] = useState("num_frames");
  const [videoValue, setVideoValue] = useState(24);
  const [temporaryValue, setTemporaryValue] = useState(videoValue);

  const handleVideoTypeChange = (e) => {
    const newType = e.target.value;
    setVideoType(newType);
    if (newType === "guidance_scale") {
      setVideoValue(12.5);
      setTemporaryValue(12.5);
    } else if (newType === "num_frames") {
      setVideoValue(24);
      setTemporaryValue(24);
    } else {
      setVideoValue(50);
      setTemporaryValue(50);
    }
  };

  const handleVideoValueChange = (e) => {
    setTemporaryValue(e.target.value);
  };

  const handleVideoValueChangeEnd = () => {
    setVideoValue(temporaryValue);
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
      <label className="hidden" htmlFor={`videoType_${formId}`}>Pick something to change</label>
      <select
        id={`videoType_${formId}`}
        value={videoType}
        onChange={handleVideoTypeChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 pr-4 mb-6 text-sm rounded-lg block w-full p-2.5"
      >
        <option value="num_frames">Number of frames</option>
        <option value="guidance_scale">Guidance scale</option>
        <option value="num_inference_steps">Steps</option>
      </select>

      <label className="hidden" htmlFor={`videoValue_${formId}`}>{videoType.replace('_', ' ')}:</label>
      <div className="w-full flex items-center">
        <div className="w-full flex items-center mb-6 border-2 px-6 py-2 rounded-md">
          <span className="mr-2 text-lg">{min}</span>
          <input
            id={`videoValue_${formId}`}
            type="range"
            step={step}
            min={min}
            max={max}
            value={temporaryValue}
            onChange={handleVideoValueChange}
            onKeyUp={handleVideoValueChangeEnd}
            onMouseUp={handleVideoValueChangeEnd}
            onTouchEnd={handleVideoValueChangeEnd}
            className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-700"
          />
          <span className="ml-2 text-lg">{max}</span>
        </div>
        <span className="w-32 ml-4 mb-6 text-center rounded-md bg-blue-50 px-6 py-2 text-lg text-blue-600">
          { temporaryValue }
        </span>
      </div>

      <VideoPlayer video={videoPath} />
      {/* <dl class="border p-4 rounded-md">
        <dt class="font-bold">Prompt</dt>
        <dd class="mb-2">Clown fish swimming in a coral reef, beautiful, 8k, perfect, award winning, national geographic</dd>
        <dt class="font-bold">Negative prompt</dt>
        <dd class="mb-2">very blue, dust, noisy, washed out, ugly, distorted, broken</dd>
        <dt class="font-bold">Number of frames</dt>
        <dd class="mb-2">24</dd>
        <dt class="font-bold">Guidance scale</dt>
        <dd class="mb-2">12.5</dd>
        <dt class="font-bold">Steps</dt>
        <dd class="mb-2">50</dd>
        <dt class="font-bold">Frames per second</dt>
        <dd class="mb-2">24</dd>
        <dt class="font-bold">Model</dt>
        <dd class="mb-2">576w</dd>
        <dt class="font-bold">Dimensions</dt>
        <dd class="mb-2">576x320</dd>
      </dl> */}
    </div>
  );
};

export default VideoForm;
