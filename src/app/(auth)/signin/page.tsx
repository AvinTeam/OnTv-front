"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/images/android-chrome-192x192.png";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { AUTH_URL } from "@/configs/global";
export default function SignIn() {
  const router = useRouter();
  const [mobile, setMobile] = useState<string>();
  const handelSubmit = () => {
    axios
      .post(`${AUTH_URL}mobile/auth/send_otp`, { mobile })
      .then(({ data }) => {
        if (data.success) router.push(`/verify?mobile=${mobile}`);
        setMobile("")
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
          className="text-xs p-2.5 bg-base-25 font-bold text-white items-center flex text-center justify-center rounded-[7px] w-auto"
        >
          ثبت نام
        </button>
      </div>
      <div className="mr-auto flex justify-center items-center gap-1 cursor-pointer">
        <Link href={"/"} className="text-sm">
          بازگشت
        </Link>
        <span>
          <svg
            fill="#fff"
            height="10px"
            className="rotate-180"
            width="10px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512.005 512.005"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                {" "}
                <g>
                  <path d="M388.418,240.923L153.751,6.256c-8.341-8.341-21.824-8.341-30.165,0s-8.341,21.824,0,30.165L343.17,256.005 L123.586,475.589c-8.341,8.341-8.341,21.824,0,30.165c4.16,4.16,9.621,6.251,15.083,6.251c5.461,0,10.923-2.091,15.083-6.251 l234.667-234.667C396.759,262.747,396.759,249.264,388.418,240.923z"></path>
                </g>
              </g>
            </g>
          </svg>
        </span>
      </div>
    </div>
  );
}
