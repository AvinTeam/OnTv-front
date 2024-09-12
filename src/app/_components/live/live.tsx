"use client";
import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import VideoJS from "@/app/_components/video";
import Image from "next/image";
import logo from "../../../../public/images/android-chrome-192x192.png";
import { Live as LivesType } from "@/types/lives/live.interface";
const Live = ({ data }: { data: LivesType[] }) => {
  const playerRef = React.useRef(null);
  const videoJsOptions1 = {
    autoplay: true,
    controls: true,
    responsive: true,
    liveui: true,
    fluid: true,
    muted: true,
    sources: [
      {
        src: data?.length > 0 ? data[0]?.url : "",
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
    loop: true,
    sources: [
      {
        src: "https://nehzatmedia.arvanvod.ir/R7qEPk4Xey/ENL9QJ0rlQ/h_,144_200,240_400,360_800,480_1500,k.mp4.list/master.m3u8",
        type: "application/x-mpegURL",
      },
    ],
  };
  const videoJsOptions2 = {
    autoplay: true,
    controls: true,
    responsive: true,
    liveui: true,
    fluid: true,
    muted: true,
    sources: [
      {
        src: data?.length > 1 ? data[1]?.url : "",
        type: "application/x-mpegURL",
      },
    ],
  };
  const fallbackOptions2 = {
    autoplay: true,
    controls: true,
    responsive: true,
    muted: true,
    fluid: true,
    loop: true,
    sources: [
      {
        src: "https://nehzatmedia.arvanvod.ir/R7qEPk4Xey/ENL9QJ0rlQ/h_,144_200,240_400,360_800,480_1500,k.mp4.list/master.m3u8",
        type: "application/x-mpegURL",
      },
    ],
  };
  const videoJsOptions3 = {
    autoplay: true,
    controls: true,
    responsive: true,
    liveui: true,
    fluid: true,
    muted: true,
    sources: [
      {
        src: data?.length > 2 ? data[2]?.url : "",
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
    loop: true,
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

    player.on("ended", function () {
      videojs.log("player video is done!");
      player.play();
    });
  };

  return (
    <div className="grid grid-cols-4 select-none xl:grid-cols-3 gap-2 xl:gap-4n items-center overflow-hidden">
      <div className="group relative col-span-4 xl:col-span-2 row-span-2">
        <VideoJS
          options={videoJsOptions1}
          fallbackOptions={fallbackOptions1}
          onReady={handlePlayerReady}
        />
        <div
          className={`absolute group pointer-events-none row-auto left-auto rounded-b-xl mr-1 md:mr-2 -bottom-8 md:bottom-4 w-full h-20 bg-transparent  `}
        >
          <div className=" flex group justify-between items-center">
            <div className="hidden md:flex flex-col mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-[2.5s] ease-in-out">
              <div className="flex justify-start items-center gap-2">
                <Image
                  width={0}
                  height={0}
                  alt="logo"
                  src={logo}
                  objectFit="contain"
                  className="w-6 h-6 md:w-12 md:h-12"
                />
                <p className="font-bold text-[10px] md:text-[18px] text-primary-content">
                  پخش زنده شبکه آن
                </p>
              </div>
              <p className="text-[9px] md:text-[14px] text-primary-content">
                {/* در حال پخش / به سمت خدا / مجری نجم الدین شریعتی / ساعت 22 تا 24 */}
              </p>
            </div>

            {/* <Link
              href={"/show-on"}
              className="flex text-[7px] md:text-sm pointer-events-auto justify-center text-nowrap items-center text-primary-content hover:bg-box-slider-bg-text cursor-pointer ml-2 md:ml-4 border bottom-3 px-1 md:px-4 py-1 md:py-2 rounded-sm md:rounded-md "
            >
              جدول پخش
            </Link> */}
          </div>
        </div>
      </div>
      <div className="relative group col-span-2 xl:col-span-1">
        <VideoJS
          options={videoJsOptions2}
          fallbackOptions={fallbackOptions2}
          onReady={handlePlayerReady}
        />
        <div className="absolute flex justify-between items-center group pointer-events-none row-auto left-auto rounded-b-xl mr-1 md:mr-2 -bottom-8 md:bottom-2 w-full h-20 bg-transparent">
          <div className="hidden md:flex flex-col justify-start items-start opacity-0 group-hover:opacity-100 transition-opacity duration-[2.5s] ease-in-out">
            <div className="flex justify-start items-center gap-1 md:gap-2">
              <Image
                width={0}
                height={0}
                alt="logo"
                style={{ objectFit: "contain" }}
                src={logo}
                className="w-6 h-8 md:w-20 md:h-12"
              />
              <p className="font-bold text-[8px] md:text-[14px] text-primary-content">
                پخش زنده شبکه آن
              </p>
            </div>
            <p className="text-[6px] md:text-[10px] text-primary-content">
              {/* در حال پخش / به سمت خدا / مجری نجم الدین شریعتی / ساعت 22 تا 24 */}
            </p>
          </div>
          {/* <Link
            href={"/show-on"}
            className="flex text-[7px] md:text-sm pointer-events-auto justify-center text-nowrap items-center text-primary-content hover:bg-box-slider-bg-text cursor-pointer ml-2 md:ml-4 border mb-6 md:mb-0  px-1 md:px-4 py-1 md:py-2 rounded-sm md:rounded-md "
          >
            جدول پخش
          </Link> */}
        </div>
      </div>
      <div className="relative group col-span-2 xl:col-span-1">
        <VideoJS
          options={videoJsOptions3}
          fallbackOptions={fallbackOptions3}
          onReady={handlePlayerReady}
        />
        <div className="absolute flex justify-between items-center group pointer-events-none row-auto left-auto rounded-b-xl -bottom-8 mr-1 md:mr-2 md:bottom-2 w-full h-20 bg-transparent">
          <div className="hidden md:flex flex-col justify-start items-start opacity-0 group-hover:opacity-100 transition-opacity duration-[2.5s] ease-in-out">
            <div className="flex justify-start items-center gap-1 md:gap-2">
              <Image
                width={0}
                style={{ objectFit: "contain" }}
                height={0}
                alt="logo"
                src={logo}
                className="w-6 h-6 md:w-14 md:h-12"
              />
              <p className="font-bold text-[8px] md:text-[14px] text-primary-content">
                پخش زنده شبکه آن
              </p>
            </div>
            <p className="text-[6px] md:text-[10px] text-primary-content">
              {/* در حال پخش / به سمت خدا / مجری نجم الدین شریعتی / ساعت 22 تا 24 */}
            </p>
          </div>
          {/* <Link
            href={"/show-on"}
            className="flex text-[7px] md:text-sm pointer-events-auto justify-center text-nowrap items-center text-primary-content hover:bg-box-slider-bg-text cursor-pointer ml-2 md:ml-4 border mb-6 md:mb-0 px-1 md:px-4 py-1 md:py-2 rounded-sm md:rounded-md "
          >
            جدول پخش
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Live;
