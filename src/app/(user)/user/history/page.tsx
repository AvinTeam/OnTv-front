"use client";
import React, { useEffect, useState } from "react";
import axios from "@/core/axios";
import { EmptyBookmarkIcon } from "@/app/_components/icons";
import LoadingSpinner from "@/app/_components/loading/loading";
import { OntenCard } from "@/app/_components/cards/onten-card";
export default function History() {
  const [allHistory, setAllHistory] = useState<any[]>();
  const [loadingِData, setLoadingData] = useState<boolean>(false);

  useEffect(() => {
    setLoadingData(true);
    axios.get(`user/getHistories`).then(({ data }) => {
      setAllHistory(data?.programs?.data);
      setLoadingData(false);
    });
  }, []);
  if (loadingِData) {
    return <LoadingSpinner message="در حال دریافت اطلاعات..." />;
  }
  return (
    <div className="w-full h-full flex flex-col justify-start items-start py-14 px-5 md:px-16">
      <div className="bg-[#292929] w-full h-20 rounded-lg flex justify-center items-center text-white">
        لیست تماشا شده ها
      </div>
      <div className="w-full h-full ">
        {allHistory?.length ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
            {allHistory?.map((item: any) => (
              <div key={item?.id} className="h-[290px] 2xl:h-[490px]">
                <OntenCard data={{ ...item }} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="w-32 h-32 md:w-72 md:h-72">
              <EmptyBookmarkIcon width={"100%"} height={"100%"} fill="gray" />
            </div>
            <p className="text-sm md:text-lg text-nowrap">
              {" "}
              شما تاکنون هیچ فیلمی را تماشا نکرده‌اید.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
