'use client'

import React from 'react';
import VideoForm from "@/components/VideoForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold text-center mb-8">
        Zeroscope comparison
      </h1>

      <div className="flex justify-between w-full">
        <div className="mr-4">
          <VideoForm formId="form1" />
        </div>
        <div className="ml-4">
          <VideoForm formId="form2" />
        </div>
      </div>
    </main>
  );
}
