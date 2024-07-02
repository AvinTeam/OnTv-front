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
                      className={`w-[100%] h-[75px] md:h-[98px] relative overflow-hidden flex flex-col justify-center items-center`}
                      style={{ background: item?.bgColor }}
                    >
                      <Image
                        src={"/images/voice_rader.svg"}
                        alt="voice-rader"
                        width={0}
                        height={0}
                        className="w-[90%] h-[100px] absolute top-[15px] md:top-[28px] lg:top-[32px] xl:top-[24px]"
                      />
                    </div>
                    <div className="bg-[#6E7174] h-[110px] md:h-[140px] flex flex-col justify-between">
                      <p className="text-[#B3BAC4] mr-auto text-[8px] md:text-xs mt-1 md:mt-2 ml-2 md:ml-4">
                        {item?.time}
                      </p>
                      <p className="text-[#D9D9D9] text-[11px] md:text-sm mr-1 -mt-3 leading-4 mb-auto w-[100%] h-3 md:mt-5 ">
                        {item?.description}
                      </p>
                      <div
                        className={`mr-auto ml-2 md:ml-2 md:p-3 text-[10px] md:text-xs flex w-10 md:w-16 h-4 md:h-8 mt-3 md:mt-2 mb-3 md:mb-3 justify-center items-center lg:md:mr-3 cursor-pointer text-base-50 rounded-[10px] md:rounded-[20px]`}
                        style={{ background: item?.bgColor }}
                      >
                        سرود
                      </div>
                    </div>
                    <div
                      className={`cursor-pointer absolute bottom-0 top-[58px] md:top-[80px] right-[20px] left-0 size-9 md:size-12 rounded-[50%] transition-all bg-[#6E7174]`}
                    >
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
              className={`hiddeh swiper-button-prev pod bg-[#000000] rounded-[3px] transition-all`}
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
              className={`hidden swiper-button-next pod bg-[#000000] rounded-[3px] rotate-180 transition-all`}
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
