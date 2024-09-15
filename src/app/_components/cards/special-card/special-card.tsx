"use client";
import React, { useEffect } from "react";
import { SpecialCardProps } from "./special-card.types";
import Image from "next/image";
import { ViewIcon } from "../../icons";
import { useUserStore } from "@/stores/user.store";
import { useRouter } from "next/navigation";

export const SpecialCard: React.FC<SpecialCardProps> = ({ data, path }) => {
  const router = useRouter();
  const user = useUserStore((store) => store.user);
  const { seen, description, program, poster, title } = data;

  function truncate(text: string) {
    const maxLength = 25;
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  }
  const handleCardClick = () => {
    if (path == "cut") {
      router.push(`/${path}/${data?.slug}`);
      return;
    }
    if (user?.subscribe) {
      router.push(`/${path}/${data?.slug}`);
    } else {
      router.push(`/show-onten/${program?.slug}`);
    }
  };
  useEffect(()=>{
    console.log(data)
  },[])

  return (
    <>
      <div
        onClick={handleCardClick}
        className="w-full cursor-pointer h-full flex flex-col gap-2"
      >
        <div className="group w-full h-[85%]  relative">
          <div className="relative w-full h-full group">
            <Image
              src={poster?.[0]?.url}
              alt={title || "image"}
              width={0}
              style={{ objectFit: "cover" }}
              height={0}
              className="w-full h-full rounded-md overflow-auto"
            />
            {program?.is_paid && !user?.subscribe ? (
              <div className="flex gap-1 justify-center top-[7px] items-center absolute rounded-[25px] overflow-hidden left-1 bg-[#d82d44] px-2 py-[2px] z-50 text-[#fff] text-xs">
                <p className="text-[10px]">اشتراکی</p>
              </div>
            ) : null}
          </div>
          <div className=" text-[11px] p-1 opacity-0 group-hover:opacity-[1] flex absolute top-0 right-0 font-light z-30 bottom-1 left-0 hover:transition hover:duration-[0.3s] ease-in-out  items-end text-white">
            <div className="flex flex-col gap-1">
              <div
                className="h-[20px] w-[63px] rounded-[500px] flex justify-around items-center font-bold"
                style={{
                  backdropFilter: "blur(20px)",
                  backgroundColor: "hsla(0, 0%, 5%, .25)",
                  boxShadow: "inset 0 0 0 1px transparent",
                }}
              >
                <ViewIcon width={17} height={17} />
                <p className="font-light">{seen}</p>
              </div>
              <div>{program?.tags.map((tag: any) => tag.name).join(" - ")}</div>
              <p>{truncate(description ?? "")}</p>
            </div>
          </div>
          <div
            className="opacity-0 group-hover:opacity-[1] rounded-md overflow-auto absolute top-0  transition duration-[0.3s] ease-in-out right-0 bottom-0 left-0 z-10 "
            style={{
              background: "linear-gradient(180deg,transparent,rgba(0,0,0,.8))",
            }}
          ></div>
        </div>
        <div className="w-full h-[15%] text-white text-[10px] font-light md:text-[11px] xl:text-[13px]">
          <p>{title}</p>
        </div>
      </div>
    </>
  );
};
