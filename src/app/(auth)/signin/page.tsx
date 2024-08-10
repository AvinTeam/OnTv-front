"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/images/android-chrome-192x192.png";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { AUTH_URL } from "@/configs/global";
import { ArrowIcon } from "@/app/_components/icons";
export default function SignIn() {
  const [isLoding, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const [mobile, setMobile] = useState<string>();
  const handelSubmit = () => {
    setIsLoading(true);
    axios
      .post(`${AUTH_URL}mobile/auth/send_otp`, { mobile })
      .then(({ data }) => {
        if (data.success) router.push(`/verify?mobile=${mobile}`);
        setMobile("");
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
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
          className="p-2 rounded-md focus:outline-none bg-base-25 text-white"
          value={mobile}
          onChange={(event: any) => {
            setMobile(event.target.value);
          }}
        />
        <button
          onClick={handelSubmit}
          disabled={isLoding}
          className={`text-xs p-2.5 bg-base-25 font-bold ${isLoding ? 'text-[gray]' : "text-white"} items-center flex text-center justify-center rounded-[7px] w-auto`}
        >
          {isLoding ? "در حال درخواست" : "ثبت نام"}
        </button>
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
