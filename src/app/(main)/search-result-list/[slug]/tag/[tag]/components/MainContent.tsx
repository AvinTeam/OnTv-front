"use client";
import React, { useEffect, useState } from "react";
import { OntenCard } from "@/app/_components/cards/onten-card";
import { getAllProgram } from "../_api/get-all-data";
import Filter from "@/app/(main)/_components/filter";
import { FilterState } from "@/types/types/filter.interface";
import moment from "jalali-moment";
import Loading from "./Loading";

function MainContent({ slug, tag }: { slug: string; tag: string }) {
  const [programs, setPrograms] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>();
  function convertJalaliToGregorian(date: string) {
    const year = parseInt(date.split("/")[0], 10);

    if (year < 1900) {
      return moment(date, "jYYYY/jMM/jDD").format("YYYY/MM/DD");
    }

    return date;
  }
  async function getAllData(params: FilterState | null = null) {
    setLoading(true);
    const yearFrom = params?.date?.split(" ")?.[1] || "";
    const yearTo = params?.date?.split(" ")?.[3] || "";

    const data = await getAllProgram({
      slug: slug == "all" ? "" : slug,
      tag: params?.tag ? params.tag : tag == "all" ? "" : tag,
      title: params?.title || null,
      service: params?.service?.id,
      produce_date_from: yearFrom
        ? convertJalaliToGregorian(`${yearFrom}/1/1`)
        : "",
      produce_date_to: yearTo
        ? convertJalaliToGregorian(`${yearTo}/12/29`)
        : "",
    });

    setLoading(false);

    setPrograms(data?.programs?.data);
  }
  const handleFilter = (data: FilterState) => {
    getAllData(data);
  };
  useEffect(() => {
    getAllData();
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="container min-h-[400px] mb-10 mt-5 flex flex-col shadow-xl p-4 w-screen overflow-auto ">
      <Filter service={slug} onFilter={handleFilter} />
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-8 gap-2 md:gap-1.5 lg:gap-4 w-full h-full mt-6">
        {(programs ?? []).length == 0 ? (
          <div>نتیجه ای یافت نشد</div>
        ) : (
          programs.map((item: any, idx: any) => (
            <div
              key={`program-id-${idx}`}
              className="w-full h-[280px] 2xl:h-[360px]"
            >
              <OntenCard data={item} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MainContent;
