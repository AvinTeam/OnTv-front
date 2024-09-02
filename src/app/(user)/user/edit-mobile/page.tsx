"use client";
import React, { useLayoutEffect, useState } from "react";
import axios from "@/core/axios";
import LoadingSpinner from "@/app/_components/loading/loading";
import { Button } from "@/app/_components/button";
import { show_toast } from "@/utils/functions";
export default function EditMobile() {
   const [userId, setUserId] = useState<string | null>(null);
  const [mobile, setMobile] = useState<string | null>(null);
  const [loadingِData, setLoadingData] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handelSubmit = () => {
    setLoading(true);
   
    axios
      .post(`profile/${userId}`,{mobile: mobile })
      .then(({ data }) => {
        setLoading(false);

        localStorage.setItem("user_name", JSON.stringify(data.user));

        show_toast({ text: data?.message, type: "success" });
      }).catch(() => {
        setLoading(false)
      })
  };
 
  useLayoutEffect(() => {
    
    setLoadingData(true)
    const userData = localStorage.getItem("user_name");
    const parsedData = userData ? JSON.parse(userData) : null;

    setUserId(parsedData?.id);
    if (!userId) return;
   }, [userId]);
  if (loadingِData) {
    return <LoadingSpinner message="در حال دریافت اطلاعات..." />;
  }
  return (
    <div className=" h-full p-4 flex flex-col gap-3 justify-center items-center w-screen md:w-full overflow-hidden ">
      <h2 className="text-white mt-6 text-xl md:text-2xl">
        ویرایش شماره موبایل
      </h2>
      <div className="text-center select-none bg-[#242323] h-auto min-w-[320px] md:min-w-[500px] overflow-hidden shadow-2xl flex justify-center items-center p-4 rounded-md">
        <div className="h-full w-full flex flex-col gap-2 p-3 md:p-8">
          <div className="flex gap-2 mt-7 justify-between items-center">
            <Button
              onClick={handelSubmit}
              bgColor="#009494"
              className="w-full h-full py-2"
              color={loading ? "#424242" : "white"}
              loading={loading}
              loadingColor="#142a58"
            >
              {loading ? "درحال درخواست" : "تایید"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
