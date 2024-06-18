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
            slidesPerView: isDescription ? 2.5 : 3.5,
            spaceBetween: 8,
          },
          320: {
            slidesPerView: isDescription ? 2.5 : 3.5,
            spaceBetween: 8,
          },
          640: {
            slidesPerView: isDescription ? 3.5 : 4.5,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: isDescription ? 3 : 4,
            spaceBetween: 8,
          },
          1024: {
            slidesPerView: isDescription ? 4 : 6,
            spaceBetween: 8,
          },
        }}
        onSlideChange={(e) => {
          setIsDisablePrev(e.isBeginning);
          setIsDisableNext(e.isEnd);
        }}
      >
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
              <div className=" w-full h-full rounded-[2px]">
                <Image
                  width={0}
                  height={0}
                  objectFit="fill"
                  className="w-full h-full blur-[1px] img-slide"
                  src="images/slide-2.webp"
                  alt="dd"
                />
              </div>{" "}
              <div
                className={`absolute ${
                  isDescription ? "bottom-[50%]" : "bottom-7"
                } ${
                  isDescription ? "right-[50%]" : "right-2"
                } w-1 h-1 cursor-pointer`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className={`${
                    isDescription
                      ? " hidden md:block player-icon invisible size-12 hover:scale-[0.7] active:scale-[1.4]"
                      : "size-6 "
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
              </div>
            </div>
            {isDescription ? (
              <div className="flex justify-center items-center flex-col w-full h-[40%] md:h-[30%]">
                <div className=" flex flex-col md:grid md:grid-cols-12 justify-start md:justify-between md:items-center gap-1 w-full mt-2 md:mt-0">
                  <div className="col-span-3 md:bg-box-slider-bg-text text-nowrap text-base-content-slider md:py-1 md:px-2 text-[10px] sm:rounded-sm md:rounded-[20%]">
                    خبر های روز
                  </div>
                  <div className="col-span-9 md:bg-box-slider-bg-text text-nowrap text-box-slider-text-l md:py-2 md:px-2 text-[9px] md:mr-auto sm:rounded-sm md:rounded-[20%]">
                    <span>22 دقیقه پیش</span> <span> | </span>{" "}
                    <span> 17,526 نمایش</span>
                  </div>
                </div>
                <div className=" mt-1 md:mt-2  text-justify text-[12px] max-w-[100%]">
                  <h3 className="text-ellipsis overflow-hidden whitespace-nowrap">
                    مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم
                  </h3>
                </div>
              </div>
            ) : null}
          </div>
        </SwiperSlide>
         
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
              <div className=" w-full h-full rounded-[2px]">
                <Image
                  width={0}
                  height={0}
                  objectFit="fill"
                  className="w-full h-full blur-[1px] img-slide"
                  src="images/slide-2.webp"
                  alt="dd"
                />
              </div>{" "}
              <div
                className={`absolute ${
                  isDescription ? "bottom-[50%]" : "bottom-7"
                } ${
                  isDescription ? "right-[50%]" : "right-2"
                } w-1 h-1 cursor-pointer`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className={`${
                    isDescription
                      ? " hidden md:block player-icon invisible size-12 hover:scale-[0.7] active:scale-[1.4]"
                      : "size-6 "
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
              </div>
            </div>
            {isDescription ? (
              <div className="flex justify-center items-center flex-col w-full h-[40%] md:h-[30%]">
                <div className=" flex flex-col md:grid md:grid-cols-12 justify-start md:justify-between md:items-center gap-1 w-full mt-2 md:mt-0">
                  <div className="col-span-3 md:bg-box-slider-bg-text text-nowrap text-base-content-slider md:py-1 md:px-2 text-[10px] sm:rounded-sm md:rounded-[20%]">
                    خبر های روز
                  </div>
                  <div className="col-span-9 md:bg-box-slider-bg-text text-nowrap text-box-slider-text-l md:py-2 md:px-2 text-[9px] md:mr-auto sm:rounded-sm md:rounded-[20%]">
                    <span>22 دقیقه پیش</span> <span> | </span>{" "}
                    <span> 17,526 نمایش</span>
                  </div>
                </div>
                <div className=" mt-1 md:mt-2  text-justify text-[12px] max-w-[100%]">
                  <h3 className="text-ellipsis overflow-hidden whitespace-nowrap">
                    مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم
                  </h3>
                </div>
              </div>
            ) : null}
          </div>
        </SwiperSlide>
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
              <div className=" w-full h-full rounded-[2px]">
                <Image
                  width={0}
                  height={0}
                  objectFit="fill"
                  className="w-full h-full blur-[1px] img-slide"
                  src="images/slide-2.webp"
                  alt="dd"
                />
              </div>{" "}
              <div
                className={`absolute ${
                  isDescription ? "bottom-[50%]" : "bottom-7"
                } ${
                  isDescription ? "right-[50%]" : "right-2"
                } w-1 h-1 cursor-pointer`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className={`${
                    isDescription
                      ? " hidden md:block player-icon invisible size-12 hover:scale-[0.7] active:scale-[1.4]"
                      : "size-6 "
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
              </div>
            </div>
            {isDescription ? (
              <div className="flex justify-center items-center flex-col w-full h-[40%] md:h-[30%]">
                <div className=" flex flex-col md:grid md:grid-cols-12 justify-start md:justify-between md:items-center gap-1 w-full mt-2 md:mt-0">
                  <div className="col-span-3 md:bg-box-slider-bg-text text-nowrap text-base-content-slider md:py-1 md:px-2 text-[10px] sm:rounded-sm md:rounded-[20%]">
                    خبر های روز
                  </div>
                  <div className="col-span-9 md:bg-box-slider-bg-text text-nowrap text-box-slider-text-l md:py-2 md:px-2 text-[9px] md:mr-auto sm:rounded-sm md:rounded-[20%]">
                    <span>22 دقیقه پیش</span> <span> | </span>{" "}
                    <span> 17,526 نمایش</span>
                  </div>
                </div>
                <div className=" mt-1 md:mt-2  text-justify text-[12px] max-w-[100%]">
                  <h3 className="text-ellipsis overflow-hidden whitespace-nowrap">
                    مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم
                  </h3>
                </div>
              </div>
            ) : null}
          </div>
        </SwiperSlide>
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
              <div className=" w-full h-full rounded-[2px]">
                <Image
                  width={0}
                  height={0}
                  objectFit="fill"
                  className="w-full h-full blur-[1px] img-slide"
                  src="images/slide-2.webp"
                  alt="dd"
                />
              </div>{" "}
              <div
                className={`absolute ${
                  isDescription ? "bottom-[50%]" : "bottom-7"
                } ${
                  isDescription ? "right-[50%]" : "right-2"
                } w-1 h-1 cursor-pointer`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className={`${
                    isDescription
                      ? " hidden md:block player-icon invisible size-12 hover:scale-[0.7] active:scale-[1.4]"
                      : "size-6 "
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
              </div>
            </div>
            {isDescription ? (
              <div className="flex justify-center items-center flex-col w-full h-[40%] md:h-[30%]">
                <div className=" flex flex-col md:grid md:grid-cols-12 justify-start md:justify-between md:items-center gap-1 w-full mt-2 md:mt-0">
                  <div className="col-span-3 md:bg-box-slider-bg-text text-nowrap text-base-content-slider md:py-1 md:px-2 text-[10px] sm:rounded-sm md:rounded-[20%]">
                    خبر های روز
                  </div>
                  <div className="col-span-9 md:bg-box-slider-bg-text text-nowrap text-box-slider-text-l md:py-2 md:px-2 text-[9px] md:mr-auto sm:rounded-sm md:rounded-[20%]">
                    <span>22 دقیقه پیش</span> <span> | </span>{" "}
                    <span> 17,526 نمایش</span>
                  </div>
                </div>
                <div className=" mt-1 md:mt-2  text-justify text-[12px] max-w-[100%]">
                  <h3 className="text-ellipsis overflow-hidden whitespace-nowrap">
                    مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم
                  </h3>
                </div>
              </div>
            ) : null}
          </div>
        </SwiperSlide>
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
              <div className=" w-full h-full rounded-[2px]">
                <Image
                  width={0}
                  height={0}
                  objectFit="fill"
                  className="w-full h-full blur-[1px] img-slide"
                  src="images/slide-2.webp"
                  alt="dd"
                />
              </div>{" "}
              <div
                className={`absolute ${
                  isDescription ? "bottom-[50%]" : "bottom-7"
                } ${
                  isDescription ? "right-[50%]" : "right-2"
                } w-1 h-1 cursor-pointer`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className={`${
                    isDescription
                      ? " hidden md:block player-icon invisible size-12 hover:scale-[0.7] active:scale-[1.4]"
                      : "size-6 "
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
              </div>
            </div>
            {isDescription ? (
              <div className="flex justify-center items-center flex-col w-full h-[40%] md:h-[30%]">
                <div className=" flex flex-col md:grid md:grid-cols-12 justify-start md:justify-between md:items-center gap-1 w-full mt-2 md:mt-0">
                  <div className="col-span-3 md:bg-box-slider-bg-text text-nowrap text-base-content-slider md:py-1 md:px-2 text-[10px] sm:rounded-sm md:rounded-[20%]">
                    خبر های روز
                  </div>
                  <div className="col-span-9 md:bg-box-slider-bg-text text-nowrap text-box-slider-text-l md:py-2 md:px-2 text-[9px] md:mr-auto sm:rounded-sm md:rounded-[20%]">
                    <span>22 دقیقه پیش</span> <span> | </span>{" "}
                    <span> 17,526 نمایش</span>
                  </div>
                </div>
                <div className=" mt-1 md:mt-2  text-justify text-[12px] max-w-[100%]">
                  <h3 className="text-ellipsis overflow-hidden whitespace-nowrap">
                    مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم
                  </h3>
                </div>
              </div>
            ) : null}
          </div>
        </SwiperSlide>
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
              <div className=" w-full h-full rounded-[2px]">
                <Image
                  width={0}
                  height={0}
                  objectFit="fill"
                  className="w-full h-full blur-[1px] img-slide"
                  src="images/slide-2.webp"
                  alt="dd"
                />
              </div>{" "}
              <div
                className={`absolute ${
                  isDescription ? "bottom-[50%]" : "bottom-7"
                } ${
                  isDescription ? "right-[50%]" : "right-2"
                } w-1 h-1 cursor-pointer`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className={`${
                    isDescription
                      ? " hidden md:block player-icon invisible size-12 hover:scale-[0.7] active:scale-[1.4]"
                      : "size-6 "
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
              </div>
            </div>
            {isDescription ? (
              <div className="flex justify-center items-center flex-col w-full h-[40%] md:h-[30%]">
                <div className=" flex flex-col md:grid md:grid-cols-12 justify-start md:justify-between md:items-center gap-1 w-full mt-2 md:mt-0">
                  <div className="col-span-3 md:bg-box-slider-bg-text text-nowrap text-base-content-slider md:py-1 md:px-2 text-[10px] sm:rounded-sm md:rounded-[20%]">
                    خبر های روز
                  </div>
                  <div className="col-span-9 md:bg-box-slider-bg-text text-nowrap text-box-slider-text-l md:py-2 md:px-2 text-[9px] md:mr-auto sm:rounded-sm md:rounded-[20%]">
                    <span>22 دقیقه پیش</span> <span> | </span>{" "}
                    <span> 17,526 نمایش</span>
                  </div>
                </div>
                <div className=" mt-1 md:mt-2  text-justify text-[12px] max-w-[100%]">
                  <h3 className="text-ellipsis overflow-hidden whitespace-nowrap">
                    مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم
                  </h3>
                </div>
              </div>
            ) : null}
          </div>
        </SwiperSlide>
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
              <div className=" w-full h-full rounded-[2px]">
                <Image
                  width={0}
                  height={0}
                  objectFit="fill"
                  className="w-full h-full blur-[1px] img-slide"
                  src="images/slide-2.webp"
                  alt="dd"
                />
              </div>{" "}
              <div
                className={`absolute ${
                  isDescription ? "bottom-[50%]" : "bottom-7"
                } ${
                  isDescription ? "right-[50%]" : "right-2"
                } w-1 h-1 cursor-pointer`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className={`${
                    isDescription
                      ? " hidden md:block player-icon invisible size-12 hover:scale-[0.7] active:scale-[1.4]"
                      : "size-6 "
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
              </div>
            </div>
            {isDescription ? (
              <div className="flex justify-center items-center flex-col w-full h-[40%] md:h-[30%]">
                <div className=" flex flex-col md:grid md:grid-cols-12 justify-start md:justify-between md:items-center gap-1 w-full mt-2 md:mt-0">
                  <div className="col-span-3 md:bg-box-slider-bg-text text-nowrap text-base-content-slider md:py-1 md:px-2 text-[10px] sm:rounded-sm md:rounded-[20%]">
                    خبر های روز
                  </div>
                  <div className="col-span-9 md:bg-box-slider-bg-text text-nowrap text-box-slider-text-l md:py-2 md:px-2 text-[9px] md:mr-auto sm:rounded-sm md:rounded-[20%]">
                    <span>22 دقیقه پیش</span> <span> | </span>{" "}
                    <span> 17,526 نمایش</span>
                  </div>
                </div>
                <div className=" mt-1 md:mt-2  text-justify text-[12px] max-w-[100%]">
                  <h3 className="text-ellipsis overflow-hidden whitespace-nowrap">
                    مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم
                  </h3>
                </div>
              </div>
            ) : null}
          </div>
        </SwiperSlide>
 
        <div className="hidden md:block">
          {!isDisablePrev && (
            <div
              className={`hiddeh swiper-button-prev bg-[#4a4a4a] rounded-[3px] transition-all`}
              onClick={handlePrev}
            >
              <img
                className="w-[30%] h-[30%] "
                src="/images/arrow.svg"
                alt=""
              />
            </div>
          )}
          {!isDisableNext && (
            <div
              className={`hidden swiper-button-next bg-[#4a4a4a] rounded-[3px] rotate-180 transition-all`}
              onClick={handleNext}
            >
              <img
                className="w-[30%] h-[30%] "
                src="/images/arrow.svg"
                alt=""
              />
            </div>
          )}
        </div>
      </Swiper>
    </div>
  );
};
