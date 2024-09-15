"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { NewestCard } from "@/app/_components/cards/newest-card";
import { API_URL } from "@/configs/global";
async function getAllCut(episode_id: any, page: number = 1,) {
  const res = await fetch(`${API_URL}cut/publicIndex?episode[slug]=${episode_id}&page=${page}`, {
    cache: "no-cache",
  });
  if (res.ok) {
    return await res.json();
  } else {
    return null;
  }
}
function CutItems({ params }: { params: { episode: string } }) {
  const [page, setPage] = useState<number>(1);

  const { data: cut, isLoading } = useQuery({
    queryKey: ["cut", page],
    queryFn: () => getAllCut(params.episode.split(".")[0], page),
  });

  const totalPages = cut?.Cuts?.meta?.last_page || 1;

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
  if (!cut?.Cuts?.data?.length) {
    return <div>نتیجه ای یافت نشد</div>;
  }

  return (
    <div className="w-full h-full">
      {isLoading ? (
        <div className=" h-[400px] flex items-center justify-center bg-black bg-opacity-50">
          <div className="loader">Loading...</div>
        </div>
      ) : (
        <>
          <div
            className={`container flex px-4 md:px-0 flex-col md:grid w-full md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 justify-center items-center gap-2 mx-auto overflow-auto ${isLoading ? "opacity-50" : ""
              }`}
          >
            {cut?.Cuts?.data?.map((item: any, index: any) => (
              <React.Fragment key={item?.id}>
                <NewestCard data={{ ...item, index: index + 1 }} path="cut" />
              </React.Fragment>
            ))}
          </div>
        </>
      )}

      <div className="flex justify-center mt-4 gap-2">
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          className={`px-4 py-2 rounded  font-thin text-white ${page === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
          صفحه قبل
        </button>
        {getDisplayedPages().map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => setPage(pageNum)}
            className={`px-2 py-2 rounded ${pageNum === page
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
          className={`px-4 py-2 rounded font-thin text-white ${page === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
          صفحه بعد
        </button>
      </div>
    </div>
  );
}

export default CutItems;
