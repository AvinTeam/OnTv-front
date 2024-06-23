import Image from "next/image";
import Link from "next/link";

export default async function SignIn() {
  return (
    <div className="px-10 py-4 md:w-[450px] md:h-[450px] bg-base-50 flex justify-around items-center flex-col rounded-sm">
      <div className="flex gap-3 mt-6">
        <Image
          src={"/images/android-chrome-192x192.png"}
          width={0}
          height={0}
          className="w-20 h-20"
          alt="logo"
        />
        <div className="flex mt-2 gap-2 flex-col">
          <p className="text-base-content-slider font-bold">ورود / ثبت نام</p>
          <p className="text-sm">
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
          className="ml-0 w-20 md:w-auto text-xs md:text-sm p-0.5 md:p-2.5 bg-gradient-to-r font-bold from-gradient-second to-gradient-first text-white items-center flex text-center justify-center rounded-[7px] sm:w-auto"
          href={"/"}
        >
          تایید کد
        </Link>
      </div>
      <div className="mr-auto flex justify-center items-center gap-1 cursor-pointer">
        <span>بازگشت</span>
        <span>
          <Image src={"images/icon.webp"} alt="arrow" width={6} height={6} />
        </span>
      </div>
    </div>
  );
}
