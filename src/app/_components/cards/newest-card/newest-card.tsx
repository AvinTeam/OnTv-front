"use client";
import React from "react";
import { NewestCardProps } from "./newest-card.types";
import Image from "next/image";
import Link from "next/link";
import { truncate } from "@/utils/functions";

export const NewestCard: React.FC<NewestCardProps> = ({ data }) => {
  return (
    <>
      <Link
        href={`/show-on/${data?.id}`}
        key={data?.alt}
        className="w-screen md:w-auto md:col-span-6 lg:col-span-3 overflow-auto mb-5 px-9 md:px-0"
      >
        <div className="rounded-md overflow-auto h-[60%]">
          <Image
            src={data?.poster?.[0]?.url}
            width={0}
            height={0}
            alt={data?.alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="pb-[3px] h-[40%] flex justify-center items-center flex-col w-full">
          <div className="mt-3 flex justify-between items-center gap-1 w-full">
            <div className="mb-1 bg-box-slider-bg-text text-nowrap text-base-content-slider py-1 px-2 flex justify-center text-[10px] rounded-[20px]">
              {truncate(data?.title, 30)}
            </div>
            <div className="col-span-9 bg-box-slider-bg-text text-nowrap text-box-slider-text-l py-1 px-2 text-[9px] mr-auto rounded-[20px]">
              <span className="text-white"> 32:65 </span>
              <span>
                <div className="inline">&nbsp;</div> |
              </span>
              <span>{` ${data?.seen} نمایش`}</span>
            </div>
          </div>
          <div className="break-words w-full mt-1 mb-auto md:mt-0 text-justify text-[12px] md:text-[14px] max-w-[100%] md:min-w-[100%]">
            <h3 className="mb-1 text-right text-ellipsis dark:text-description-text md:text-clip overflow-hidden whitespace-nowrap md:text-wrap md:ml-auto ">
              {data?.description}
            </h3>
          </div>
        </div>
      </Link>
    </>
  );
};
