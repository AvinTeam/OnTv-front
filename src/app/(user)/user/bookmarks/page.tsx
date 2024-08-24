"use client";
import React, { useEffect, useState } from "react";
import axios from "@/core/axios";
import { NewestCard } from "@/app/_components/cards/newest-card";
import { OntenCard } from "@/app/_components/cards/onten-card";
import { SpecialCard } from "@/app/_components/cards/special-card";

function Bookmarks() {
  const [bookmarkList, setBookmarkList] = useState<any[]>();
  useEffect(() => {
    axios.get(`user/getFavorites`).then(({ data }) => {
      setBookmarkList(data?.favorites?.data);
    });
  }, []);
  return (
    <div className="w-full h-full flex flex-col justify-start items-start py-14 px-20">
      <div className="bg-[#292929] w-full h-20 rounded-lg flex justify-center items-center text-white">
        لیست علاقه مندی ها
      </div>
      <div className="w-full h-full grid md:grid-cols-3 gap-4 mt-8">
        {bookmarkList?.map((item: any) => (
        <div key={item?.id} className="h-[170px] md:h-[200px] lg:h-[230px] 2xl:h-[470px]">
              <SpecialCard data={{...item, program: item}} /> 
        </div>
        ))}
      </div>
    </div>
  );
}

export default Bookmarks;
