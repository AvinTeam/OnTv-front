"use client";
import React from "react";
import { IProps, OntenCardProps, Program } from "./onten-card.types";
import Image from "next/image";
import Link from "next/link";
import { ViewIcon } from "../../icons";

export const OntenCard: React.FC<OntenCardProps> = ({ data }) => {
  const isIProps = (data: Program | IProps): data is IProps => {
    return (data as IProps).program !== undefined;
  };

  const actualProgram: Program = isIProps(data) ? data.program : data;

  const { title, poster, description, tags, seen, id } = actualProgram;

  return (
    <>
      <div className="w-full h-full group flex flex-col gap-5 relative overflow-visible">
        <Link
          href={`show-onten/${id}`}
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
          </div>
          <div className="text-[11px] p-1 opacity-0 group-hover:opacity-100 flex absolute top-0 right-0 font-light z-50 -bottom-2 left-0 hover:transition hover:duration-[0.3s] ease-in-out items-end text-white">
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
              <div>{tags.map((tag: any) => tag.name).join("-")}</div>
              <p>{title}</p>
            </div>
          </div>
          <div
            className="opacity-0 h-full group-hover:opacity-100 rounded-md overflow-auto absolute top-6 transition duration-[0.3s] ease-in-out bottom-0 right-0  left-0 z-40"
            style={{
              background: "linear-gradient(180deg,transparent,rgba(0,0,0,.8))",
            }}
          ></div>
        </Link>
        <div className="w-full group text-white text-[10px] font-light md:text-[11px] xl:text-[13px]">
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};
