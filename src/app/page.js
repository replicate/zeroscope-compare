'use client'

import React from 'react';
import VideoForm from "@/components/VideoForm";

export default function Home() {
  return (
    <main className="container max-w-6xl mx-auto md:px-8 px-4 py-4 pb-10 bg-white border-black min-h-screen">
      <h1 className="text-6xl font-bold text-center mt-6 mb-12">
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
