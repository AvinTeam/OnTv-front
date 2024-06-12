import Link from "next/link";
import Image from "next/image";
// import { FaFacebookF } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";
// import { FaYoutube  } from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <footer>
      {/* ==================  top footer section ================== */}
      <div className="bg-base-70  drop-shadow-md">
        <div className="container bg-base-70 md:h-[141px] p-3">
          <div className="grid grid-cols-12 md:h-[141px] gap-2 items-center">
            <div className=" flex h-full items-center col-span-2 mt-2 ">
              <Image
                alt="newspaper"
                className="bg-primary md:w-12 md:h-12 rounded-[10%] ml-2"
                objectFit="cover"
                width={20}
                height={20}
                src="/images/newspaper.png"
              />
              <div className="leading-10">
                <div className=" text-xs text-nowrap font-bold md:text-xl text-primary">
                  عضویت در خبرنامه
                </div>
                <div className="text-nowrap md:text-lg text-primary" style={{fontSize: '8px'}}>
                  برای اطلاع از آخرین اطلاعیه ها، عضو شوید
                </div>
              </div>
            </div>
            <div className="col-span-10 mr-auto">
              <input
                className=" text-xs w-25 md:w-[600px] ml-2 peer transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200  border focus:border-2 border-t-transparent md:text-sm px-1 py-1 md:px-3 md:py-3.5 rounded-[7px]  "
                placeholder="ﺟﻬﺖ ﻋﻀﻮﯾﺖ در ﺧﺒﺮﻧﺎﻣﻪ ﺷﻤﺎره ﻣﻮﺑﺎﯾﻞ ﺧﻮد ﺧﻮد را وارد کنید"
              />
              <Link
                className=" text-xs md:text-sm p-0.5 md:p-3 bg-gradient-to-r from-gradient-second to-gradient-first text-white items-center text-center justify-between rounded-[7px] sm:w-auto"
                href={"/"}
              >
                عضویت
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ==================  main footer section ================== */}
      <div className="dark:bg-base-25">
        <div className="container">
          <div className="">
            <div>jhgjh</div>
            <div>jhgjh</div>
            <div>jhgjh</div>
            <div>jhgjh</div>
            <div>jhgjh</div>
          </div>
        </div>
      </div>

      {/* ================== bottom footer section ==================  */}
      <div className="h-[27px] dark:bg-base-75  md:h-[72px] flex justify-between items-center">
        <div className="container flex justify-between p-4">
            <p className=" md:hidden text-sm mr-20">
            © تمام حقوق برای آن محفوظ است.</p>
          <div className="hidden text-sm md:flex justify-end items-center">
            09901098765
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-4 mr-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
              />
            </svg>
          </div>
          <ul className="hidden text-xs md:flex justify-end items-center gap-4">
            <li>آنلاین</li>
            <li>کانال ها</li>
            <li>زمان پخش</li>
            <li>اخبار صوتی</li>
            <li>ویژه ها</li>
            <li>آرشیو محتوایی</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
