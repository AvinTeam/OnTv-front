"use client";
import React, { useState } from "react";
import axios from "@/core/axios";
import { Button } from "@/app/_components/button";
import { show_toast } from "@/utils/functions";
import { useUserStore } from "@/stores/user.store";
export default function EditMobile() {
  const user = useUserStore((store) => store.user);
  const addUser = useUserStore((store) => store.addUser);

  const [mobile, setMobile] = useState<string | null>(null);
  const [verifyCode, setVerifyCode] = useState<string | null>(null);
  const [isSuccessMobile, setIsSuccessMobile] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handelSubmit = () => {
    setLoading(true);
    const params = {
      ...(!isSuccessMobile
        ? { mobile: mobile }
        : { input: mobile, code: verifyCode }),
    };
    const url = isSuccessMobile
      ? `profile/${user?.id}/change/verify`
      : `profile/${user?.id}/change`;
    axios
      .post(url, params)
      .then(({ data }) => {
        show_toast({ text: data?.message, type: "success" });
        if (data?.success) setIsSuccessMobile(true);
        setLoading(false);
        if (isSuccessMobile) {
          addUser(data?.user);
          setIsSuccessMobile(false)
          setMobile(null);
          setVerifyCode(null);
        }
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <div className=" h-full p-4 flex flex-col gap-3 justify-center items-center w-screen md:w-full overflow-hidden ">
      <h2 className="text-white mt-6 text-xl md:text-2xl">
        ویرایش شماره موبایل
      </h2>
      <div className="text-center select-none bg-[#242323] h-auto min-w-[320px] md:min-w-[500px] overflow-hidden shadow-2xl flex justify-center items-center p-4 rounded-md">
        <div className="h-full w-full flex flex-col gap-2 p-3 md:p-8">
          <div className="mt-8 text-sm flex flex-col justify-start gap-2 items-start text-white">
            {!isSuccessMobile ? (
              <>
                <p>شماره موبایل : </p>
                <input
                  type="text"
                  value={mobile || ""}
                  placeholder="لطفا شماره موبایل خود را وارد نمایید"
                  onChange={(e) => {
                    setMobile(e.target.value || "");
                  }}
                  className="bg-[#424242] focus:outline-none w-full rounded-md p-3"
                />
              </>
            ) : (
              <>
                <p> کد تایید : </p>
                <input
                  type="text"
                  value={verifyCode || ""}
                  placeholder="لطفا  کد تایید را وارد نمایید"
                  onChange={(e) => {
                    setVerifyCode(e.target.value || "");
                  }}
                  className="bg-[#424242] focus:outline-none w-full rounded-md p-3"
                />
              </>
            )}
          </div>
          <div className="flex gap-2 mt-7 justify-between items-center">
            <Button
              onClick={handelSubmit}
              bgColor="#009494"
              className="w-full h-full py-2"
              color={loading ? "#424242" : "white"}
              loading={loading}
              loadingColor="#142a58"
            >
              {loading ? "درحال درخواست" : isSuccessMobile ? "تایید" : "ارسال"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
