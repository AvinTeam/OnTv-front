import { Slider } from "@/app/_components/slider/slider";
import Image from "next/image";
import Box from "./components/box";
import { Fragment } from "react";
import { gatAllProgram, getAllEpisode } from "./_api/get-all-episode";
import Episode from "./components/episode";
import RateAndFavorite from "./components/RateAndFavorite/RateAndFavorite";
import CommentBox from "../../_components/commet-box/CommentBox";
import { notFound } from "next/navigation";

export default async function ShowOnten({
  params,
}: {
  params: { id: string };
}) {
  const initialData = await getAllEpisode({ id: "29", page: 1 });
  if (!initialData) {
    notFound();
  }
  const allData = await gatAllProgram(params.id.split(".")[0]);
  if (!allData) {
    notFound();
  }
  return (
    <div className="overflow-hidden">
      <div
        className="w-full h-[410px] relative flex py-4 md:py-2 bg-center bg-cover justify-center items-center bg-gradient-to-r from-[#221D1F] to-[#341173]"
        style={{
          backgroundImage: `url(${allData?.Program?.banner?.[0].url})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for shadow effect on the right and bottom */}
        <div className="absolute inset-0 to-100% bg-gradient-to-l from-[#000] to-transparent opacity-90 pointer-events-none"></div>
        {/* Overlay for left side blur effect */}
        <div className="absolute inset-0 to-100% bg-gradient-to-t from-[#000] to-transparent opacity-90 pointer-events-none"></div>
        <div className="absolute inset-0 to-100% bg-gradient-to-t from-[#000] to-transparent opacity-90 pointer-events-none"></div>
        <div className="container flex sm:flex-col justify-center sm:items-center lg:items-start md:justify-start lg:flex-row gap-6 w-full h-full select-none relative z-10">
          <div className="hidden md:inline-block md:w-[150px] lg:w-[200px] md:h-[270px] lg:mt-14 rounded-md overflow-auto shadow-2xl">
            <Image
              src={allData?.Program?.poster?.[0].url}
              alt="poster"
              width={0}
              height={0}
              className="w-full h-full shadow-md object-cover"
            />
          </div>
          <div className="flex flex-col gap-3 lg:items-start items-center justify-center">
            <h2 className="text-white text-2xl lg:mt-24">
              {allData?.Program?.title}
            </h2>
            <p className="text-sm w-[300px] text-[#B3BAC4] mt-3 font-light">
              {allData?.Program?.description}
            </p>
            <div className="flex gap-2">
              {allData?.Program?.tags?.[0] && (
                <div className="text-sm mt-2 font-light border text-[#B088FF] hover:border-[#3b3ece] border-[#4E16BE] px-3 py-1 rounded-[30px] flex justify-center items-center cursor-pointer">
                  {allData?.Program?.tags?.[0]?.name}
                </div>
              )}
              {allData?.Program?.tags?.[1] && (
                <div className="text-sm mt-2 font-light border text-[#B088FF] hover:border-[#3b3ece] border-[#4E16BE] px-3 py-1 rounded-[30px] flex justify-center items-center cursor-pointer">
                  {allData?.Program?.tags?.[1]?.name}
                </div>
              )}
            </div>
            <RateAndFavorite programId={params.id.split(".")[0]} />
          </div>
        </div>
      </div>

      <div className="container px-3 md:px-0 overflow-auto pt-6 mb-6">
        <div className="flex w-full justify-between my-3  md:pb-1 items-center">
          <p className="text-white text-sm md:text-xl">قسمت ها</p>
        </div>
      </div>
      <div className=" #221D1F">
        <Episode data={initialData} itemId={params.id.split(".")[0]} />
      </div>

      {/* ================= casts ================== */}

      <div
        style={{
          background: `linear-gradient(to right,${allData?.Program?.color} , #221D1F)`,
        }}
        className="lg:h-auto md:pb-10 to-90% mb-16"
      >
        <div className="container flex flex-col justify-between gap-6 overflow-hidden">
          <h5 className="my-6 text-white mr-6">عوامل برنامه</h5>
          {/* mobile & tablet view  */}
          <div className="lg:hidden w-full overflow-hidden">
            <div className="h-[120px] md:h-[130px] w-full overflow-hidden">
              <Slider
                Component={Box}
                data={[...allData?.Program?.casts]}
                isShowIcon={false}
                mdCount={2.5}
                displayCount={5}
              />
            </div>
          </div>
          {/* mobile & tablet view  */}
          <div className="hidden lg:grid grid-cols-9 w-full h-auto justify-center items-center mr-6">
            <div className="col-span-3 flex flex-col gap-8">
              {allData?.Program?.casts
                ?.slice(0, 3)
                .map((item: any, idx: any) => (
                  <Fragment key={idx}>
                    <Box
                      data={{
                        position: item.position,
                        name: item?.name,
                        family: item?.family,
                      }}
                    />
                  </Fragment>
                ))}
            </div>
            <div className="col-span-3 flex flex-col gap-8">
              {allData?.Program?.casts
                ?.slice(0, 3)
                .map((item: any, idx: any) => (
                  <Fragment key={idx}>
                    <Box
                      data={{
                        position: item.position,
                        name: item?.name,
                        family: item?.family,
                      }}
                    />
                  </Fragment>
                ))}
            </div>
            <div className="col-span-3 flex flex-col gap-8">
              {allData?.Program?.casts
                ?.slice(0, 3)
                .map((item: any, idx: any) => (
                  <Fragment key={idx}>
                    <Box
                      data={{
                        position: item.position,
                        name: item?.name,
                        family: item?.family,
                      }}
                    />
                  </Fragment>
                ))}
            </div>
          </div>
        </div>
      </div>
      {/* ================== comments =================== */}
      <div className="container w-full h-full mb-32">
        <CommentBox id={params.id.split(".")[0]} type="program" />
      </div>
    </div>
  );
}
