"use client"
import { Button } from "@/app/_components/button";
import { DiscountIcon } from "@/app/_components/icons";
import React, { useState } from "react";

function DiscountCode() {
    const [value , setValue] = useState()
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between items-center select-none">
      <div className="flex justify-center items-center gap-2 mr-2">
        <DiscountIcon />
        <p className="font-light text-xs md:text-sm lg:text-[1rem] mt-2 lg:mt-0 text-nowrap">
          کد تخفیف / کد هدیه
        </p>
      </div>
      <div className="flex lg:flex-row w-full items-center gap-2 py-4 px-2">
        <input
          type="text"
          value={value}
          onChange={(e: any)=> setValue(e.target.value)}
          placeholder="کد تخفیف خود را وارد کنید"
          style={{ border: "1px solid rgba(255,255,255,.12)" }}
          className="text-ellipsis w-full cursor-pointer whitespace-nowrap rounded-[0.8rem] p-[0.5rem] outline-none transition-all relative bg-[rgba(0,0,0,0)] text-sm text-[#e8e8e8]"
        />{" "}
        <Button
          className="w-full ml-2 lg:mt-0 lg:w-[150px] rounded-lg p-2 text-sm font-bold"
          style={{
            color: value ? "#000" : "rgba(12,12,12,.5)",
            background: value ? "#fff" : "rgba(255,255,255,.25)",
            boxShadow: "inset 0 0 0 1px rgba(0,0,0,0)",
          }}
        >
          تایید
        </Button>
      </div>
    </div>
  );
}

export default DiscountCode;
