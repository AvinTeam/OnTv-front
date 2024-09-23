"use client";
import LoadingSpinner from "@/app/_components/loading/loading";
import axios from "@/core/axios";
import {
  convertGregorianToJalaliFullTim,
  convertToJalali,
  getAllDate,
} from "@/utils/functions";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

function Subscriptions() {
  const [page, setPage] = useState<any>(1);
  const { data: invoices, isLoading } = useQuery({
    queryKey: ["invoices", { page }],
    queryFn: () => getPeyments(page),
    staleTime: 50000,
  });
  const totalPages = invoices?.invoices?.meta?.last_page;
  const handleNextPage = () => {
    if (page < totalPages) {
      setPage((prevPage: any) => prevPage + 1);
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
  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage: any) => prevPage - 1);
    }
  };

  const getPeyments = (page = 1) => {
    return axios.get(`user/getUserInvoices?page=${page}`).then(({ data }) => data);//status=SUCCESS&
  };

  if (isLoading) {
    return <LoadingSpinner message="در حال دریافت اطلاعات..." />;
  }
  return (
    <div className="w-full h-full pt-6 px-1 overflow-y-hidden [&>*]:text-[#959595]">

      {!invoices?.invoices?.data?.length ? (
        <p className="p-9">شما تاکنون هیچ خریدی انجام نداده‌اید.</p>
      ) : (
        <div
          className="overflow-y-hidden"
         >
          <>
            <div className="border rounded-lg border-[#282828] w-[1300px] 2xl:w-[1400px]">
              <div className="grid grid-cols-8 gap-4 overflow-hidden bg-[#1e1e1e] rounded-tr-lg rounded-t-lg ">
                <div
                  className="text-center w-[165px] h-[58px] flex justify-center items-center font-bold"
                  style={{ borderLeft: "2px solid #282828" }}
                >
                  نوع خرید
                </div>
                <div
                  className="text-center w-[165px] h-[58px] flex justify-center items-center font-bold"
                  style={{ borderLeft: "2px solid #282828" }}
                >
                  تاریخ خرید
                </div>
                <div
                  className="text-center w-[165px] h-[58px] flex justify-center items-center font-bold"
                  style={{ borderLeft: "2px solid #282828" }}
                >
                  مبلغ خرید
                </div>
                <div
                  className="text-center w-[165px] h-[58px] flex justify-center items-center font-bold"
                  style={{ borderLeft: "2px solid #282828" }}
                >
                  وضعیت اشتراک
                </div>
                <div
                  className="text-center w-[165px] h-[58px] flex justify-center items-center font-bold"
                  style={{ borderLeft: "2px solid #282828" }}
                >
                  شروع اشتراک
                </div>
                <div
                  className="text-center w-[165px] h-[58px] flex justify-center items-center font-bold"
                  style={{ borderLeft: "2px solid #282828" }}
                >
                  پایان اشتراک
                </div>
                <div
                  className="text-center w-[165px] h-[58px] flex justify-center items-center font-bold"
                  style={{ borderLeft: "2px solid #282828" }}
                >
                  جزئیات پرداخت
                </div>
                <div
                  className="text-center w-[165px] h-[58px] flex justify-center items-center font-bold"
                  style={{ borderLeft: "2px solid #282828" }}
                >
                  کد تخفیف
                </div>
              </div>

              {invoices?.invoices?.data?.length ? (
                invoices?.invoices?.data?.map((item: any) => (
                  <div
                    key={item?.id}
                    className="grid grid-cols-8 gap-4 "
                    style={{ borderTop: "2px solid #282828" }}
                  >
                    <div
                      className="text-center w-[165px] h-[58px] flex flex-col justify-center items-center font-bold"
                      style={{ borderLeft: "2px solid #282828" }}
                    >
                      <span className="text-gray-500 font-light">بسته اشتراکی</span>
                      <span className="font-bold">
                        {item?.description?.split("-")?.[0]}
                      </span>
                    </div>
                    <div
                      className="text-center w-[165px] h-[58px] flex flex-col justify-center items-center font-bold"
                      style={{ borderLeft: "2px solid #282828" }}
                    >
                      <span className="font-bold">
                        {convertToJalali(item?.created_at)}
                      </span>
                    </div>
                    <div
                      className="text-center w-[165px] h-[58px] flex flex-col justify-center items-center font-bold"
                      style={{ borderLeft: "2px solid #282828" }}
                    >
                      <span className="font-bold">
                        {item?.price_after_discount + item?.tax_cost ?? 0
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </span>
                    </div>
                    <div
                      className="text-center w-[165px] h-[58px] flex flex-col justify-center items-center font-bold"
                      style={{ borderLeft: "2px solid #282828" }}
                    >
                      <span className="font-bold text-green-600">
                        {new Date() > new Date(item?.items?.[0]?.meta?.to)
                          ? "غیر فعال"
                          : !item?.items?.[0]?.meta ? "---" : "فعال"}
                      </span>
                    </div>
                    <div
                      className="text-center w-[165px] h-[58px] flex flex-col justify-center items-center font-bold"
                      style={{ borderLeft: "2px solid #282828" }}
                    >
                      <span className="font-bold">
                        {getAllDate(
                          item?.items?.[0]?.meta?.from
                        ) || "---"}
                      </span>
                    </div>
                    <div
                      className="text-center w-[165px] h-[58px] flex flex-col justify-center items-center font-bold"
                      style={{ borderLeft: "2px solid #282828" }}
                    >
                      <span className="font-bold">
                        {getAllDate(
                          item?.items?.[0]?.meta?.to
                        ) || "---"}
                      </span>
                    </div>
                    <div
                      className="text-center w-[165px] h-[58px] flex flex-col justify-center items-center font-bold"
                      style={{ borderLeft: "2px solid #282828" }}
                    >
                      <span className="text-gray-500">
                        {item?.gateway?.name ?? "---"}
                      </span>
                      <span className="font-bold">
                        {item?.tracking_code ?? "---"}
                      </span>
                    </div>
                    <div
                      className="text-center w-[165px] h-[58px] flex flex-col justify-center items-center font-bold"
                      style={{ borderLeft: "2px solid #282828" }}
                    >
                      <span className="font-bold">---</span>
                    </div>
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>
          </>
        </div>
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
              {getDisplayedPages().map((pageNum: any) => (
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

export default Subscriptions;
