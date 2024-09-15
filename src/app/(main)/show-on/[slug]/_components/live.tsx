"use client";
import React, { useState } from "react";
import VideoJS from "@/app/_components/video";
import videojs from "video.js";
import Image from "next/image";
import { LockIcon } from "@/app/_components/icons";
import { useUserStore } from "@/stores/user.store";
import Modal from "@/app/_components/modal/modal";
import { useRouter } from "next/navigation";
import { Button } from "@/app/_components/button";

const Live = ({
  url,
  thumbnail_url,
  accessible,
}: {
  url: string;
  thumbnail_url: string;
  accessible: boolean;
}) => {
  const router = useRouter();
  const user = useUserStore((store) => store.user);
  const playerRef = React.useRef(null);
  const [open, setOpen] = useState<boolean>(false);

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
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <>
          <div className="mt-2 mb-2 text-center w-[360px] text-[#e6e6e6]">
            برای مشاهده این محتوا باید اشتراک تهیه کنید
          </div>
          {!user?.id && (
            <Button
              className="mt-4 bg-primary py-2 text-white"
              onClick={() => router.push("/signin")}
            >
              ثبت نام{" "}
            </Button>
          )}
          {!user?.subscribe && user?.id && (
            <Button
              className="mt-4 bg-primary py-2 text-white"
              onClick={() => router.push("/user/packages")}
            >
              تهیه اشتراک{" "}
            </Button>
          )}
        </>
      </Modal>
      {accessible || user?.subscribe ? (
        <VideoJS
          data-setup='{"liveui": true}'
          options={videoJsOptions1}
          fallbackOptions={fallbackOptions1}
          onReady={handlePlayerReady}
        />
      ) : (
        <div
          onClick={() => setOpen(true)}
          className="relative rounded-lg overflow-auto"
        >
          <Image
            src={thumbnail_url}
            width={100}
            height={100}
            className="w-full h-full rounded-lg"
            alt="poster"
          />
          <div
            className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
            style={{
              background: "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(5px)",
            }}
          >
            <span
              className="w-16 h-16 rounded-full flex justify-center items-center bg-base-50"
              style={{
                background: "rgba(0, 0, 0, 0.4)",
                backdropFilter: "blur(14px)",
              }}
            >
              <LockIcon width={29} height={29} />
            </span>
          </div>
        </div>
      )}
    </>
  );
};
export default Live;
