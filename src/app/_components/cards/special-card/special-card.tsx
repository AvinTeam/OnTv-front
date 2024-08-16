"use client";
import React, { useState } from "react";
import { SpecialCardProps } from "./special-card.types";
import Image from "next/image";
import Link from "next/link";
import { ViewIcon } from "../../icons";

export const SpecialCard: React.FC<SpecialCardProps> = ({ data }) => {
  const { seen, description, program} = data
  return (
    <>
      <div className="w-full h-full flex flex-col gap-2">
        <Link href={"/show-on"} className="group w-full h-[85%]  relative">
          <div className=" w-full h-full group">
            <Image
              src={program?.poster[0]?.url}
              alt={program?.title}
              width={0}
              style={{ objectFit: "cover" }}
              height={0}
              className="w-full h-full rounded-md overflow-auto"
            />
          </div>
          <div className=" text-[11px] p-1 opacity-0 group-hover:opacity-[1] flex absolute top-0 right-0 font-light z-30 bottom-1 left-0 hover:transition hover:duration-[0.3s] ease-in-out  items-end text-white">
            <div className="flex flex-col gap-1">
              <div
                className="h-[20px] w-[70px] rounded-[500px] flex justify-around items-center font-bold"
                style={{
                  backdropFilter: "blur(20px)",
                  backgroundColor: "hsla(0, 0%, 5%, .25)",
                  boxShadow: "inset 0 0 0 1px transparent",
                }}
              >
                <ViewIcon />
                {seen}
              </div>
              <div>
                {program?.tags.map((tag: any) => tag.name).join(" - ")}
              </div>
              <p>{program?.title}</p>
            </div>
          </div>
          <div
            className="opacity-0 group-hover:opacity-[1] rounded-md overflow-auto absolute top-0  transition duration-[0.3s] ease-in-out right-0 bottom-0 left-0 z-10 "
            style={{
              background: "linear-gradient(180deg,transparent,rgba(0,0,0,.8))",
            }}
          ></div>
        </Link>
        <div className="w-full h-[15%] text-white text-[10px] font-light md:text-[11px] xl:text-[13px]">
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};
