"use client";
import React from "react";
import { IProps, OntenCardProps, Program } from "./onten-card.types";
import Image from "next/image";
import Link from "next/link";
import { ViewIcon } from "../../icons";
import { useUserStore } from "@/stores/user.store";

export const OntenCard: React.FC<OntenCardProps> = ({ data }) => {
  const isSubscribe = useUserStore((store) => store.user?.subscribe);
  const isIProps = (data: Program | IProps): data is IProps => {
    return (data as IProps).program !== undefined;
  };

  const actualProgram: Program = isIProps(data) ? data.program : data;

  const { title, poster, description, tags, seen, id, slug, is_paid } = actualProgram;

  function truncate(text: string) {
    const maxLength = 25;
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  }

  return (
    <>
      <div className="w-[215px] h-full px-1 group flex flex-col gap-5 relative overflow-visible">
        <Link
          href={`/show-onten/${slug}`}
          className="group w-full h-[80%] relative overflow-visible"
        >
          <div className="relative group w-full h-full flex justify-center items-center">
            <div className="absolute group-hover:opacity-0 transition-all rounded-md top-[6px]  w-[90%] h-full z-10">
              <Image
                src={poster[0].url}
                alt={"description"}
                layout="fill"
                className="rounded-md overflow-auto opacity-70"
              />
            </div>
            <div className="absolute group-hover:opacity-0 transition-all rounded-md top-[10px] w-[95%] h-full z-20">
              <Image
                src={poster[0].url}
                alt={"description"}
                layout="fill"
                className="rounded-md overflow-auto opacity-85"
              />
            </div>
            <div className="relative rounded-md group top-[15px] w-full h-full z-30">
              <Image
                src={poster[0].url}
                alt={"description"}
                layout="fill"
                objectFit="cover"
                className="rounded-md overflow-auto"
              />
            </div>
            {is_paid && !isSubscribe ? (
              <div className="flex gap-1 justify-center top-[20px] items-center absolute rounded-[25px] overflow-hidden left-1 bg-[#d82d44] px-2 py-[2px] z-50 text-[#fff] text-xs">
                 <p className="text-[10px]">اشتراکی</p>
              </div>
            ) : null}
          </div>
          <div className="text-[11px] p-1 opacity-0 group-hover:opacity-100 flex absolute top-0 right-0 font-light z-50 -bottom-2 left-0 hover:transition hover:duration-[0.3s] ease-in-out items-end text-white">
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
              <div>{tags.map((tag: any) => tag.name).join("-")}</div>
              <p>{truncate(description)}</p>
            </div>
          </div>
          <div
            className="opacity-0 top-[15px] h-full group-hover:opacity-100 rounded-md overflow-auto absolute transition duration-[0.3s] ease-in-out right-0  left-0 z-40"
            style={{
              background: "linear-gradient(180deg,transparent,rgba(0,0,0,.8))",
            }}
          ></div>
        </Link>
        <div className="w-full group text-white text-[10px] font-light md:text-[11px] xl:text-[13px]">
          <p>{title}</p>
        </div>
      </div>
    </>
  );
};
