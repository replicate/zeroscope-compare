import React from 'react';
import VideoForm from "@/components/VideoForm";
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="container max-w-6xl mx-auto md:px-8 px-4 py-4 pb-10 bg-white border-black min-h-screen">
      <h1 className={ `${spaceGrotesk.className} text-6xl mt-6 mb-12 `}>
        <div className="font-bold">Zeroscope v2</div>
        <span className="text-4xl text-slate-500">A settings guide by Replicate</span>
      </h1>

      <div className="max-w-prose text-xl">
        <p>Zeroscope v2 is an open-source text-to-video model, give it a prompt and it’ll generate a short video.</p>

        <p>It’s a fine-tuned version of <a href="https://replicate.com/cjwbw/damo-text-to-video">Damo’s original text-to-video model</a>, tuned by <a href="https://twitter.com/cerspense">@cerspense</a>. And it can make short 1024x576 videos without watermarks.</p>

        <a href="https://replicate.com/anotherjesse/zeroscope-v2-xl" className="no-underline bg-black focus:transparent focus:text-black active:transparent active:text-black text-lg text-white px-5 py-3 mt-4 rounded shadow" type="submit">
          Make videos with Replicate<ArrowRightIcon className="inline-block w-5 h-5 ml-2" />
        </a>
      </div>

      <h2 className={ `${spaceGrotesk.className} font-bold text-4xl mt-20 mb-8`}>Compare videos</h2>
      <div className="max-w-prose text-xl mb-8">
        <p>Try changing <code>num_frames</code>, <code>guidance_scale</code> and <code>num_inference_steps</code> to see what happens.</p>
      </div>
      <div className="flex justify-between w-full">
        <div className="mr-4 w-1/2">
          <VideoForm formId="form1" />
        </div>
        <div className="ml-4 w-1/2">
          <VideoForm formId="form2" />
        </div>
      </div>

      <div className="max-w-prose text-xl">
        <h2 className={ `${spaceGrotesk.className} font-bold text-4xl mt-20 mb-8`}>Settings to start with</h2>

        <h3 className={ `${spaceGrotesk.className} font-bold text-2xl mt-8 mb-4`}>Start with the 576w model</h3>
        <p>Begin by generating videos using the <code>576w</code> model at 576x320 resolution. When you find a video that you like, upscale it to 1024x576 using the <code>xl</code> model.</p>

        <p>You could create a 1024x576 video directly by using the <code>xl</code> model, but this video will render with duplicate objects and will tend to have low coherency. It’s better to use a two-step process (unless you’re intentionally trying to get weirder results).</p>

        <h3 className={ `${spaceGrotesk.className} font-bold text-2xl mt-8 mb-4`}>Number of frames and FPS (frames-per-second)</h3>
        <p>Zeroscope v2 was trained on short 24 frame clips. Set your <code>num_frames</code> to 24 for the best results. You can try longer clips, but beyond 40 frames the video will completely degrade.</p>

        <p>For a smooth 1s video set the <code>fps</code> to 24. Alternatively, use 12 or 8 for a more jerky 2s or 3s video, then use a video interpolater to fill in the missing frames and make the video smooth again.</p>

        <h3 className={ `${spaceGrotesk.className} font-bold text-2xl mt-8 mb-4`}>Guidance scale</h3>

        <p>This determines how much the model pays attention to your prompt. Too low and you see a grayscale mess, too high and the video will look distorted, with color artifacts. The sweet-spot is between 10 and 15, but try pushing this higher if your prompt is being ignored. Try setting <code>guidance_scale</code> to 12.5 to start with.</p>

        <h3 className={ `${spaceGrotesk.className} font-bold text-2xl mt-8 mb-4`}>Steps</h3>

        <p>How many inference steps will be used to generate your video. More steps give better quality and coherency, but takes longer to generate. Fewer steps will give a lower quality video but will generate quickly – a good setting for fast prompt experimentation. Going above 100 steps will not improve your video.</p>

        <p>Try setting <code>num_inference_steps</code> to 50 to start with.</p>
      </div>
    </main>
  );
}
