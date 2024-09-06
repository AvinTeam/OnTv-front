"use client"
import { useUserStore } from "@/stores/user.store";
import React from "react";

function Packages() {
  const user = useUserStore((store) => store.user);
  return (
    <div className="mt-8 h-full p-4 flex flex-col gap-3  w-screen md:w-full overflow-hidden ">
      <div className="flex justify-between w-full">
        <p className="text-primary">خرید اشتراک آن</p>
        <p className="text-primary">برای شماره موبایل: {user?.mobile}</p>
      </div>
      <div className="text-center h-[2px] select-none bg-[#242323]  min-w-[320px] md:min-w-[500px] overflow-hidden shadow-2xl flex justify-center items-center rounded-md"></div>
      <div>hjgjhgjh</div>
    </div>
  );
}

export default Packages;
