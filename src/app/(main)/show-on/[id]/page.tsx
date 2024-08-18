import Image from "next/image";
import Live from "./_components/live";
import dataDec1 from "../../../../../public/images/Mask Group 29.png";
import dataDec2 from "../../../../../public/images/Mask Group 30.png";
import dataDec3 from "../../../../../public/images/Mask Group 31.png";
import dataDec4 from "../../../../../public/images/Mask Group 33.png";
import { Slider } from "@/app/_components/slider/slider";
import { SpecialCard } from "@/app/_components/cards/special-card";
import Link from "next/link";
import { NewestCard } from "@/app/_components/cards/newest-card";
import { gatPublicShow, getAllEpisode } from "./_api/get-all-data";
import DownloadIcon from "@/app/_components/icons/Download";
import ShareIcon from "@/app/_components/icons/Share";
import { SliderTitle } from "@/app/_components/slider-title";
import { calculateTimeAgo } from "@/utils/functions";
const dataDec: any[] = [
  {
    path: dataDec1,
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: dataDec2,
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: dataDec3,
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: dataDec4,
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: dataDec4,
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: dataDec4,
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: dataDec4,
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: dataDec4,
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
];
export default async function ShowOn({ params }: { params: { id: string } }) {
  const publicShow = await gatPublicShow(params.id.split(".")[0]);
  // const episodes = await getAllEpisode();
  console.log(params.id.split(".")[0])
  console.log(publicShow);

  return (
    <main>
      <div className="">
        <div className="">
          <div className=" mx-auto my-5 lg:grid lg:grid-cols-12 gap-2 ">
            <div className="flex flex-col lg:col-span-9 ">
              <div className="flex flex-col gap-3 lg:gap-0 pb-4 md:pb-10 lg:pb-0 bg-gradient-to-l to-80% from-[#341173] to-[#221D1F]">
                <div className="lg:w-[90%] mx-auto">
                  <div className="sm:mt-2 px-4 md:px-0 container mx-auto ">
                    <Live />
                  </div>
                  <div className="mt-4 container lg:mb-4 text-white rounded-[12px] py-1 md:py-6 lg:py-2 xl:py-2 px-4 md:px-0 h-[180px] md:h-[150px] lg:h-[170px] xl:h-[170px] 2xl:h-auto">
                    <div className="flex flex-col justify-between">
                      <h1 className="text-link-footer-title text-[11px] md:text-sm lg:text-xl">
                        {publicShow?.Episode?.title}
                      </h1>
                      <p className="text-[#606770] text-xs md:text-sm mt-3">
                      {publicShow?.Episode?.description}
                      </p>
                    </div>
                    <div className="mt-6">
                      <div className="flex mt-10 md:mt-6 justify-between items-center">
                        <div className="flex gap-2 justify-center items-center">
                          <div className="w-10 h-10 bg-white rounded-[50%]"></div>
                          <div>
                            <h5 className="text-xs lg:text-lg text-nowrap">
                              برنامه تکیه
                            </h5>
                            <p className="text-[#B3BAC4] text-xs lg:text-sm text-nowrap">
                              شبکه آن هیئت
                            </p>
                          </div>
                        </div>
                        <div className="flex sm:flex-col md:flex-row flex-col-reverse items-end gap-1 justify-center md:items-center">
                          <div className="flex gap-2">
                            <div className="flex gap-1 text-[#B3BAC4] text-sm cursor-pointer ">
                              <span>
                                <DownloadIcon />
                              </span>
                              <p className="text-xs lg:text-sm text-nowrap">
                                دانلود
                              </p>
                            </div>
                            <div className="flex md:ml-2 lg:ml-4 gap-1 text-[#B3BAC4] text-sm cursor-pointer">
                              <ShareIcon />
                              <p className="text-xs lg:text-sm text-nowrap">
                                اشتراک گزاری
                              </p>
                            </div>
                          </div>
                          <div className="md:bg-box-slider-bg-text text-nowrap h-7 text-box-slider-text-l md:py-1.5 md:px-6 text-[11px] md:mr-auto md:rounded-[20px]">
                            <span>{calculateTimeAgo("2024-08-12T18:02:21.000000Z")}</span> <span> | </span>
                            <span> {`${publicShow?.Episode?.seen || "0"} نمایش`}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-[90%] mx-auto">
                <div className="w-screen md:w-full container px-3 md:px-0 overflow-auto pt-8 lg:pt-8 pb-4 mb-4">
                  <SliderTitle title="بخش های منتخب" link="#" />
                  <div className="h-[230px] md:h-[150px] lg:h-[160px] 2xl:h-[200px] w-full">
                    <Slider
                      Component={SpecialCard}
                      data={dataDec}
                      displayCount={5}
                      isShowIcon
                    />
                  </div>
                </div>
              </div>
              <div className="w-screen lg:hidden md:w-full container px-3 md:px-0 overflow-auto pt-2 pb-10 mb-9">
                <div className="flex w-full justify-between my-3  md:pb-1 items-center">
                  <p className="text-white text-sm md:text-lg">جدیدترین ها </p>
                  <Link
                    href={"#"}
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
                <div className="h-[270px] md:h-[270px] lg:h-[160px] 2xl:h-[200px] w-full">
                  <Slider
                    Component={NewestCard}
                    data={dataDec}
                    smCount={1.5}
                    mdCount={2.5}
                    displayCount={5}
                    isShowIcon
                  />
                </div>
              </div>
            </div>

            <div className="hidden lg:block col-span-10 lg:col-span-3 rounded-[12px] overflow-auto p-2 md:h-[500px] lg:h-[1100px] xl:h-[1500px]">
              <div className="lg:ml-[10%] mx-auto">
                <p className="mb-2 text-base-content-slider">سایر قسمت ها</p>
                <div className="mt-4">
                  {[].map((item: any) => (
                    <div
                      key={item.id}
                      className="rounded-md mb-2 overflow-auto"
                    >
                      <div className="rounded-md overflow-auto h-[140px] 2xl:h-[200px]">
                        <Image
                          src={item.poster?.[0]?.url}
                          width={0}
                          height={0}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="pb-[9px] md:pb-0 flex justify-center items-center flex-col w-full h-[40%] md:h-[30%]">
                        <div className=" flex flex-col md:mt-4 md:grid md:grid-cols-12 justify-start md:justify-between md:items-center gap-1 w-full mt-4">
                          <div className="col-span-3 mb-1 md:bg-box-slider-bg-text text-nowrap text-base-content-slider md:py-1 md:px-1 md:flex md:justify-center text-[10px] md:rounded-[20px]">
                            {item?.title}
                          </div>
                          <div className="col-span-9 md:bg-box-slider-bg-text text-nowrap text-box-slider-text-l md:py-1 md:px-2 text-[9px] md:mr-auto md:rounded-[20px]">
                            <span>22 دقیقه پیش</span> <span> | </span>
                            <span> {`${item?.seen} نمایش`}</span>
                          </div>
                        </div>
                        <div className=" mt-1 md:mt-2 text-justify text-[12px] md:text-[14px] max-w-[100%] md:min-w-[100%]">
                          <h3 className="mb-1 text-ellipsis dark:text-description-text md:text-clip overflow-hidden whitespace-nowrap md:text-wrap md:ml-auto ">
                            {item?.description}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
