"use client";
import React, { useRef, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SliderProps } from "./slider.types";

export const Slider: React.FC<SliderProps> = ({
  data,
  isDescription = false,
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
            slidesPerView: isDescription ? 2.5 : 2.5,
            spaceBetween: 8,
          },
          320: {
            slidesPerView: isDescription ? 2.5 : 2.5,
            spaceBetween: 8,
          },
          640: {
            slidesPerView: isDescription ? 2.5 : 4.5,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: isDescription ? 3 : 4,
            spaceBetween: 8,
          },
          1024: {
            slidesPerView: isDescription ? 4 : 5,
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
                className={`${
                  isDescription ? "swiper-item " : ""
                } flex flex-col slide-content rounded-md justify-center items-center w-full h-full`}
              >
                <div
                  className={`relative w-full ${
                    isDescription ? "h-[60%]" : "h-full"
                  }`}
                >
                  <div
                    className={`w-full ${
                      isDescription ? "" : "bg-dark"
                    } h-full relative overflow-hidden`}
                  >
                    <Image
                      width={0}
                      height={0}
                      className={`w-full h-full overflow-hidden img-slide ${
                        isDescription
                          ? "rounded-md "
                          : "rounded-lg blur-[0.3px] "
                      } `}
                      src={item?.path}
                      style={{ objectFit: "cover" }}
                      alt="dd"
                    />

                    {!isDescription && data?.[0].logo && (
                      <>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Image
                            src={item?.logo}
                            alt="Logo"
                            width={0}
                            className="w-40 h-5 md:w-48 md:h-10 z-30 overflow-visible scale-y-125 scale-x-150"
                            style={{ objectFit: "contain" }}
                            height={0}
                          />
                        </div>
                        <div className="absolute inset-0 rounded-lg shadow-inner-bottom"></div>
                      </>
                    )}
                    <div>
                      {item?.logo && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className={`cursor-pointer absolute ${
                            isDescription
                              ? " bottom-0 top-0 right-0 left-0 m-auto md:block player-icon md:invisible size-8 md:size-12 hover:scale-[0.7] active:scale-[1.4]"
                              : "size-6 bottom-2 right-2 "
                          }  transition-all text-base-content-bg`}
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
                      )}
                    </div>
                  </div>
                  {item?.logo && (
                    <span className="absolute felx justify-center items-center right-[72%] md:right-[80%] xl:right-[88%] bottom-1 md:bottom-2 left-2 bg-base-75 w-8 ">
                      <p className="text-white text-[10px] md:text-sm text-center ">02:19</p>
                    </span>
                  )}
                </div>
                {isDescription ? (
                  <div className="pb-[9px] md:pb-0 flex justify-center items-center flex-col w-full h-[40%] md:h-[30%]">
                    <div className=" flex flex-col md:mt-4 md:grid md:grid-cols-12 justify-start md:justify-between md:items-center gap-1 w-full mt-4">
                      <div className="col-span-3 mb-1 md:bg-box-slider-bg-text text-nowrap text-base-content-slider md:py-1 md:px-1 md:flex md:justify-center text-[10px] md:rounded-[20px]">
                        {item?.descriptions?.title}
                      </div>
                      <div className="col-span-9 md:bg-box-slider-bg-text text-nowrap text-box-slider-text-l md:py-1 md:px-2 text-[9px] md:mr-auto md:rounded-[20px]">
                        <span>22 دقیقه پیش</span> <span> | </span>{" "}
                        <span> 17,526 نمایش</span>
                      </div>
                    </div>
                    <div className=" mt-1 md:mt-2 text-justify text-[12px] md:text-[14px] max-w-[100%] md:min-w-[100%]">
                      <h3 className="mb-1 text-ellipsis dark:text-description-text md:text-clip overflow-hidden whitespace-nowrap md:text-wrap md:ml-auto ">
                        {item?.descriptions?.dec}
                      </h3>
                    </div>
                  </div>
                ) : null}
              </div>
            </SwiperSlide>
          </div>
        ))}

        <div className="hidden md:block">
          {!isDisablePrev && (
            <div
              className={`hiddeh swiper-button-prev ${!isDescription ? "button-margin" : ""} bg-[#000000] rounded-[3px] transition-all`}
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
              className={`hiddeh swiper-button-next ${!isDescription ? "button-margin" : ""} bg-[#000000] rounded-[3px] rotate-180 transition-all`}
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
