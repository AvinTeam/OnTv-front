"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/images/android-chrome-192x192.png";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { AUTH_URL } from "@/configs/global";
import { ArrowIcon } from "@/app/_components/icons";
import { show_toast } from "@/utils/functions";
import { Button } from "@/app/_components/button";
export default function SignIn() {
  const [isLoding, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const [mobile, setMobile] = useState<string>();
  const handelSubmit = () => {
    setIsLoading(true);
    axios
      .post(`${AUTH_URL}mobile/auth/send_otp`, { mobile })
      .then(({ data }) => {
        show_toast({ text: data?.message, type: "success" });
        if (data.success) router.push(`/verify?mobile=${mobile}`);
        setMobile("");
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        show_toast({ text: error?.response?.data?.message, type: "error" });
      });
  };
  return (
    <div className="px-10 py-4 w-[330px] h-[360px] bg-base-50 flex justify-around items-center flex-col rounded-md">
      <div className="flex gap-3 mt-6">
        <Image
          src={logo}
          width={0}
          style={{ objectFit: "contain" }}
          height={0}
          className="w-14 h-14 mt-3  "
          alt="logo"
        />
        <div className="flex mt-2 gap-2 flex-col">
          <p className="text-white font-bold text-[12px]">ورود / ثبت نام</p>
          <p className="text-[11px] mb-0">
            جهت ورود یا ثبت‌نام در آن، شماره موبایل خود را وارد کنید.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <input
          className="p-2 rounded-md focus:outline-none bg-[#424242] text-white"
          value={mobile}
          onChange={(event: any) => {
            setMobile(event.target.value);
          }}
        />
        <Button
          onClick={handelSubmit}
          loading={isLoding}
          bgColor="#424242"
          className="py-2 text-white"
        >
          {isLoding ? "درحال درخواست" : "ثبت نام"}
        </Button>
      </div>
      <div className="mr-auto flex justify-center items-center gap-1 cursor-pointer">
        <Link href={"/"} className="text-sm">
          بازگشت
        </Link>
        <ArrowIcon width={8} height={8} className="rotate-180" />
      </div>
    </div>
  );
}
