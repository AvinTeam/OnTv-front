"use client";

import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import lang_fa from "../../../../public/lang/videojs/fa.json";
type IOptionsType = {
  autoplay: boolean;
  controls: boolean;
  responsive: boolean;
  fluid: boolean;
  muted: boolean;
  sources: { src: string; type: string }[];
};
type IProp = {
    options: IOptionsType;
    onReady: (player: any)=> void;
    fallbackOptions: IOptionsType;
  }
export const VideoJS = ({
  options,
  onReady,
  fallbackOptions,
}: IProp) => {

  const videoRef = React.useRef<any>(null);
  const playerRef = React.useRef<any>(null);

  const handlePlayerError = (player: any) => {
    const error = player.error();
    console.error("Error occurred:", error);

    if (error.code === 4) {
      console.log("Switching to fallback video");
      player.src(fallbackOptions.sources);
      player.play();
    }
  };
  
  React.useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement("video-js");

      videoElement.classList.add("vjs-big-play-centered");
      videoRef?.current?.appendChild(videoElement);
      videojs.addLanguage("fa", lang_fa);
      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log("player is ready");
        onReady && onReady(player);
      }));

      player.on("error", () => handlePlayerError(player));
 
    } else {
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, fallbackOptions, videoRef, onReady, handlePlayerError]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player className="rounded-[15px] overflow-hidden">
      <div ref={videoRef} />
    </div>
  );
};

export default VideoJS;
