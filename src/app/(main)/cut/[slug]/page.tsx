import dynamic from "next/dynamic";
import Image from "next/image";
import { SliderTitle } from "@/app/_components/slider-title";
import { calculateTimeAgo, truncate } from "@/utils/functions";
import { Episode } from "@/types/types/episode-data-showOn.interface";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SpecialCard } from "@/app/_components/cards/special-card";
import {
  gatPublicShow,
  getAllCut,
  getAllEpisode,
  getCutPublicShow,
} from "../_api/get-all-data";
import { Slider } from "@/app/_components/slider/slider";
import { NewestCard } from "@/app/_components/cards/newest-card";
import DownloadBox from "../../show-on/[slug]/_components/DownloadBox";
import Share from "../../show-on/[slug]/_components/Share";
const Live = dynamic(() => import("./components/Live"));
const CommentBox = dynamic(
  () => import("../../_components/commet-box/CommentBox")
);

export default async function ShowOn({ params }: { params: { slug: string } }) {
  const cut = await getCutPublicShow(params.slug.split(".")[0]);
  if (!cut) {
    return notFound();
  }
  console.log(cut);
  const cuts = await getAllCut(cut.Cut.episode.slug);
  if (!cut) {
    return notFound();
  }
  const publicShow: Episode = await gatPublicShow(cut.Cut.episode.slug);
  if (!publicShow) {
    return notFound();
  }
  const episodes = await getAllEpisode(cut.Cut.episode?.program.slug);
  if (!episodes) {
    return notFound();
  }
  return (
    <>
      <main>
        <div className="">
          <div className="">
            <div className=" mx-auto my-5 lg:grid lg:grid-cols-12 gap-2 ">
              <div className="flex flex-col lg:col-span-9 ">
                <div
                  style={{
                    background: `linear-gradient(to left,${cut?.Cut?.episode?.program?.color} -60%, #00000000 100%)`,
                  }}
                  className="flex flex-col gap-3 lg:gap-0 pb-4 md:pb-10 lg:pb-0 bg-gradient-to-l to-100%"
                >
                  <div className="lg:w-[90%] lg:mx-auto">
                    <div className="sm:mt-2 px-4 md:px-0 container mx-auto ">
                      <Live
                        url={cut?.Cut?.video?.hls_playlist}
                        thumbnail_url={cut?.Cut?.video?.thumbnail_url}
                        accessible={cut?.Cut?.accessible}
                      />
                    </div>
                    <div className="mt-4 container lg:mb-4 text-white rounded-[12px] py-1 md:py-6 lg:py-2 xl:py-2 px-4 md:px-0 h-[180px] md:h-[150px] lg:h-[170px] xl:h-[170px] 2xl:h-auto">
                      <div className="flex flex-col justify-between">
                        <h1 className="text-link-footer-title text-[11px] md:text-sm lg:text-xl">
                          {cut?.Cut?.title}
                        </h1>
                        <p className="text-[#606770] text-xs md:text-sm mt-3">
                          {cut?.Cut?.description}
                        </p>
                      </div>
                      <div className="mt-6">
                        <div className="flex mt-10 md:mt-6 justify-between items-center">
                          <div className="flex gap-2 justify-center items-center">
                            <div className="w-12 h-12 bg-white rounded-full">
                              <Image
                                src={
                                  cut?.Cut?.episode?.program?.poster?.[0]?.url
                                }
                                width={0}
                                height={0}
                                alt="program"
                                className="object-cover w-full h-full rounded-full"
                              />
                            </div>
                            <div>
                              <h5 className="text-xs lg:text-lg font-light text-nowrap">
                                <span>
                                  {" "}
                                  {cut?.Cut?.episode?.program?.title}{" "}
                                </span>
                              </h5>
                              <p className="text-[#B3BAC4] text-[10px] mt-1 lg:text-xs font-light text-nowrap">
                                {cut?.Cut?.episode?.program?.description}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col md:flex-row items-end gap-1 justify-center md:items-center">
                            <span className="md:hidden text-[10px] mt-2 text-nowrap mr-2 text-box-slider-text-l">
                              <span>
                                {calculateTimeAgo(cut?.Cut?.created_at)}
                              </span>
                              <span> | </span>
                              <span>{`${cut?.Cut?.seen || "0"} نمایش`}</span>
                            </span>
                            <div className="flex mt-1 gap-2 justify-center items-center">
                              <DownloadBox
                                videoLinks={cut?.Cut?.video?.mp4_videos ?? []}
                              />
                              <Share />
                            </div>
                            <div className="hidden md:block md:bg-box-slider-bg-text text-nowrap h-7 text-box-slider-text-l md:py-1.5 md:px-6 md:text-[11px] md:mr-auto md:rounded-[20px]">
                              <span>
                                {calculateTimeAgo(cut?.Cut?.created_at)}
                              </span>
                              <span> | </span>
                              <span>{`${cut?.Cut?.seen || "0"} نمایش`}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {cuts?.Cuts?.data?.length > 0 && (
                  <div className="lg:w-[90%] lg:mx-auto">
                    <div className="w-screen md:w-full container px-3 md:px-0 overflow-auto mt-16 lg:pt-8 pb-4 mb-4">
                      <SliderTitle
                        title="بخش های منتخب"
                        link={`/cut/all-cut/${cut?.Cut?.episode?.slug}`}
                      />
                      <div className="h-[170px] md:h-[130px] lg:h-[160px] 2xl:h-[200px] w-full">
                        <Slider
                          Component={SpecialCard}
                          data={cuts.Cuts?.data}
                          displayCount={4}
                          isShowIcon
                          path="cut"
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div className="w-screen lg:hidden md:w-full container px-3 md:px-0 overflow-auto pt-2 pb-10 mb-9">
                  <SliderTitle
                    title="سایر قسمت ها"
                    link={`/show-onten/${cut?.Cut?.episode?.program?.slug}`}
                  />
                  <div className="h-[270px] md:h-[270px] lg:h-[160px] 2xl:h-[200px] w-full">
                    <Slider
                      Component={NewestCard}
                      data={episodes?.Episodes?.data}
                      smCount={1.5}
                      mdCount={2.5}
                      displayCount={5}
                      isShowIcon
                    />
                  </div>
                </div>
                {/* ================== comments =================== */}
                <div className="w-full h-full mb-10 mt-20">
                  <CommentBox id={cut?.Cut?.episode?.id} type="episode" />
                </div>
              </div>

              <div className="hidden lg:block col-span-10 lg:col-span-3 rounded-[12px] overflow-auto p-2 md:h-[500px] lg:h-[1100px] xl:h-[1500px]">
                <div className="lg:ml-[10%] lg:mx-auto">
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
                              {truncate(item?.title, 30)}
                            </div>
                            <div className="md:bg-box-slider-bg-text text-nowrap text-box-slider-text-l md:py-1 md:px-2 text-[9px] md:mr-auto md:rounded-[20px]">
                              <span> {calculateTimeAgo(item?.created_at)}</span>
                              <span> | </span>
                              <span> {`${item?.seen} نمایش`}</span>
                            </div>
                          </div>
                          <div className="break-words mt-1 md:mt-2 text-justify text-[12px] md:text-[14px] max-w-[100%] md:min-w-[100%]">
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
    </>
  );
}
