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
      <div className="dark:bg-base-25">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="w-1/3 flex py-10 sm:w-auto">
              <div className="bg-[#3899A0] w-auto h-auto p-4 items-center mx-4 rounded-[7px] justify-center flex sm: ">
                <Image
                  className="sm:h-6 w-6"
                  alt="newspaper"
                  width={40}
                  height={40}
                  src="/image/newspaper.png"
                />
              </div>
              <div className="leading-10">
                <div className="font-bold text-xl text-[#3899A0] sm:text-lg">
                  عضویت در خبرنامه
                </div>
                <div className=" text-md text-[#3899A0] sm:text-sm">
                  برای اطلاع از آخرین اطلاعیه ها، عضو شوید
                </div>
              </div>
            </div>
            <div className="w-2/3 flex justify-end items-center p-12 gap-2 sm:w-auto">
              <input
                className="w-[600px] peer font-sans font-normal  transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200  border focus:border-2 border-t-transparent  text-sm px-3 py-2.5 rounded-[7px]  "
                placeholder="ﺟﻬﺖ ﻋﻀﻮﯾﺖ در ﺧﺒﺮﻧﺎﻣﻪ ﺷﻤﺎره ﻣﻮﺑﺎﯾﻞ ﺧﻮد ﺧﻮد را وارد کنید"
              />
              <Link
                className="w-[90px] p-3 bg-gradient-to-r from-[#C7E24E] via-[#5DA070] to-[#6BDCDC] text-white items-center text-center justify-between rounded-[7px] sm:w-auto"
                href={"/"}
              >
                عضویت
              </Link>
            </div>
          </div>

          {/* main footer section */}
          <div>main</div>
          {/* bottom footer section */}
        </div>
      </div>
      <div className="dark:bg-base-75 flex justify-between items-center">
        <div className="container flex justify-between p-4">
          <div className="flex justify-end items-center">09901098765</div>
          <ul className="flex justify-end items-center gap-4">
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
