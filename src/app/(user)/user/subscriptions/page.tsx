"use client";
import axios from "@/core/axios";
import { convertToJalali } from "@/utils/functions";
import React, { useEffect, useState } from "react";
const getSubscriptionDuration = (days: number) => {
  if (days <= 31) return "1 ماهه";
  if (days <= 62) return "2 ماهه";
  if (days <= 93) return "3 ماهه";
  if (days <= 124) return "4 ماهه";
  if (days <= 155) return "5 ماهه";
  if (days <= 186) return "6 ماهه";
  if (days <= 217) return "7 ماهه";
  if (days <= 248) return "8 ماهه";
  if (days <= 279) return "9 ماهه";
  if (days <= 310) return "10 ماهه";
  if (days <= 341) return "11 ماهه";
  return "12 ماهه یا بیشتر";
};
function Subscriptions() {
  const [invoices, setInvoices] = useState<any[]>();
  const getPeyments = () => {
    axios(`user/getUserInvoices`).then(({ data }) => {
      setInvoices(data?.invoices?.data);
    });
  };
  useEffect(() => {
    getPeyments();
  }, []);
  return (
    <div className="w-full h-full pt-6 px-1 [&>*]:text-[#959595]">
      <div
        className="w-screen lg:w-[750px] xl:w-[1050px] 2xl:w-auto h-[500px] fixed overflow-scroll"
        style={{ scrollbarWidth: "auto", scrollbarColor: "auto" }}
      >
        <div className="border  rounded-lg border-[#282828] w-[1300px]">
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

          {invoices?.length &&
            invoices?.map((item) => (
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
                  <span className="font-bold">{` اشتراک ${getSubscriptionDuration(
                    item?.period
                  )}`}</span>
                </div>
                <div
                  className="text-center w-[165px] h-[58px] flex flex-col justify-center items-center font-bold"
                  style={{ borderLeft: "2px solid #282828" }}
                >
                  <span className="font-bold">{convertToJalali(item?.created_at)}</span>
                </div>
                <div
                  className="text-center w-[165px] h-[58px] flex flex-col justify-center items-center font-bold"
                  style={{ borderLeft: "2px solid #282828" }}
                >
                  <span className="font-bold">
                    {item?.price_after_discount
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </span>
                </div>
                <div
                  className="text-center w-[165px] h-[58px] flex flex-col justify-center items-center font-bold"
                  style={{ borderLeft: "2px solid #282828" }}
                >
                  <span className="font-bold text-green-600">
                    {item?.status == "failed"
                      ? "پرداخت ناموفق"
                      : item?.status == "success"
                        ? "پرداخت موفق"
                        : " درانتظار عملیات"}
                  </span>
                </div>
                <div
                  className="text-center w-[165px] h-[58px] flex flex-col justify-center items-center font-bold"
                  style={{ borderLeft: "2px solid #282828" }}
                >
                  <span className="font-bold">---</span>
                </div>
                <div
                  className="text-center w-[165px] h-[58px] flex flex-col justify-center items-center font-bold"
                  style={{ borderLeft: "2px solid #282828" }}
                >
                  <span className="font-bold">---</span>
                </div>
                <div
                  className="text-center w-[165px] h-[58px] flex flex-col justify-center items-center font-bold"
                  style={{ borderLeft: "2px solid #282828" }}
                >
                  <span className="text-gray-500">{item?.gateway?.name ?? "---"}</span>
                  <span className="font-bold">{item?.tracking_code ?? "---"}</span>
                </div>
                <div
                  className="text-center w-[165px] h-[58px] flex flex-col justify-center items-center font-bold"
                  style={{ borderLeft: "2px solid #282828" }}
                >
                  <span className="font-bold">---</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Subscriptions;
