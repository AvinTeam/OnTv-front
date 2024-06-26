"use client";
import React, { useRef, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SliderProps } from "./slider-podcast.types";

export const SliderPodcast: React.FC<SliderProps> = ({ data }: SliderProps) => {
  const [isDisablePrev, setIsDisablePrev] = useState<boolean>(true);
  const [isDisableNext, setIsDisableNext] = useState<boolean>(false);
  const sliderRef = useRef<SwiperRef>(null);

  const handlePrev = () => {
    console.log(sliderRef.current?.swiper);
    if (!sliderRef.current) return;

    sliderRef.current?.swiper.slidePrev();
  };

  const handleNext = () => {
    if (!sliderRef.current) return;
    sliderRef.current?.swiper.slideNext();
  };

  const lines = Array.from({ length: 40 }, (_, i) => ({
    height: Math.floor(Math.random() * (50 - 20 + 1)) + 20, // random height from 20 to 40
  }));

  return (
    <div className={`select-none container  h-full flex w-full  `}>
      <Swiper
        ref={sliderRef}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation={{
          nextEl: "custom-swiper-button-next",
          prevEl: "custom-swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 2.5,
            spaceBetween: 8,
          },
          320: {
            slidesPerView: 2.5,
            spaceBetween: 8,
          },
          640: {
            slidesPerView: 2.5,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 8,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 8,
          },
        }}
        onSlideChange={(e) => {
          setIsDisablePrev(e.isBeginning);
          setIsDisableNext(e.isEnd);
        }}
      >
        {data?.map((item, idx) => (
          <div className="w-full h-full" key={idx}>
            <SwiperSlide>
              <div
                className={
                  "flex flex-col slide-content rounded-md justify-center items-center w-full h-full"
                }
              >
                <div className={"relative w-full h-full "}>
                  <div
                    className={`w-full h-full flex flex-col relative overflow-hidden rounded-lg`}
                  >
                    <div
                      className={`h-[40%] overflow-hidden flex gap-[3px] md:gap-[7px] items-end`}
                      style={{ background: item?.bgColor }}
                    >
                      {lines.map((line, index) => (
                        <div
                          key={index}
                          className="bg-white w-[1px] mt-32 md:mt-[50px] opacity-[0.5]"
                          style={{ height: `${line.height}px`}}
                        ></div>
                      ))}
                    </div>
                    <div className="bg-[#6E7174] h-[60%] flex flex-col">
                      <p className="text-[#B3BAC4] mr-auto text-[8px] md:text-xs mt-1 md:mt-2 ml-2 md:ml-4">
                        {item?.time}
                      </p>
                      <p className="text-[#D9D9D9] text-[9px] md:text-sm mr-1 md:mr-3 mt-2">
                        {item?.description}
                      </p>
                      <div
                        className={`p-2 mr-auto ml-2 md:ml-0 md:p-3 text-[9px] md:text-xs flex w-8 md:w-16 h-1 md:h-8 mt-auto mb-2 md:mb-3 justify-center items-center md:mr-3 cursor-pointer text-base-50 rounded-[10px] md:rounded-[20px]`}
                        style={{ background: item?.bgColor }}
                      >
                        سرود
                      </div>
                    </div>
                    <div className={`cursor-pointer absolute bottom-0 top-[48px] md:top-[65px] right-[20px] left-0 size-6 md:size-12 rounded-[50%] transition-all bg-[#6E7174]`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className={`text-[#6ADCDC]`}
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}

        <div className="hidden md:block">
          {!isDisablePrev && (
            <div
              className={`hiddeh swiper-button-prev bg-[#4a4a4a] rounded-[3px] transition-all`}
              onClick={handlePrev}
            >
              <Image
                className="w-[30%] h-[30%] "
                src="/images/arrow.svg"
                alt="arrow-prev"
                width={0}
                style={{ objectFit: "cover" }}
                height={0}
              />
            </div>
          )}
          {!isDisableNext && (
            <div
              className={`hidden swiper-button-next bg-[#4a4a4a] rounded-[3px] rotate-180 transition-all`}
              onClick={handleNext}
            >
              <Image
                className="w-[30%] h-[30%] "
                src="/images/arrow.svg"
                alt="arrow-next"
                width={0}
                style={{ objectFit: "cover" }}
                height={0}
              />
            </div>
          )}
        </div>
      </Swiper>
    </div>
  );
};
