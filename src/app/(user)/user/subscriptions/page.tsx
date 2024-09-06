"use client"
import axios from "@/core/axios";
import React, { useEffect, useState } from "react";
function page() {
  const [invoices, setInvoices] = useState<any[]>();
  const getPeyments = () => {
    axios(`user/getUserInvoices`).then(({ data }) => {
      console.log(data);
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

         
          <div
            className="grid grid-cols-8 gap-4 "
            style={{ borderTop: "2px solid #282828" }}
          >
            <div
              className="text-center w-[165px] h-[58px] flex flex-col justify-center items-center font-bold"
              style={{ borderLeft: "2px solid #282828" }}
            >
              <span className="text-gray-500 font-light">بسته اشتراکی</span>
              <span className="font-bold">اشتراک 1 ماهه</span>
            </div>
            <div
              className="text-center w-[165px] h-[58px] flex flex-col justify-center items-center font-bold"
              style={{ borderLeft: "2px solid #282828" }}
            >
              <span className="font-bold">۱۴۰۳/۶/۱۰</span>
            </div>
            <div
              className="text-center w-[165px] h-[58px] flex flex-col justify-center items-center font-bold"
              style={{ borderLeft: "2px solid #282828" }}
            >
              <span className="font-bold">1,815,000</span>
            </div>
            <div
              className="text-center w-[165px] h-[58px] flex flex-col justify-center items-center font-bold"
              style={{ borderLeft: "2px solid #282828" }}
            >
              <span className="font-bold text-green-600">فعال</span>
            </div>
            <div
              className="text-center w-[165px] h-[58px] flex flex-col justify-center items-center font-bold"
              style={{ borderLeft: "2px solid #282828" }}
            >
              <span className="font-bold">۱۴۰۳/۷/۱۰</span>
            </div>
            <div
              className="text-center w-[165px] h-[58px] flex flex-col justify-center items-center font-bold"
              style={{ borderLeft: "2px solid #282828" }}
            >
              <span className="font-bold">۱۴۰۳/۸/۱۱</span>
            </div>
            <div
              className="text-center w-[165px] h-[58px] flex flex-col justify-center items-center font-bold"
              style={{ borderLeft: "2px solid #282828" }}
            >
              <span className="text-gray-500">---</span>
              <span className="font-bold">---</span>
            </div>
            <div
              className="text-center w-[165px] h-[58px] flex flex-col justify-center items-center font-bold"
              style={{ borderLeft: "2px solid #282828" }}
            >
              <span className="font-bold">---</span>
            </div>
          </div>
         
          <div
            className="grid grid-cols-8 gap-4 "
            style={{ borderTop: "2px solid #282828" }}
          >
            <div
              className="text-center w-[165px] h-[58px] flex flex-col justify-center items-center font-bold"
              style={{ borderLeft: "2px solid #282828" }}
            >
              <span className="text-gray-500 font-light">بسته اشتراکی</span>
              <span className="font-bold">اشتراک 1 ماهه</span>
            </div>
            <div
              className="text-center w-[165px] h-[58px] flex flex-col justify-center items-center font-bold"
              style={{ borderLeft: "2px solid #282828" }}
            >
              <span className="font-bold">۱۴۰۳/۶/۱۰</span>
            </div>
            <div
              className="text-center w-[165px] h-[58px] flex flex-col justify-center items-center font-bold"
              style={{ borderLeft: "2px solid #282828" }}
            >
              <span className="font-bold">1,815,000</span>
            </div>
            <div
              className="text-center w-[165px] h-[58px] flex flex-col justify-center items-center font-bold"
              style={{ borderLeft: "2px solid #282828" }}
            >
              <span className="font-bold text-green-600">فعال</span>
            </div>
            <div
              className="text-center w-[165px] h-[58px] flex flex-col justify-center items-center font-bold"
              style={{ borderLeft: "2px solid #282828" }}
            >
              <span className="font-bold">۱۴۰۳/۷/۱۰</span>
            </div>
            <div
              className="text-center w-[165px] h-[58px] flex flex-col justify-center items-center font-bold"
              style={{ borderLeft: "2px solid #282828" }}
            >
              <span className="font-bold">۱۴۰۳/۸/۱۱</span>
            </div>
            <div
              className="text-center w-[165px] h-[58px] flex flex-col justify-center items-center font-bold"
              style={{ borderLeft: "2px solid #282828" }}
            >
              <span className="text-gray-500">---</span>
              <span className="font-bold">---</span>
            </div>
            <div
              className="text-center w-[165px] h-[58px] flex flex-col justify-center items-center font-bold"
              style={{ borderLeft: "2px solid #282828" }}
            >
              <span className="font-bold">---</span>
            </div>
          </div>
   
           
          
        </div>
      </div>
    </div>
  );
}

export default page;
