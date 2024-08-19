import Image from "next/image";
import Live from "./_components/live";
import dataDec1 from "../../../../../public/images/Mask Group 29.png";
import dataDec2 from "../../../../../public/images/Mask Group 30.png";
import dataDec3 from "../../../../../public/images/Mask Group 31.png";
import dataDec4 from "../../../../../public/images/Mask Group 33.png";
import { Slider } from "@/app/_components/slider/slider";
import { SpecialCard } from "@/app/_components/cards/special-card";
import { NewestCard } from "@/app/_components/cards/newest-card";
import { gatPublicShow, getAllEpisode } from "./_api/get-all-data";
import { SliderTitle } from "@/app/_components/slider-title";
import { calculateTimeAgo } from "@/utils/functions";
import { Episode } from "@/types/types/episode-data-showOn.interface";
import DownloadBox from "./_components/DownloadBox";
import Link from "next/link";
import Share from "./_components/Share";
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
  const publicShow: Episode = await gatPublicShow(params.id.split(".")[0]);
  const episodes = await getAllEpisode(publicShow?.Episode?.program?.id);
  return (
    <main>
      <div className="">
        <div className="">
          <div className=" mx-auto my-5 lg:grid lg:grid-cols-12 gap-2 ">
            <div className="flex flex-col lg:col-span-9 ">
              <div className="flex flex-col gap-3 lg:gap-0 pb-4 md:pb-10 lg:pb-0 bg-gradient-to-l to-100% from-[#341173] to-[#221D1F]">
                <div className="lg:w-[90%] mx-auto">
                  <div className="sm:mt-2 px-4 md:px-0 container mx-auto ">
                    <Live url={publicShow?.Episode?.video?.video_url} />
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
                          <div className="w-12 h-12 bg-white rounded-full">
                            <Image
                              src={
                                publicShow?.Episode?.program?.poster?.[0]?.url
                              }
                              width={0}
                              height={0}
                              alt="program"
                              className="object-cover w-full h-full rounded-full"
                            />
                          </div>
                          <div>
                            <h5 className="text-xs lg:text-lg font-light text-nowrap">
                              {publicShow?.Episode?.program?.title}
                            </h5>
                            <p className="text-[#B3BAC4] text-[10px] mt-1 lg:text-xs font-light text-nowrap">
                              {publicShow?.Episode?.program?.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex sm:flex-col md:flex-row flex-col-reverse items-end gap-1 justify-center md:items-center">
                          <div className="flex gap-2">
                            <DownloadBox
                              videoLinks={
                                publicShow?.Episode?.video?.mp4_videos ?? []
                              }
                            />
                            <Share />
                          </div>
                          <div className="md:bg-box-slider-bg-text text-nowrap h-7 text-box-slider-text-l md:py-1.5 md:px-6 text-[11px] md:mr-auto md:rounded-[20px]">
                            <span>
                              {calculateTimeAgo(
                                publicShow?.Episode?.created_at
                              )}
                            </span>
                            <span> | </span>
                            <span>
                              {`${publicShow?.Episode?.seen || "0"} نمایش`}
                            </span>
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
                <SliderTitle title="جدیدترین ها" link="#" />
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
                  {episodes?.Episodes?.data?.map((item: any) => (
                    <Link
                      href={"/show-on"}
                      as={`/show-on/${item?.id}`}
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
                        <div className=" flex flex-col md:mt-4 md:flex md:flex-row justify-start md:justify-between md:items-center gap-1 w-full mt-4">
                          <div className="mb-1 md:bg-box-slider-bg-text text-nowrap text-base-content-slider md:py-1 md:px-1 md:flex md:justify-center text-[10px] md:rounded-[20px]">
                            {item?.title}
                          </div>
                          <div className="md:bg-box-slider-bg-text text-nowrap text-box-slider-text-l md:py-1 md:px-2 text-[9px] md:mr-auto md:rounded-[20px]">
                            <span> {calculateTimeAgo(item?.created_at)}</span>
                            <span> | </span>
                            <span> {`${item?.seen} نمایش`}</span>
                          </div>
                        </div>
                        <div className=" mt-1 md:mt-2 text-justify text-[12px] md:text-[14px] max-w-[100%] md:min-w-[100%]">
                          <h3 className="mb-1 font-light text-ellipsis dark:text-description-text md:text-clip overflow-hidden whitespace-nowrap md:text-wrap md:ml-auto ">
                            {item?.description}
                          </h3>
                        </div>
                      </div>
                    </Link>
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
