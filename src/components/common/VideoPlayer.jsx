'use client';

import ReactPlayer from 'react-player'
import { Loader } from '../ui/Loader';

export default function VideoPlayer({ url, ...props }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        controls={true}
        playing={true}
        light={true} // Shows a thumbnail and play icon until clicked
        playIcon={<div className="bg-white/20 backdrop-blur-sm p-6 rounded-full text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12"><path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.717-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" /></svg></div>}
        fallback={<div className="w-full h-full flex items-center justify-center"><Loader /></div>}
        {...props}
      />
    </div>
  );
}
