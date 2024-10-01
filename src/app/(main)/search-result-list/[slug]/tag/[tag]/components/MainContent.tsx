"use client";
import React, { useEffect, useState } from "react";
import { OntenCard } from "@/app/_components/cards/onten-card";
import { FilterState } from "@/types/types/filter.interface";
import moment from "jalali-moment";
import dynamic from "next/dynamic";
import Loading from "./Loading";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import { API_URL } from "@/configs/global";

const Filter = dynamic(() => import("@/app/(main)/_components/filter"));

export async function getAllProgram(params: any, page: number) {
  return axios.get(`${API_URL}program/publicIndex?page=${page || 1}`, {
    params,
  });
}

function MainContent({ slug, tag }: { slug: string; tag: string }) {
  const [filterParams, setFilterParams] = useState<FilterState | null>(null);
  const { ref, inView } = useInView();

  function convertJalaliToGregorian(date: string) {
    const year = parseInt(date.split("/")[0], 10);

    if (year < 1900) {
      return moment(date, "jYYYY/jMM/jDD").format("YYYY/MM/DD");
    }

    return date;
  }

  const {
    data,
    fetchNextPage,
    isFetching,
    refetch,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["programs", filterParams],
    queryFn: ({ pageParam }) => {
      const yearFrom = filterParams?.date?.split(" ")?.[1] || "";
      const yearTo = filterParams?.date?.split(" ")?.[3] || "";
      const params: any = {
        ...(filterParams?.service
          ? {}
          : {
              "service[slug][]": filterParams?.service == "all" ? null : slug,
            }),
        ...(filterParams?.tag && {
          "customFilter[tag_name_like][]": filterParams?.tag,
        }),
        ...(filterParams?.title ? { "title[like]": filterParams.title } : {}),
        ...(filterParams?.service
          ? {
              service_id:
                filterParams.service == "all" ? null : filterParams.service.id,
            }
          : {}),
        ...(yearFrom
          ? {
              "customFilter[date][from]": convertJalaliToGregorian(
                `${yearFrom}/1/1`
              ),
            }
          : {}),
        ...(yearTo
          ? {
              "customFilter[date][to]": convertJalaliToGregorian(
                `${yearTo}/12/29`
              ),
            }
          : {}),
      };
      return getAllProgram(params, pageParam);
    },
    getNextPageParam: (lastPage) => {
      return lastPage?.data?.programs?.meta?.current_page <
        lastPage?.data?.programs?.meta?.last_page
        ? lastPage?.data?.programs?.meta?.current_page + 1
        : null;
    },
    initialPageParam: 1,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  const handleFilter = (data: FilterState) => {
    setFilterParams(data);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container min-h-[400px] mb-10 mt-5 flex flex-col shadow-xl p-4 w-screen overflow-auto ">
      <Filter service={slug} onFilter={handleFilter} />
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-8 gap-2 md:gap-1.5 lg:gap-4 w-full h-full mt-6">
        {data?.pages?.map((page, pageIndex) =>
          page.data.programs?.data?.map((item: any, idx: any) => (
            <div
              key={`program-id-${pageIndex}-${idx}`}
              className="w-full h-[280px] 2xl:h-[360px]"
            >
              <OntenCard data={item} />
            </div>
          ))
        )}
      </div>
      {(isFetchingNextPage || hasNextPage) && (
        <>
          <div
            ref={ref}
            className="md:hidden grid mb-12 grid-cols-3 gap-4 h-32 lg:h-40 mt-16"
          >
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="bg-base-50 animate-pulse rounded-lg"
              ></div>
            ))}
          </div>
          <div
            ref={ref}
            className="hidden md:grid mb-12 grid-cols-6 gap-4 h-32 lg:h-40 mt-16"
          >
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-base-50 animate-pulse rounded-lg"
              ></div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default React.memo(MainContent);
