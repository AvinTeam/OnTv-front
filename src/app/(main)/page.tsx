import React from "react";
import "../globals.css";
import Live from "../_components/live/live";
import { Slider } from "../_components/slider/slider";

import Image from "next/image";
import mov_11 from "../../../public/images/Mask Group 13 (2).png";
import mov_12 from "../../../public/images/Mask Group 10.png";
import mov_13 from "../../../public/images/Image 28.png";
import mov_14 from "../../../public/images/Image 27.png";
import mov_21 from "../../../public/images/Mask Group 29.png";
import mov_22 from "../../../public/images/Mask Group 30.png";
import mov_23 from "../../../public/images/Mask Group 31.png";
import mov_24 from "../../../public/images/Mask Group 33.png";
import banner from "../../../public/images/banner.jpg";

import { API_URL } from "@/configs/global";
import { OntenCard } from "../_components/cards/onten-card";
import { SpecialCard } from "../_components/cards/special-card";
import Link from "next/link";
import BannerFull from "../_components/banners/banner-full/banner-full";
import BannerTwo from "../_components/banners/banner-two/banner-two";
import BannerFour from "../_components/banners/banner-four/banner-four";

const dataDec: any = [
  {
    path: mov_11,
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: mov_13,
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: mov_14,
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: mov_12,
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: mov_11,
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: mov_12,
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: mov_13,
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: mov_14,
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
];
const dataDec5: any = [
  {
    path: mov_21,
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },

  {
    path: mov_22,
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },

  {
    path: mov_23,
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },

  {
    path: mov_24,
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },

  {
    path: mov_21,
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: mov_22,
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
];

async function gatLives() {
  const res = await fetch(`${API_URL}lives`, {
    cache: "no-store",
  });
  if (res.ok) return res.json();
}
async function getPostsIsUnderLive() {
  const res = await fetch(`${API_URL}post?is_under_live=1`, {
    cache: "no-store",
  });
  if (res.ok) return res.json();
}
async function getPostsIsSpecial() {
  const res = await fetch(`${API_URL}post?is_special=1`, {
    cache: "no-store",
  });
  if (res.ok) return res.json();
}
async function getPostsNews() {
  const res = await fetch(`${API_URL}post`, {
    cache: "no-store",
  });
  if (res.ok) return res.json();
}

export default async function HomePage() {
  // const [ lives] =
  //   await Promise.all([
  //     // getPostsNews(),
  //     // getPostsIsSpecial(),
  //     // getPostsIsUnderLive(),
  //     gatLives(),
  //   ]);

  // console.log(postsNews);
  // console.log(postsIsSpecial);
  // console.log(postsIsUnderLive?.posts?.data);
  // console.log(lives.lives.data[0]);
  // console.log("test");

  return (
    <main className="flex flex-col w-full overflow-x-scroll overflow-y-hidden bg-[#000000]">
      <div className="container mt-4 mb-4 px-2 xl:px-0 overflow-x-auto">
        {/* <Live data={lives?.lives?.data} /> */}
        <Live data={[
          { url: 'https://picamo.arvanlive.ir/hls/ch1/ch1.m3u8', slug: '', order: 0, title: '', user: '' },
          { url: 'https://picamo.arvanlive.ir/hls/ch1/ch2.m3u8', slug: '', order: 0, title: '', user: '' },
          { url: 'https://picamo.arvanlive.ir/hls/ch1/ch3.m3u8', slug: '', order: 0, title: '', user: '' },
        ]} />
      </div>

      <div className="container px-3 md:px-0 overflow-auto pt-2 mb-6">
        <div className="flex w-full justify-between my-3  md:pb-1 items-center">
          <p className="text-white text-sm md:text-xl">روی آن تن</p>
          <Link
            href={"#"}
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
        <div className="h-[230px] md:h-[300px] lg:h-[290px] 2xl:h-[350px]">
          <Slider Component={OntenCard} data={dataDec} displayCount={8} isShowIcon={false}/>
        </div>
      </div>

      {/* ===============================> start BANNER_SECTION <=============================*/}
      <BannerFour />
      {/* ===============================> end of BANNER_SECTION <=============================*/}

      <div className="container px-3 md:px-0  overflow-auto py-2 mb-4">
        <div className="flex w-full justify-between my-3  md:pb-1 items-center">
          <p className="text-white text-sm md:text-xl">ویژه ها</p>
          <Link
            href={"#"}
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
        <div className="h-[170px] md:h-[130px] lg:h-[160px] 2xl:h-[200px]">
          <Slider
            Component={SpecialCard}
            data={dataDec5}
            displayCount={5}
            isShowIcon
          />
        </div>
      </div>

      <div className="container px-3 md:px-0 overflow-auto pt-2 mb-6">
        <div className="flex w-full justify-between my-3  md:pb-1 items-center">
          <p className="text-white text-sm md:text-xl">روی آن تن</p>
          <Link
            href={"#"}
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
        <div className="h-[230px] md:h-[300px] lg:h-[290px] 2xl:h-[350px]">
          <Slider Component={OntenCard} data={dataDec} displayCount={8} isShowIcon={false}/>
        </div>
      </div>

      <div className="container px-3 md:px-0 overflow-auto pt-2 mb-6">
        <div className="flex w-full justify-between my-3  md:pb-1 items-center">
          <p className="text-white text-sm md:text-xl">روی آن تن</p>
          <Link
            href={"#"}
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
        <div className="h-[230px] md:h-[300px] lg:h-[290px] 2xl:h-[350px]">
          <Slider Component={OntenCard} data={dataDec} displayCount={8} isShowIcon={false} />
        </div>
      </div>

      {/* ===============================> start BANNER_SECTION <=============================*/}
      <BannerTwo />
      {/* ===============================> end of BANNER_SECTION <=============================*/}

      <div className="container px-3 md:px-0  overflow-auto py-2 mb-4">
        <div className="flex w-full justify-between my-3  md:pb-1 items-center">
          <p className="text-white text-sm md:text-xl">ویژه ها</p>
          <Link
            href={"#"}
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
        <div className="h-[170px] md:h-[130px] lg:h-[160px] 2xl:h-[200px]">
          <Slider
            Component={SpecialCard}
            data={dataDec5}
            displayCount={5}
            isShowIcon
          />
        </div>
      </div>

      <div className="container px-3 md:px-0  overflow-auto py-2 mb-4">
        <div className="flex w-full justify-between my-3  md:pb-1 items-center">
          <p className="text-white text-sm md:text-xl">ویژه ها</p>
          <Link
            href={"#"}
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
        <div className="h-[170px] md:h-[130px] lg:h-[160px] 2xl:h-[200px]">
          <Slider
            Component={SpecialCard}
            data={dataDec5}
            isShowIcon
            displayCount={5}
          />
        </div>
      </div>

      <div className="container px-3 md:px-0  overflow-auto py-2 mb-4">
        <div className="flex w-full justify-between my-3  md:pb-1 items-center">
          <p className="text-white text-sm md:text-xl">ویژه ها</p>
          <Link
            href={"#"}
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
        <div className="h-[170px] md:h-[130px] lg:h-[160px] 2xl:h-[200px]">
          <Slider
            Component={SpecialCard}
            data={dataDec5}
            isShowIcon
            displayCount={5}
          />
        </div>
      </div>

      {/* ===============================> start BANNER_SECTION <=============================*/}
      {/* <BannerFour classname="mt-2" /> */}
      {/* ===============================> end of BANNER_SECTION <=============================*/}


      {/* ========================documentry section ============================== */}
      {/* <div className="py-6 md:py-10 bg-[#4A4A4A] px-2 md:px-6 h-[600px] md:h-[880px] lg:h-[880px] xl:h-[540px] overflow-x-auto overflow-y-hidden ">
        <div className="container">
          <div className="flex justify-between px-4 mb-4 items-center">
            <p className="text-primary text-sm md:text-xl">
              {" "}
              جدیدترین مستند ها{" "}
            </p>
            <p className="text-base-content text-[10px] md:text-md lg:text-sm">
              نمایش همه
            </p>
          </div>
          <hr className="w-full pb-4 border-t-[#A0ADB8]" />
          <div className="mt-5 flex flex-col xl:flex-row justify-between gap-10">
            <Link
              href={"/show-on"}
              className="relative h-[170px] md:h-[350px] xl:h-[350px] mx-auto"
            >
              <Image
                alt="poster"
                src={poster1}
                width={0}
                height={0}
                style={{ objectFit: "cover" }}
                className="h-full w-auto rounded-md"
              />
              <div className="absolute bottom-0 md:bottom-6 flex justify-between items-center">
                <div>
                  <p className="text-[11px] mr-4 md:text-md xl:text-3xl md:mr-6 text-white">
                    جهانمرد
                  </p>
                  <p className="text-[10px] mr-5 md:text-sm font-thin xl:text-xl md:mr-8 text-white">
                    صحبت های شهید حسین امیرعبداللهیان در مورد شخصیت عظیم سردار
                    دلها شهید حاج قاسم سلیمانی
                  </p>
                </div>
                <p className="text-xs md:text-md mb-2 md:mb-0 ml-2 -md:mr-4 md:ml-0 xl:ml-2 mt-20 text-white">
                  32:68
                </p>
              </div>
            </Link>
            <div className="ml-auto flex flex-col justify-between items-center gap-4">
              <Link href={"/show-on"} className="flex gap-4">
                <Image
                  alt="poster"
                  src={poster2}
                  width={0}
                  height={0}
                  className="h-[70px] md:h-[108px] w-auto rounded-md"
                />
                <div className="text-link-footer-title">
                  <p className="text-sm md:text-xl">مستند نردبان</p>
                  <p className="text-xs md:text-md text-justify">
                    صحبت های شهید حسین امیرعبداللهیان در مورد شهید خصیت عظیم
                    سردار دلها حاج قاسم سلیمانی
                  </p>
                </div>
              </Link>

              <Link href={"/show-on"} className="flex gap-4">
                <Image
                  alt="poster"
                  src={poster3}
                  width={0}
                  height={0}
                  className="h-[70px] md:h-[108px] w-auto rounded-md"
                />
                <div className="text-link-footer-title">
                  <p className="text-sm md:text-xl">سلاح ایرانی</p>
                  <p className="text-xs md:text-md text-justify">
                    صحبت های شهید حسین امیرعبداللهیان در مورد شهید خصیت عظیم
                    سردار دلها حاج قاسم سلیمانی
                  </p>
                </div>
              </Link>

              <Link href={"/show-on"} className="flex gap-4">
                <Image
                  alt="poster"
                  src={poster4}
                  width={0}
                  height={0}
                  className="h-[70px] md:h-[108px] w-auto rounded-md"
                />
                <div className="text-link-footer-title">
                  <p className="text-sm md:text-xl">عشق شمعدانی ها</p>
                  <p className="text-xs md:text-md text-justify">
                    صحبت های شهید حسین امیرعبداللهیان در مورد شهید خصیت عظیم
                    سردار دلها حاج قاسم سلیمانی
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
      {/* ======================== THE END OF documentry section ============================== */}
      {/* ========================  top of month section ============================== */}
      {/* <div className="py-6 md:py-10 px-2 md:px-6 h-[250px] md:h-[440px] overflow-x-auto overflow-y-hidden ">
        <div className="container mx-auto h-36 md:h-80 flex flex-col justify-center items-center">
          <div className="flex w-full justify-between pt-8 my-3 md:pt-8 md:pb-1 px-2 items-center">
            <p className="text-primary text-sm md:text-xl"> برترین های ماه</p>
            <p className="text-base-content text-[10px] md:text-md lg:text-sm">
              نمایش همه
            </p>
          </div>
          <hr className="w-full pb-4 border-t-base-70" />
          <Slider data={finalyData} isDescription />
        </div>
      </div> */}
      {/* ======================== THE END OF top of month section ============================== */}
      {/* 
      <div className="mt-2 md:mt-6 py-6 md:py-10 bg-base-50 px-2 md:px-6 h-[300px] md:h-[400px] overflow-x-auto overflow-y-hidden ">
        <div className="container w-[100%]">
          <p className="text-base-content text-[10px] md:text-md lg:text-sm text-nowrap flex justify-end -mb-6 mr-auto w-[100%] px-2">
            نمایش همه
          </p>
          <div className="container mx-auto h-44 md:h-[500px] flex flex-row-reverse">
            <Tabs
              tabs={[
                {
                  label: " پادکست",
                  content: (
                    <>
                      {" "}
                      <SliderPodcast data={podCast} />{" "}
                    </>
                  ),
                },
                {
                  label: "تحلیل روز",
                  content: (
                    <>
                      <div>منتن تست تحلیل</div>
                    </>
                  ),
                },
                {
                  label: " خبر دست اول",
                  content: (
                    <>
                      <div>متن تست خبر</div>
                    </>
                  ),
                },
                {
                  label: "انتخاب سر دبیر",
                  content: (
                    <>
                      <div>متن تست سر دبیر</div>
                    </>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </div> */}
      {/* ============== START mobile section ============ */}
      {/* <div className="py-6 md:py-10 px-2 md:px-6 h-[350px] md:h-[480px] lg:h-[440px] xl:h-[520px] overflow-x-auto overflow-y-hidden ">
        <div className="container mx-auto h-60 md:h-80 lg:h-80 xl:h-[440px] flex flex-col justify-center items-center">
          <div className="flex w-full justify-between pt-8 my-3 md:pt-8 md:pb-1 px-2 items-center">
            <p className="text-primary text-sm md:text-xl">
              {" "}
              ویژه های موبایلی{" "}
            </p>
            <p className="text-base-content text-[10px] md:text-md lg:text-sm">
              نمایش همه
            </p>
          </div>
          <hr className="w-full pb-4 border-t-base-70" />
          <Slider data={mobile} />
        </div>
      </div> */}
      {/* ============== THE END OF mobile section ============ */}

      {/* <div className="mt-2 md:mt-6 py-0 md:pt-4 xl:pt-7 md:pb-4 bg-base-50 px-2 md:px-6 h-[190px] md:h-[240px] lg:h-[300px] overflow-x-auto overflow-y-hidden ">
        <div className="container mx-auto h-36 md:h-44 lg:h-44 flex flex-col justify-center items-center">
          <div className="flex w-full justify-between pt-8 my-2 md:pt-8 md:pb-1 px-2 items-center">
            <p className="text-primary text-sm md:text-xl">
              برنامه های شبکه آن
            </p>
            <p className="text-base-content text-[10px] md:text-md lg:text-sm">
              نمایش همه
            </p>
          </div>
          <hr className="w-full pb-2 md:pb-4 border-t-[#A0ADB8]" />
          <SliderProgram data={dataPro} />
        </div>
      </div> */}

      {/* <div className="px-2 md:px-6 mt-0 h-[280px] md:h-[260px] overflow-x-auto overflow-y-hidden ">
        <div className="container mx-auto h-64 flex flex-col justify-center items-center">
          <div className="flex w-full justify-between pt-8 my-3 md:pt-4 md:pb-1 px-2 items-center">
            <p className="text-primary text-sm md:text-xl">هشتک های داغ</p>
            <p className="text-base-content text-[10px] md:text-md lg:text-sm">
              نمایش همه
            </p>
          </div>
          <hr className="w-full border-t-base-70 pb-6 overflow-hidden" />
          <div className="flex flex-wrap gap-1 p-0">
            {links.map((link, index) => (
              <div key={index} className="p-1 md:p-2 bg-gray-100 ">
                <Link
                  href="#"
                  className={`text-[10px] ${index === links?.length - 1
                    ? "text-base-content-slider"
                    : ""
                    } md:text-md lg:text-lg xl:text-xl`}
                >
                  {link}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <div className="mb-16"></div>
    </main>
  );
}
