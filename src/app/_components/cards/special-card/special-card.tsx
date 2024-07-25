"use client";
import React, { useState } from "react";
import { SpecialCardProps } from "./special-card.types";
import Image from "next/image";
import Link from "next/link";

export const SpecialCard: React.FC<SpecialCardProps> = ({
  alt,
  logo,
  descriptions,
  path,
}) => {
  return (
    <>
      <div className="w-full h-full flex flex-col gap-2">
        <Link href={"#"} className="group w-full h-[85%]  relative">
          <div className=" w-full h-full group">
            <Image
              src={path}
              alt={path}
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
                <svg
                  fill="#bababa"
                  height="20px"
                  width="20px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 80.794 80.794"
                  stroke="#bababa"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M79.351,38.549c-0.706-0.903-17.529-22.119-38.953-22.119c-21.426,0-38.249,21.216-38.955,22.119L0,40.396l1.443,1.847 c0.706,0.903,17.529,22.12,38.955,22.12c21.424,0,38.247-21.217,38.953-22.12l1.443-1.847L79.351,38.549z M40.398,58.364 c-15.068,0-28.22-13.046-32.643-17.967c4.425-4.922,17.576-17.966,32.643-17.966c15.066,0,28.218,13.045,32.642,17.966 C68.614,45.319,55.463,58.364,40.398,58.364z"></path>{" "}
                        <path d="M40.397,23.983c-9.052,0-16.416,7.363-16.416,16.414c0,9.053,7.364,16.417,16.416,16.417s16.416-7.364,16.416-16.417 C56.813,31.346,49.449,23.983,40.397,23.983z M40.397,50.813c-5.744,0-10.416-4.673-10.416-10.417 c0-5.742,4.672-10.414,10.416-10.414c5.743,0,10.416,4.672,10.416,10.414C50.813,46.14,46.14,50.813,40.397,50.813z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>{" "}
                12,234
              </div>
              <div>سیاسی - اجتماعی</div>
              <p>خبر های روز</p>
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
          <p>مراسم شهدای خدمت</p>
        </div>
      </div>
    </>
  );
};
