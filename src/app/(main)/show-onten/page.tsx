import { Slider } from "@/app/_components/slider/slider";
import Link from "next/link";
import mov_11 from "../../../../public/images/Mask Group 29.png";
import mov_12 from "../../../../public/images/Mask Group 30.png";
import mov_13 from "../../../../public/images/Mask Group 31.png";
import mov_14 from "../../../../public/images/Mask Group 33.png";
import Image from "next/image";
// import { OntenCard } from "@/app/_components/cards/onten-card";
import Box from "./components/box";
import { Fragment } from "react";

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
    path: mov_14,
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
const data = [
  { name: "محمد حسین دوست محمدی", title: "گارگردان و مدیر هنری" },
  { name: "محمد حسین دوست محمدی", title: "گارگردان و مدیر هنری" },
  { name: "محمد حسین دوست محمدی", title: "گارگردان و مدیر هنری" },
  { name: "محمد حسین دوست محمدی", title: "گارگردان و مدیر هنری" },
];
const bg =
  "https://gateway.telewebion.com/sites/default/files/images/backgrounds/1403/%D8%B3%D8%B1%D8%B2%D9%85%DB%8C%D9%86-%D9%85%D8%A7%D8%AF%D8%B1%DB%8C-%D9%81%D8%B5%D9%84-%D8%B3%D9%88%D9%85-3_0.jpg";
export default async function ShowOnten() {
  return (
    <div className="overflow-hidden">
      <div
        className="w-full h-[410px] relative flex py-4 md:py-2 bg-center bg-cover justify-center items-center bg-gradient-to-r from-[#221D1F] to-[#341173]"
        style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat" }}
      >
        {/* Overlay for shadow effect on the right and bottom */}
        <div className="absolute inset-0 to-100% bg-gradient-to-l from-[#000] to-transparent opacity-90 pointer-events-none"></div>
        {/* Overlay for left side blur effect */}
        <div className="absolute inset-0 to-100% bg-gradient-to-t from-[#000] to-transparent opacity-90 pointer-events-none"></div>
        <div className="absolute inset-0 to-100% bg-gradient-to-t from-[#000] to-transparent opacity-90 pointer-events-none"></div>
        <div className="container flex sm:flex-col justify-center sm:items-center lg:items-start md:justify-start lg:flex-row gap-6 w-full h-full select-none relative z-10">
          <div className="hidden md:inline-block md:w-[150px] lg:w-[200px] md:h-[270px] lg:mt-14 rounded-md overflow-auto shadow-2xl">
            <Image
              src={"/images/1_0.jpg"}
              alt="poster"
              width={0}
              height={0}
              className="w-full h-full shadow-md object-cover"
            />
          </div>
          <div className="flex flex-col gap-3 lg:items-start items-center justify-center">
            <h2 className="text-white text-2xl lg:mt-24">
              برنامه گفتگو محور جهانمرد
            </h2>
            <p className="text-sm w-[300px] text-[#B3BAC4] mt-3 font-light">
              صحبت های شهید حسین امیرعبداللهیان در مورد شخصیت عظیم سردار دلها
              شهید حاج قاسم سلیمانی
            </p>
            <div className="flex gap-2">
              <div className="text-sm mt-2 font-light border text-[#B088FF] hover:border-[#3b3ece] border-[#4E16BE] px-3 py-1 rounded-[30px] flex justify-center items-center cursor-pointer">
                گفتگو محور
              </div>
              <div className="text-sm mt-2 font-light border text-[#B088FF] hover:border-[#3b3ece] border-[#4E16BE] px-3 py-1 rounded-[30px] flex justify-center items-center cursor-pointer">
                سیاسی
              </div>
            </div>
            <div className="flex gap-1 mt-2">
              <div className="cursor-pointer">
                <svg
                  version="1.1"
                  width={24}
                  height={24}
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 23 32"
                  enable-background="new 0 0 23 32"
                  fill="#fff"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <path
                        fill="#fff"
                        d="M0,30.495c0,0.569,0.315,1.082,0.823,1.338c0.215,0.109,0.447,0.163,0.678,0.163 c0.312,0,0.623-0.099,0.887-0.292l9.112-6.696l9.112,6.696c0.457,0.337,1.058,0.386,1.564,0.13C22.685,31.577,23,31.064,23,30.495 V11c0-0.276-0.224-0.5-0.5-0.5S22,10.724,22,11v19.495c0,0.192-0.103,0.359-0.274,0.446c-0.172,0.087-0.367,0.071-0.521-0.043 l-9.408-6.914c-0.176-0.13-0.416-0.13-0.592,0l-9.408,6.914c-0.154,0.114-0.348,0.13-0.521,0.043C1.103,30.854,1,30.688,1,30.495 V11c0-0.276-0.224-0.5-0.5-0.5S0,10.724,0,11V30.495z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M1.5,9h20C22.327,9,23,8.327,23,7.5v-6C23,0.673,22.327,0,21.5,0h-20C0.673,0,0,0.673,0,1.5v6 C0,8.327,0.673,9,1.5,9z M1,1.5C1,1.224,1.225,1,1.5,1h20C21.775,1,22,1.224,22,1.5v6C22,7.776,21.775,8,21.5,8h-20 C1.225,8,1,7.776,1,7.5V1.5z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>

              <div className="flex ml-[2px] cursor-pointer">
                <svg
                  fill="#fff"
                  width={24}
                  height={24}
                  viewBox="0 0 32 32"
                  id="Outlined"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title></title>
                    <g id="Fill">
                      <path d="M28.61,11.67H20l-2.66-8.2a1.39,1.39,0,0,0-2.64,0L12,11.67H3.39a1.39,1.39,0,0,0-.82,2.51l7,5.07L6.89,27.46a1.39,1.39,0,0,0,1.32,1.82A1.43,1.43,0,0,0,9,29l7-5.07L23,29a1.43,1.43,0,0,0,.81.27,1.39,1.39,0,0,0,1.32-1.82l-2.66-8.21,7-5.07A1.39,1.39,0,0,0,28.61,11.67Zm-7.34,6-1.17.86.44,1.38,2.09,6.41-5.45-4L16,21.46l-1.18.86-5.45,4,2.09-6.41.44-1.38-1.17-.86-5.45-4h8.19l.45-1.38L16,5.89l2.08,6.4.45,1.38h8.19Z"></path>
                    </g>
                  </g>
                </svg>
                <svg
                  fill="#fff"
                  width={24}
                  height={24}
                  viewBox="0 0 32 32"
                  id="Outlined"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title></title>
                    <g id="Fill">
                      <path d="M28.61,11.67H20l-2.66-8.2a1.39,1.39,0,0,0-2.64,0L12,11.67H3.39a1.39,1.39,0,0,0-.82,2.51l7,5.07L6.89,27.46a1.39,1.39,0,0,0,1.32,1.82A1.43,1.43,0,0,0,9,29l7-5.07L23,29a1.43,1.43,0,0,0,.81.27,1.39,1.39,0,0,0,1.32-1.82l-2.66-8.21,7-5.07A1.39,1.39,0,0,0,28.61,11.67Zm-7.34,6-1.17.86.44,1.38,2.09,6.41-5.45-4L16,21.46l-1.18.86-5.45,4,2.09-6.41.44-1.38-1.17-.86-5.45-4h8.19l.45-1.38L16,5.89l2.08,6.4.45,1.38h8.19Z"></path>
                    </g>
                  </g>
                </svg>
                <svg
                  fill="#fff"
                  width={24}
                  height={24}
                  viewBox="0 0 32 32"
                  id="Outlined"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title></title>
                    <g id="Fill">
                      <path d="M28.61,11.67H20l-2.66-8.2a1.39,1.39,0,0,0-2.64,0L12,11.67H3.39a1.39,1.39,0,0,0-.82,2.51l7,5.07L6.89,27.46a1.39,1.39,0,0,0,1.32,1.82A1.43,1.43,0,0,0,9,29l7-5.07L23,29a1.43,1.43,0,0,0,.81.27,1.39,1.39,0,0,0,1.32-1.82l-2.66-8.21,7-5.07A1.39,1.39,0,0,0,28.61,11.67Zm-7.34,6-1.17.86.44,1.38,2.09,6.41-5.45-4L16,21.46l-1.18.86-5.45,4,2.09-6.41.44-1.38-1.17-.86-5.45-4h8.19l.45-1.38L16,5.89l2.08,6.4.45,1.38h8.19Z"></path>
                    </g>
                  </g>
                </svg>
                <svg
                  fill="#fff"
                  width={24}
                  height={24}
                  viewBox="0 0 32 32"
                  id="Outlined"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title></title>
                    <g id="Fill">
                      <path d="M28.61,11.67H20l-2.66-8.2a1.39,1.39,0,0,0-2.64,0L12,11.67H3.39a1.39,1.39,0,0,0-.82,2.51l7,5.07L6.89,27.46a1.39,1.39,0,0,0,1.32,1.82A1.43,1.43,0,0,0,9,29l7-5.07L23,29a1.43,1.43,0,0,0,.81.27,1.39,1.39,0,0,0,1.32-1.82l-2.66-8.21,7-5.07A1.39,1.39,0,0,0,28.61,11.67Zm-7.34,6-1.17.86.44,1.38,2.09,6.41-5.45-4L16,21.46l-1.18.86-5.45,4,2.09-6.41.44-1.38-1.17-.86-5.45-4h8.19l.45-1.38L16,5.89l2.08,6.4.45,1.38h8.19Z"></path>
                    </g>
                  </g>
                </svg>
                <svg
                  fill="#fff"
                  width={24}
                  height={24}
                  viewBox="0 0 32 32"
                  id="Outlined"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title></title>
                    <g id="Fill">
                      <path d="M28.61,11.67H20l-2.66-8.2a1.39,1.39,0,0,0-2.64,0L12,11.67H3.39a1.39,1.39,0,0,0-.82,2.51l7,5.07L6.89,27.46a1.39,1.39,0,0,0,1.32,1.82A1.43,1.43,0,0,0,9,29l7-5.07L23,29a1.43,1.43,0,0,0,.81.27,1.39,1.39,0,0,0,1.32-1.82l-2.66-8.21,7-5.07A1.39,1.39,0,0,0,28.61,11.67Zm-7.34,6-1.17.86.44,1.38,2.09,6.41-5.45-4L16,21.46l-1.18.86-5.45,4,2.09-6.41.44-1.38-1.17-.86-5.45-4h8.19l.45-1.38L16,5.89l2.08,6.4.45,1.38h8.19Z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="text-[#B088FF]">85%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-3 md:px-0 overflow-auto pt-6 mb-6">
        <div className="flex w-full justify-between my-3  md:pb-1 items-center">
          <p className="text-white text-sm md:text-xl">قسمت ها</p>
          <Link
            href={"/show-onten"}
            className="text-[#3FB2DA] text-[11px] md:text-[13px] lg:text-[13px] flex gap-1 justify-center items-center"
          >
            نمایش همه
            <div className="rotate-180">
              <svg
                fill="#3FB2DA"
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
      </div>
      <div className=" #221D1F">
        <div className="container flex flex-col md:grid md:grid-cols-12 justify-center items-center gap-2 mx-auto overflow-auto">
          {dataDec?.map((item: any, idx: any) => (
            <Link
              href={"#"}
              key={idx}
              className="w-screen md:w-auto md:col-span-6 lg:col-span-3 overflow-auto mb-5 px-9 md:px-0"
            >
              <div className="rounded-md overflow-auto h-[160px] lg:h-[180px] 2xl:h-[200px]">
                <Image
                  src={item.path}
                  width={0}
                  height={0}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pb-[9px] mt-0 md:pb-0 flex justify-center items-center flex-col w-full h-[40%] md:h-[30%]">
                <div className="  md:mt-4 grid grid-cols-12 justify-between items-center gap-1 w-full mt-4">
                  <div className="col-span-3 mb-1 bg-box-slider-bg-text text-nowrap text-base-content-slider py-1 px-1 flex justify-center text-[10px] rounded-[20px]">
                    {item?.descriptions?.title}
                  </div>
                  <div className="col-span-9 bg-box-slider-bg-text text-nowrap text-box-slider-text-l py-1 px-2 text-[9px] mr-auto rounded-[20px]">
                    <span className="text-white"> 32:65 </span>
                    <span>
                      <div className="inline">&nbsp;</div> |
                    </span>
                    <span>32,65 نمایش </span>
                  </div>
                </div>
                <div className=" w-full mt-1 md:mt-2 text-justify text-[12px] md:text-[14px] max-w-[100%] md:min-w-[100%]">
                  <h3 className="mb-1 text-right text-ellipsis dark:text-description-text md:text-clip overflow-hidden whitespace-nowrap md:text-wrap md:ml-auto ">
                    {item?.descriptions?.dec}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="h-[200px] lg:h-[400px] to-90% bg-gradient-to-r from-[#341173] to-[#221D1F] mb-16">
        <div className="container flex flex-col justify-between gap-6 overflow-hidden">
          <h5 className="my-6 text-white mr-6">عوامل برنامه</h5>
          {/* mobile & tablet view  */}
          <div className="lg:hidden w-full overflow-hidden">
            <div className="h-[120px] md:h-[130px] w-full overflow-hidden">
              <Slider
                Component={Box}
                data={data}
                isShowIcon={false}
                mdCount={2.5}
                displayCount={5}
              />
            </div>
          </div>
          {/* mobile & tablet view  */}
          <div className="hidden lg:grid grid-cols-9 w-full h-full justify-center items-center mr-6">
            <div className="col-span-3 flex flex-col gap-8">
              {data?.slice(0, 3).map((item, idx) => (
                <Fragment key={idx}>
                  <Box title={item.title} name={item.name} />
                </Fragment>
              ))}
            </div>
            <div className="col-span-3 flex flex-col gap-8">
              {data?.slice(0, 3).map((item, idx) => (
                <Fragment key={idx}>
                  <Box title={item.title} name={item.name} />
                </Fragment>
              ))}
            </div>
            <div className="col-span-3 flex flex-col gap-8">
              {data?.slice(0, 3).map((item, idx) => (
                <Fragment key={idx}>
                  <Box title={item.title} name={item.name} />
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
