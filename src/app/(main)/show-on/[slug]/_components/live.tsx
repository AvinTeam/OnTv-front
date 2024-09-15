"use client";
import React from "react";
import VideoJS from "@/app/_components/video";
import videojs from "video.js";

const Live = ({url}: {url:string}) => {
  const playerRef = React.useRef(null);

  const videoJsOptions1 = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    muted: true,
    sources: [
      {
        src: url || "",
        type: "application/x-mpegURL",
      },
    ],

  };
  const fallbackOptions1 = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    muted: true,
    sources: [
      {
        src: "https://nehzatmedia.arvanvod.ir/R7qEPk4Xey/ENL9QJ0rlQ/h_,144_200,240_400,360_800,480_1500,k.mp4.list/master.m3u8",
        type: "application/x-mpegURL",
      },
    ],
  };

  const handlePlayerReady = (player: any) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };
  return (
    <VideoJS
      data-setup='{"liveui": true}'
      options={videoJsOptions1}
      fallbackOptions={fallbackOptions1}
      onReady={handlePlayerReady}
    />
  );
};
export default Live;
