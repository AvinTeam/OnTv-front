"use client";
import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import VideoJS from "@/app/_components/video";
import Image from "next/image";
import Link from "next/link";

const Live = () => {
  const playerRef = React.useRef(null);

  const videoJsOptions1 = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    muted: true,
    sources: [
      {
        src: "https://picamo.arvanlive.ir/hls/ch1/ch1.m3u8",
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
        src: "https://nehzatmedia.arvanvod.ir/R7qEPk4Xey/joW4p7bJeM/h_,110_200,182_400,274_800,366_1500,548_2500,k.mp4.list/master.m3u8",
        type: "application/x-mpegURL",
      },
    ],
  };
  const videoJsOptions2 = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    muted: true,
    sources: [
      {
        src: "https://picamo.arvanlive.ir/hls/ch2/ch2.m3u8",
        type: "application/x-mpegURL",
      },
    ],
  };
  const fallbackOptions2 = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    muted: true,
    sources: [
      {
        src: "https://nehzatmedia.arvanvod.ir/R7qEPk4Xey/joW4p7bJeM/h_,110_200,182_400,274_800,366_1500,548_2500,k.mp4.list/master.m3u8",
        type: "application/x-mpegURL",
      },
    ],
  };
  const videoJsOptions3 = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    muted: true,
    sources: [
      {
        src: "https://picamo.arvanlive.ir/hls/ch3/ch3.m3u8",
        type: "application/x-mpegURL",
      },
    ],
  };
  const fallbackOptions3 = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    muted: true,
    sources: [
      {
        src: "https://nehzatmedia.arvanvod.ir/R7qEPk4Xey/joW4p7bJeM/h_,110_200,182_400,274_800,366_1500,548_2500,k.mp4.list/master.m3u8",
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
    <div className="grid grid-cols-4 md:grid-cols-3 gap-2 md:gap-4n items-center overflow-hidden">
      <div className="relative col-span-4 md:col-span-2 row-span-2">
        <VideoJS
          options={videoJsOptions1}
          fallbackOptions={fallbackOptions1}
          onReady={handlePlayerReady}
        />
        <div className="absolute pointer-events-none row-auto left-auto rounded-b-xl -bottom-4  md:bottom-3 w-full h-20 bg-transparent">
          <div className="flex justify-between items-center">
            <div className="flex flex-col mr-4">
              <div className="flex justify-start items-center gap-2">
                <Image
                  width={0}
                  height={0}
                  alt="logo"
                  src={"/images/android-chrome-192x192.png"}
                  className="w-6 h-6 md:w-12 md:h-12"
                />
                <p className="font-bold text-[10px] md:text-[18px]  text-primary-content">
                  پخش زنده شبکه آن
                </p>
              </div>
              <p className="text-[9px] md:text-[14px] text-primary-content">
                در حال پخش / به سمت خدا / مجری نجم الدین شریعتی / ساعت 22 تا 24
              </p>
            </div>
            <Link href={"/verify"} className="flex text-[7px] md:text-sm pointer-events-auto justify-center text-nowrap items-center text-primary-content hover:bg-box-slider-bg-text cursor-pointer ml-2 md:ml-4 border bottom-3 px-1 md:px-4 py-1 md:py-2 rounded-sm md:rounded-md ">
              جدول پخش
            </Link>
          </div>
        </div>
      </div>
      <div className="relative col-span-2 md:col-span-1">
        <VideoJS
          options={videoJsOptions2}
          fallbackOptions={fallbackOptions2}
          onReady={handlePlayerReady}
        />
        <div className="absolute pointer-events-none row-auto left-auto rounded-b-xl mr-1 md:mr-2 -bottom-8 md:bottom-0 w-full h-20 bg-transparent">
          <div className="flex flex-col justify-start items-start">
            <div className="flex justify-start items-center gap-1 md:gap-2">
              <Image
                width={0}
                height={0}
                alt="logo"
                style={{ objectFit: "fill" }}
                src={"/images/logo/Group 949.png"}
                className="w-6 h-6 md:w-12 md:h-12"
              />
              <p className="font-bold text-[8px] md:text-[14px] text-primary-content">
                پخش زنده شبکه آن
              </p>
            </div>
            <p className="text-[6px] md:text-[10px] text-primary-content">
              در حال پخش / به سمت خدا / مجری نجم الدین شریعتی / ساعت 22 تا 24
            </p>
          </div>
        </div>
      </div>
      <div className="relative col-span-2 md:col-span-1">
        <VideoJS
          options={videoJsOptions3}
          fallbackOptions={fallbackOptions3}
          onReady={handlePlayerReady}
        />
        <div className="absolute pointer-events-none row-auto left-auto rounded-b-xl -bottom-8 mr-1 md:mr-2 md:bottom-0 w-full h-20 bg-transparent">
          <div className="flex flex-col justify-start items-start">
            <div className="flex justify-start items-center gap-1 md:gap-2">
              <Image
                width={0}
                style={{ objectFit: "cover" }}
                height={0}
                alt="logo"
                src={"/images/logo/Group 951.png"}
                className="w-6 h-6 md:w-12 md:h-12"
              />
              <p className="font-bold text-[8px] md:text-[14px] text-primary-content">
                پخش زنده شبکه آن
              </p>
            </div>
            <p className="text-[6px] md:text-[10px] text-primary-content">
              در حال پخش / به سمت خدا / مجری نجم الدین شریعتی / ساعت 22 تا 24
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Live;
