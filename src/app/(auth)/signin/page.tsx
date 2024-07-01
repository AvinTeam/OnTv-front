import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/images/android-chrome-192x192.png"
export default async function SignIn() {
  return (
    <div className="px-10 py-4 w-[330px] h-[400px] md:w-[450px] md:h-[450px] bg-base-50 flex justify-around items-center flex-col rounded-sm">
      <div className="flex gap-3 mt-6">
        <Image
          src={logo}
          width={0}
          style={{objectFit: "contain"}}
          height={0}
          className="w-14 h-14 md:w-20 md:h-20 mt-3 md:mt-0"
          alt="logo"
        />
        <div className="flex mt-2 gap-2 flex-col">
          <p className="text-base-content-slider font-bold">ورود / ثبت نام</p>
          <p className="text-[10px] md:text-sm mb-0 md:mb-0">
            جهت ورود یا ثبت‌نام در آن، شماره موبایل خود را وارد کنید.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-12 gap-2">
          <input className="col-span-10 p-2 rounded-md" />
          <input value={"98+"} className="col-span-2 p-2 rounded-md" />
        </div>
        <Link
          className="w-auto text-xs md:text-sm p-2.5 bg-gradient-to-r from-gradient-second to-gradient-first font-bold text-white items-center flex text-center justify-center rounded-[7px] sm:w-auto"
          href={"/"}
        >
          تایید کد
        </Link>
      </div>
      <div className="mr-auto flex justify-center items-center gap-1 cursor-pointer">
        <Link href={"/"}>بازگشت</Link>
        <span>
          <Image src={"/images/icon.webp"} alt="arrow" width={6} height={6} />
        </span>
      </div>
    </div>
  );
}
