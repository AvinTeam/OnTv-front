"use client";
import React, { useEffect, useState } from "react";
import axios from "@/core/axios";
import { SpecialCard } from "@/app/_components/cards/special-card";
import { EmptyBookmarkIcon } from "@/app/_components/icons";
import LoadingSpinner from "@/app/_components/loading/loading";

function Bookmarks() {
  const [bookmarkList, setBookmarkList] = useState<any[]>();
  const [loadingِData, setLoadingData] = useState<boolean>(false);

  useEffect(() => {
    setLoadingData(true)
    axios.get(`user/getFavorites`).then(({ data }) => {
      setBookmarkList(data?.favorites?.data);
      setLoadingData(false)
    });
  }, []);
  if (loadingِData) {
    return <LoadingSpinner message="در حال دریافت اطلاعات..." />;
  }
  return (
    <div className="w-full h-full flex flex-col justify-start items-start py-14 px-20">
      <div className="bg-[#292929] w-full h-20 rounded-lg flex justify-center items-center text-white">
        لیست علاقه مندی ها
      </div>
      <div className="w-full h-full grid md:grid-cols-3 gap-4 mt-8">
        {bookmarkList?.length ? (
          <>
            {bookmarkList?.map((item: any) => (
              <div
                key={item?.id}
                className="h-[170px] md:h-[200px] lg:h-[230px] 2xl:h-[470px]"
              >
                <SpecialCard data={{ ...item, program: item }} />
              </div>
            ))}
          </>
        ) : (
          <div className="mr-0 md:mr-[100%] flex justify-center items-center flex-col w-full h-full">
            <div className="w-32 h-32 md:w-72 md:h-72">
            <EmptyBookmarkIcon width={"100%"} height={"100%"} fill="gray" />
            </div>
            <p className="text-sm md:text-lg text-nowrap"> شما تاکنون هیچ فیلمی را نشان نکرده‌اید.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Bookmarks;
