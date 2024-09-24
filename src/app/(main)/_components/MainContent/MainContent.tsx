"use client";
import { API_URL } from "@/configs/global";
import React, { useEffect } from "react";
import Tag from "../Tag";
import Program from "../Program";
import BannerFull from "@/app/_components/banners/banner-full/banner-full";
import BannerTwo from "@/app/_components/banners/banner-two/banner-two";
import BannerFour from "@/app/_components/banners/banner-four/banner-four";
import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import Live from "@/app/_components/live/live";
import Loading from "./Loading";

type HomepageConfigItem = {
  id: number;
  title: string;
  type: keyof RenderComponents;
  order: number;
  links: any[];
  tags: any[];
  program: any[];
};
type RenderComponents = {
  tag: typeof Tag;
  program: typeof Program;
  link1: typeof BannerFull;
  link2: typeof BannerTwo;
  link4: typeof BannerFour;
};
const getAllData = (page: number): Promise<any> => {
  return axios.get(`${API_URL}homepage?page=${page}`);
};

function MainContent() {
  const { ref, inView } = useInView();
  const renderComponents: RenderComponents = {
    tag: Tag,
    program: Program,
    link1: BannerFull,
    link2: BannerTwo,
    link4: BannerFour,
  };
  const {
    data,
    isFetching,
    fetchNextPage,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["homepage"],
    queryFn: ({ pageParam }) => {
      return getAllData(pageParam);
    },
    getNextPageParam: (lastPage) => {
      return lastPage?.data?.homepage_configs?.meta?.current_page <
        lastPage?.data?.homepage_configs?.meta?.last_page
        ? lastPage?.data?.homepage_configs?.meta?.current_page + 1
        : null;
    },
    initialPageParam: 1,
  });
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);
  if (isLoading) {
    return (
     <Loading />
    );
  }
  return (
    <>
      <div className="container mt-4 mb-4 px-2 xl:px-0 overflow-x-auto">
        {/* <Live data={lives?.lives?.data} /> */}
        <Live
          data={[
            {
              url: "https://ontv.arvanlive.ir/hls/on1/on1.m3u8",
              slug: "",
              order: 0,
              title: "",
              user: "",
            },
            {
              url: "https://ontv.arvanlive.ir/hls/on2/on2.m3u8",
              slug: "",
              order: 0,
              title: "",
              user: "",
            },
            {
              url: "https://ontv.arvanlive.ir/hls/on3/on3.m3u8",
              slug: "",
              order: 0,
              title: "",
              user: "",
            },
          ]}
        />
      </div>
       
      {data?.pages?.map((currentPage, idx) => (
        <React.Fragment key={idx}>
          {currentPage?.data?.homepage_configs?.data?.map(
            (item: HomepageConfigItem) => {
              const Component = renderComponents[item.type];
              return (
                <React.Fragment key={item.id}>
                  <Component data={item} />
                </React.Fragment>
              );
            }
          )}
        </React.Fragment>
      ))}

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
    </>
  );
}

export default MainContent;
