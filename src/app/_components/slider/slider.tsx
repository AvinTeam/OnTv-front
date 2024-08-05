"use client";
import React, { useEffect, useRef, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SliderProps } from "./slider.types";
import Image from "next/image";
import { Skeleton } from "../skeleton";

export const Slider: React.FC<SliderProps> = ({
  data,
  Component,
  displayCount,
  isShowIcon = true,
  smCount,
  mdCount,
  lgCount,
}: SliderProps) => {
  const [isDisablePrev, setIsDisablePrev] = useState<boolean>(true);
  const [isDisableNext, setIsDisableNext] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
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

 

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-around w-full h-full">
        <div className={`flex flex-col justify-between w-[400px] h-[150px] md:w-[130px] md:h-[120px] lg:w-[200px] lg:h-[${displayCount === 8 ? "250px" : "150px"}]`}>
        <Skeleton type="rectangle" color={70} />
        <div className="w-16 h-2">
        <Skeleton type="rectangle" />
        </div>
        </div>
        <div className={`hidden md:flex flex-col justify-between md:w-[130px] md:h-[120px] lg:w-[200px] lg:h-[${displayCount === 8 ? "250px" : "150px"}]`}>
        <Skeleton type="rectangle" color={70} />
        <div className="w-16 h-2">
        <Skeleton type="rectangle" />
        </div>
        </div>
        <div className={`hidden md:flex flex-col justify-between md:w-[130px] md:h-[120px] lg:w-[200px] lg:h-[${displayCount === 8 ? "250px" : "150px"}]`}>
        <Skeleton type="rectangle" color={70} />
        <div className="w-16 h-2">
        <Skeleton type="rectangle" />
        </div>
        </div>
        <div className={`hidden md:flex flex-col justify-between md:w-[130px] md:h-[120px] lg:w-[200px] lg:h-[${displayCount === 8 ? "250px" : "150px"}]`}>
        <Skeleton type="rectangle" color={70} />
        <div className="w-16 h-2">
        <Skeleton type="rectangle" />
        </div>
        </div>
        <div className={`hidden md:flex flex-col justify-between md:w-[130px] md:h-[120px] lg:w-[200px] lg:h-[${displayCount === 8 ? "250px" : "150px"}]`}>
        <Skeleton type="rectangle" color={70} />
        <div className="w-16 h-2">
        <Skeleton type="rectangle" />
        </div>
        </div>
       </div>
    );
  }
  return (
    <div
      className={`select-none container h-full flex w-full overflow-visible`}
    >
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
            slidesPerView: smCount ? smCount : displayCount === 8 ? 2.5 : 1.5,
            spaceBetween: 8,
          },
          320: {
            slidesPerView: smCount ? smCount : displayCount === 8 ? 3 : 1.5,
            spaceBetween: 8,
          },
          437: {
            slidesPerView: mdCount ? smCount : displayCount === 8 ? 4 : 1.5,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: mdCount ? mdCount : 4,
            spaceBetween: 8,
          },
          984: {
            slidesPerView: lgCount ? lgCount : displayCount === 8 ? 6 : 4,
            spaceBetween: 8,
          },
          1200: {
            slidesPerView: lgCount ? lgCount : displayCount,
            spaceBetween: 5,
          },
        }}
        onSlideChange={(e) => {
          setIsDisablePrev(e.isBeginning);
          setIsDisableNext(e.isEnd);
        }}
      >
        {data?.map((item: any, idx: number) => (
          <SwiperSlide key={idx}>
            <Component {...item} />
          </SwiperSlide>
        ))}
        {isShowIcon && (
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
