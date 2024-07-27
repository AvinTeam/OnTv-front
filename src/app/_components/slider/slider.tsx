"use client";
import React, { useRef, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SliderProps } from "./slider.types";
import Image from "next/image";

export const Slider: React.FC<SliderProps> = ({
  data,
  Component,
  displayCount,
}: SliderProps) => {
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
    <div className={`select-none container h-full flex w-full overflow-visible`}>
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
            slidesPerView: displayCount === "eight" ? 2.5 : 1.5,
            spaceBetween: 8,
          },
          320: {
            slidesPerView: displayCount === "eight" ? 3 : 1.5,
            spaceBetween: 8,
          },
          437: {
            slidesPerView: displayCount === "eight" ? 4 : 1.5,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 8,
          },
          984: {
            slidesPerView: displayCount === "eight" ? 6 : 4,
            spaceBetween: 8,
          },
          1200: {
            slidesPerView: displayCount === "eight" ? 8 : 5,
            spaceBetween: 5,
          },
        }}
        onSlideChange={(e) => {
          setIsDisablePrev(e.isBeginning);
          setIsDisableNext(e.isEnd);
        }}
      >
        {data?.map((item: any, idx) => (
          <SwiperSlide key={idx}>
            <Component {...item} />
          </SwiperSlide>
        ))}
        {displayCount !== "eight" && (
          <div className="hidden md:block">
            {!isDisablePrev && (
              <div
                className={`hiddeh h-[100px] swiper-button-prev bg-[#000000] rounded-[3px] transition-all`}
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
                className={`hiddeh swiper-button-next bg-[#000000] rounded-[3px] rotate-180 transition-all`}
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
        )}
      </Swiper>
    </div>
  );
};
