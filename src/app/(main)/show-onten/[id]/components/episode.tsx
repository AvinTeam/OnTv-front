"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllEpisode } from "../_api/get-all-episode";
import Image from "next/image";
import Link from "next/link";

function Episode({ data, itemId }: { data: any; itemId: string }) {
  const [page, setPage] = useState<number>(1);

  const { data: episode, isLoading } = useQuery({
    queryKey: ["episode", { id: itemId, page }],
    queryFn: () => getAllEpisode({ id: itemId, page }),
    initialData: data,
  });

  const totalPages = episode?.Episodes?.meta?.last_page || 1;

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const getDisplayedPages = () => {
    let startPage = Math.max(1, page - 1);
    let endPage = Math.min(totalPages, startPage + 3);

    if (endPage - startPage < 3) {
      startPage = Math.max(1, endPage - 3);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="relative">
      {isLoading ? (
        <div className=" h-[400px] flex items-center justify-center bg-black bg-opacity-50">
          <div className="loader">Loading...</div>
        </div>
      ) : (
        <div
          className={`container flex flex-col md:grid md:grid-cols-12 justify-center items-center gap-2 mx-auto overflow-auto ${
            isLoading ? "opacity-50" : ""
          }`}
        >
          {episode?.Episodes?.data?.map((item: any, idx: any) => (
            <Link
              href={`/show-on/${item?.id}`}
              key={idx}
              className="w-screen md:w-auto md:col-span-6 lg:col-span-3 overflow-auto mb-5 px-9 md:px-0"
            >
              <div className="rounded-md overflow-auto h-[160px] lg:h-[180px] 2xl:h-[200px]">
                <Image
                  src={item?.poster?.[0]?.url}
                  width={0}
                  height={0}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pb-[15px] mt-0 md:pb-0 flex justify-center items-center flex-col w-full h-[40%] md:h-[30%]">
                <div className="md:mt-4 grid grid-cols-12 justify-between items-center gap-1 w-full mt-4">
                  <div className="col-span-3 mb-1 bg-box-slider-bg-text text-nowrap text-base-content-slider py-1 px-1 flex justify-center text-[10px] rounded-[20px]">
                    {item?.title}
                  </div>
                  <div className="col-span-9 bg-box-slider-bg-text text-nowrap text-box-slider-text-l py-1 px-2 text-[9px] mr-auto rounded-[20px]">
                    <span className="text-white">32:65</span>
                    <span>
                      <div className="inline">&nbsp;</div> |
                    </span>
                    <span>{`${item?.seen} نمایش`}</span>
                  </div>
                </div>
                <div className="w-full mt-1 md:mt-2 text-justify text-[12px] md:text-[14px] max-w-[100%] md:min-w-[100%]">
                  <h3 className="mb-1 text-right text-ellipsis dark:text-description-text md:text-clip overflow-hidden whitespace-nowrap md:text-wrap md:ml-auto">
                    {item?.description}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      <div className="flex justify-center mt-4 gap-2">
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          className={`px-4 py-2 rounded  font-thin text-white ${
            page === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          صفحه قبل
        </button>
        {getDisplayedPages().map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => setPage(pageNum)}
            className={`px-2 py-2 rounded ${
              pageNum === page
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-black"
            }`}
          >
            {pageNum}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          disabled={page === totalPages}
          className={`px-4 py-2 rounded font-thin text-white ${
            page === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          صفحه بعد
        </button>
      </div>
    </div>
  );
}

export default Episode;
