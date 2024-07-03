import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/images/android-chrome-192x192.png"

export default function Verify() {
  return (
    <div className="px-10 py-4 w-[330px] h-[390px] bg-base-50 flex justify-around items-center flex-col rounded-md">
      <div className="flex gap-3 mt-10">
        <Image
          src={logo}
          width={0}
          objectFit="contain"
          height={0}
          className="w-14 h-14 mt-3"
          alt="logo"
        />
        <div className="flex mt-2 flex-col gap-2">
          <p className="text-base-content-slider font-bold text-[12px]">ورود به آن</p>
          <p className="text-[11px] mb-6">
            جهت ورود یا ثبت‌نام در آن، شماره موبایل خود را وارد کنید.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-5 gap-2">
          <input className="p-2 rounded-md" />
          <input className="p-2 rounded-md" />
          <input className="p-2 rounded-md" />
          <input className="p-2 rounded-md" />
          <input className="p-2 rounded-md" />
        </div>
        <p className="text-center font-bold text-lg">22 : 01</p>
        <Link
          className="w-auto text-xs md:text-sm p-2 bg-gradient-to-r from-gradient-second to-gradient-first font-bold text-white items-center flex text-center justify-center rounded-[7px] sm:w-auto"
          href={"/"}
        >
          تایید کد
        </Link>
        <p className="text-center text-[12px] cursor-pointer"> ارسال دوباره کد</p>
      </div>
      <div className="mr-auto flex justify-center items-center gap-1 cursor-pointer">
        <Link href={"/signin"} className="text-sm">بازگشت</Link>
        <span>
          <Image src={"/images/icon.webp"} style={{objectFit:"contain"}} className="ml-3" alt="arrow" width={6} height={6} />
        </span>
      </div>
    </div>
  );
}
