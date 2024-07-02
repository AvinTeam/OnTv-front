"use client";
import React, { useRef, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SliderProps } from "./slider-program.types";

export const SliderProgram: React.FC<SliderProps> = ({ data }: SliderProps) => {
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
            slidesPerView: 3,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 8,
          },
          1024: {
            slidesPerView: 3,
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
                className={`flex flex-col slide-content rounded-md justify-center items-center w-full h-full`}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <div className={`w-full h-full relative overflow-hidden`}>
                    <Image
                      width={0}
                      height={0}
                      className="img-pro w-full h-full overflow-hidden img-slide rounded-lg blur-[0.3px]"
                      src={item?.path}
                      style={{ objectFit: "cover" }}
                      alt="dd"
                    />
                    <div className="absolute flex inset-0 justify-around bg-[black] items-center text-white top-0 bottom-0 right-0 left-0 opacity-[0.5] "></div>
                    <div className="absolute flex inset-0 justify-center gap-4 md:gap-8 items-center text-white top-0 bottom-0 right-0 left-0  ">
                      <div className="bg-white p-1 md:p-3 lg:p-4 rounded-[50%] flex justify-center items-center">
                        <Image
                          width={0}
                          height={0}
                          className="img-pro w-6 h-6 md:h-12 md:w-12 lg:w-16 lg:h-16 overflow-hidden img-slide rounded-lg blur-[0.3px]"
                          src={item?.logo}
                          style={{ objectFit: "contain" }}
                          alt="dd"
                        />
                      </div>
                      <div className="flex flex-col gap-1 justify-center items-center">
                        <div className="text-white font-bold text-[10px] md:text-md lg:text-xl ">
                          {item.descriptions.title}
                        </div>
                        <div className="text-white text-[8px] md:text-xs lg:text-sm ">
                          {item.descriptions.dec}
                        </div>
                      </div>
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
                className="w-[30%] h-[30%]"
                src="/images/arrow.svg"
                alt="arrow-prev"
                width={0}
                style={{ objectFit: "contain" }}
                height={0}
              />
            </div>
          )}
          {!isDisableNext && (
            <div
              className={`hiddeh swiper-button-next pod bg-[#000000] rounded-[3px] rotate-180 transition-all`}
              onClick={handleNext}
            >
              <Image
                className="w-[30%] h-[30%] "
                src="/images/arrow.svg"
                alt="arrow-next"
                width={0}
                style={{ objectFit: "contain" }}
                height={0}
              />
            </div>
          )}
        </div>
      </Swiper>
    </div>
  );
};
