import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/images/android-chrome-192x192.png"
export default async function SignIn() {
  return (
    <div className="px-10 py-4 w-[330px] h-[360px] bg-base-50 flex justify-around items-center flex-col rounded-md">
      <div className="flex gap-3 mt-6">
        <Image
          src={logo}
          width={0}
          style={{objectFit: "contain"}}
          height={0}
          className="w-14 h-14 mt-3  "
          alt="logo"
        />
        <div className="flex mt-2 gap-2 flex-col">
          <p className="text-base-content-slider font-bold text-[12px]">ورود / ثبت نام</p>
          <p className="text-[11px] mb-0">
            جهت ورود یا ثبت‌نام در آن، شماره موبایل خود را وارد کنید.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-12 gap-2">
          <input className="col-span-10 p-1.5 rounded-md" />
          <input value={"98+"} className="col-span-2 p-2 text-[12px] rounded-md" />
        </div>
        <Link
          className="text-xs  p-2 bg-gradient-to-r from-gradient-second to-gradient-first font-bold text-white items-center flex text-center justify-center rounded-[7px] w-auto"
          href={"/"}
        >
          تایید کد
        </Link>
      </div>
      <div className="mr-auto flex justify-center items-center gap-1 cursor-pointer">
        <Link href={"/"} className="text-sm">بازگشت</Link>
        <span>
          <Image src={"/images/icon.webp"} style={{objectFit: "contain"}} className="ml-3" alt="arrow" width={6} height={6} />
        </span>
      </div>
    </div>
  );
}
