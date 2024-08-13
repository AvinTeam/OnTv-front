"use client";
import React, { useState } from "react";
import { SliderTitleProps } from "./slider-title.types";
import Link from "next/link";

export const SliderTitle: React.FC<SliderTitleProps> = ({ title, link }) => {
  return (
    <>
      <div className="flex w-full justify-between my-3  md:pb-1 items-center">
        <p className="text-white text-sm md:text-xl">{title}</p>
        <Link
          href={link}
          className="text-[#f8bd3b] text-[11px] md:text-[13px] lg:text-[13px] flex gap-1 justify-center items-center"
        >
          نمایش همه
          <div className="rotate-180">
            <svg
              fill="#f8bd3b"
              height="8px"
              width="8px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512.005 512.005"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <g>
                    <path d="M388.418,240.923L153.751,6.256c-8.341-8.341-21.824-8.341-30.165,0s-8.341,21.824,0,30.165L343.17,256.005 L123.586,475.589c-8.341,8.341-8.341,21.824,0,30.165c4.16,4.16,9.621,6.251,15.083,6.251c5.461,0,10.923-2.091,15.083-6.251 l234.667-234.667C396.759,262.747,396.759,249.264,388.418,240.923z"></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </Link>
      </div>
    </>
  );
};
