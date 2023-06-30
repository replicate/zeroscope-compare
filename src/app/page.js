import React from 'react';
import Link from 'next/link';
import VideoForm from "@/components/VideoForm";
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Space_Grotesk } from 'next/font/google'
import VideoPlayer from '@/components/VideoPlayer';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="container max-w-6xl mx-auto md:px-8 px-4 py-4 pb-10 bg-white border-black min-h-screen">
      <h1 className={ `${spaceGrotesk.className} text-6xl mt-6 mb-12 `}>
        <div className="font-bold text-orange-500 -mb-2">Zeroscope text-to-video</div>
        <span className="text-4xl font-bold">A settings guide by Replicate</span>
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
      <div className="md:flex md:justify-between w-full">
        <div className="md:mr-4 md:w-1/2 w-full">
          <VideoForm formId="form1" />
        </div>
        <div className="md:mr-4 md:w-1/2 w-full md:block hidden">
          <VideoForm formId="form2" />
        </div>
      </div>

      <div className="max-w-prose text-xl">
        <h2 className={ `${spaceGrotesk.className} font-bold text-4xl mt-20 mb-8`}>Recommended settings</h2>

        <h3 className={ `${spaceGrotesk.className} font-bold text-2xl mt-8 mb-4`}>Start with the 576w model</h3>
        <p>Begin by generating videos using the <code>576w</code> model at 576x320 resolution. When you find a video that you like, <Link href="#upscaling">upscale it to 1024x576</Link> using the <code>xl</code> model.</p>

        <p>You could create a 1024x576 video directly by using the <code>xl</code> model, but this video will render with duplicate objects and will tend to have low coherency. It’s better to use a two-step process (unless you’re intentionally trying to get weirder results).</p>

        <h3 className={ `${spaceGrotesk.className} font-bold text-2xl mt-8 mb-4`}>Number of frames and FPS (frames-per-second)</h3>
        <p>Zeroscope v2 was trained on short 24 frame clips. Set your <code>num_frames</code> to 24 for the best results. You can try longer clips, but beyond 40 frames the video will completely degrade.</p>

        <p>For a smooth 1s video set the <code>fps</code> to 24. Alternatively, use 12 or 8 for a more jerky 2s or 3s video, then use a <Link href="#interpolate">video interpolater</Link> to fill in the missing frames and make the video smooth again.</p>

        <h3 className={ `${spaceGrotesk.className} font-bold text-2xl mt-8 mb-4`}>Guidance scale</h3>

        <p>This determines how much the model pays attention to your prompt. Too low and you see a grayscale mess, too high and the video will look distorted, with color artifacts. The sweet-spot is between 10 and 15, but try pushing this higher if your prompt is being ignored. Try setting <code>guidance_scale</code> to 12.5 to start with.</p>

        <h3 className={ `${spaceGrotesk.className} font-bold text-2xl mt-8 mb-4`}>Steps</h3>

        <p>How many inference steps will be used to generate your video. More steps give better quality and coherency, but takes longer to generate. Fewer steps will give a lower quality video but will generate quickly – a good setting for fast prompt experimentation. Going above 100 steps will not improve your video.</p>

        <p>Try setting <code>num_inference_steps</code> to 50 to start with.</p>

        <h2 className={ `${spaceGrotesk.className} font-bold text-4xl mt-20 mb-8`} id="upscaling">Upscaling</h2>

        <p>When you have your 576x320 video, you can upscale it with the <code>xl</code> model.</p>

        <p>You should:</p>

        <ul className="list-disc ml-6 mb-4">
          <li>reuse the same prompt and negative prompt</li>
          <li>set <code>init_video</code> to the video you want to upscale</li>
          <li>pick an <code>init_weight</code>, try 0.2</li>
          <li>use a 1024x576 resolution</li>
        </ul>

        <p>
          <a href="https://replicate.com/p/dujigjlbxyagw5fxctrde6tthq">View an example prediction</a>
        </p>

        <p>Try experimenting with the prompt too, you can get some <a href="https://replicate.com/p/yuxczvdbuias2mqdsvhbjqsdpi">weird results</a>.</p>

        <div className="mt-8 mb-8">
          <VideoPlayer video="/videos/clown_fish_upscale.mp4" autoPlay={false} />
        </div>

        <h3 className={ `${spaceGrotesk.className} font-bold text-2xl mt-8 mb-4`} id="interpolate">Interpolating video</h3>

        <p>Smooth out your video with frame interpolation.</p>

        <p>Try using:</p>

        <ul className="list-disc ml-6 mb-8">
          <li><a href="https://runwayml.com/ai-magic-tools/frame-interpolation/">RunwayML</a></li>
          <li><a href="https://www.topazlabs.com/topaz-video-ai">Topaz Video AI</a></li>
        </ul>

        <VideoPlayer video="/videos/clown_fish_upscale_interpolated.mov" autoPlay={false} />
      </div>

      <footer className="mt-20">
        <a href="https://replicate.com/" title="Replicate" className="inline-block -ml-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="m-3 mb-1 w-40 fill-current" viewBox="0 0 512 120">
            <polygon points="86.96 0 86.96 10.74 12.03 10.74 12.03 95.41 0 95.41 0 0 86.96 0"></polygon>
            <polygon points="86.96 20.37 86.96 31.11 34.75 31.11 34.75 95.41 22.71 95.41 22.71 20.37 86.96 20.37"></polygon>
            <polygon points="86.96 40.67 86.96 51.47 57.46 51.47 57.46 95.41 45.42 95.41 45.42 40.67 86.96 40.67"></polygon>
            <path d="m121.21,39.62c14.32,0,26.35,9.5,26.35,27.16,0,1.17,0,2.16-.12,3.95h-43.02c.56,8.95,7.78,14.87,16.85,14.87,7.65,0,12.78-3.52,15.61-8.33l9.2,6.54c-4.94,7.78-13.45,12.71-24.93,12.71-16.6,0-28.57-11.79-28.57-28.45.06-16.11,12.03-28.45,28.64-28.45m-16.17,22.28h30.43c-1.3-7.9-7.65-12.16-14.69-12.16s-14.13,4.07-15.74,12.16"></path>
            <path d="m159.78,40.67h12.03v7.34c3.09-4.38,9.75-8.39,17.59-8.39,15,0,26.35,12.78,26.35,28.45s-11.36,28.45-26.35,28.45c-7.9,0-14.57-4.07-17.59-8.46v30.18h-12.03V40.67Zm27.46,9.87c-9.75,0-16.42,7.65-16.42,17.53s6.67,17.53,16.42,17.53,16.29-7.65,16.29-17.53-6.67-17.53-16.29-17.53"></path>
            <rect x="228.04" y="13.33" width="12.03" height="82.02"></rect>
            <path d="m262.3,28.76c-4.38,0-8.08-3.58-8.08-8.08s3.7-7.96,8.08-7.96,7.96,3.64,7.96,7.96c0,4.51-3.46,8.08-7.96,8.08m-5.99,11.91h12.03v54.68h-12.03v-54.68Z"></path>
            <path d="m309.45,96.46c-16.42,0-28.88-12.28-28.88-28.45s12.47-28.45,28.88-28.45c11.29,0,20.8,6.05,25.49,15.12l-10.49,5.68c-2.65-5.55-7.96-9.63-15-9.63-9.75,0-16.6,7.53-16.6,17.28s6.91,17.28,16.6,17.28c6.97,0,12.34-4.07,15-9.63l10.49,5.68c-4.69,9.13-14.26,15.12-25.49,15.12"></path>
            <path d="m368.39,39.62c7.9,0,14.44,4.07,17.53,8.39v-7.34h12.03v54.68h-12.03v-7.34c-3.09,4.38-9.63,8.46-17.53,8.46-15,0-26.35-12.78-26.35-28.45s11.36-28.39,26.35-28.39m2.22,10.92c-9.75,0-16.29,7.65-16.29,17.53s6.54,17.53,16.29,17.53,16.29-7.65,16.29-17.53-6.6-17.53-16.29-17.53"></path>
            <polygon points="418.56 95.41 418.56 51.41 407.14 51.41 407.14 40.67 418.56 40.67 418.56 25.49 430.6 25.49 430.6 40.67 451.33 40.67 451.33 51.41 430.6 51.41 430.6 84.61 451.33 84.61 451.33 95.41 418.56 95.41"></polygon>
            <path d="m485.65,39.62c14.32,0,26.35,9.5,26.35,27.16,0,1.17,0,2.16-.12,3.95h-43.02c.56,8.95,7.78,14.87,16.85,14.87,7.65,0,12.78-3.52,15.61-8.33l9.2,6.54c-4.94,7.78-13.45,12.71-24.93,12.71-16.6,0-28.57-11.79-28.57-28.45.12-16.11,12.03-28.45,28.64-28.45m-16.17,22.28h30.43c-1.3-7.9-7.65-12.16-14.69-12.16s-14.07,4.07-15.74,12.16"></path>
          </svg>
        </a>
      </footer>
    </main>
  );
}
