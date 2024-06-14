import Link from "next/link";
import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <footer className="mt-1 overflow-auto">
      {/* ==================  top footer section ================== */}
      <div className="bg-base-70 drop-shadow-md ">
        <div className="container bg-base-70 md:h-[100px]">
          <div className="grid grid-cols-12 h-[60px] md:h-[141px] gap-2 items-center">
            <div className="pr-2.5 md:pr-0 flex h-full items-center md:-mt-8 col-span-2">
              <Image
                alt="newspaper"
                className="bg-primary px-3 py-2 md:w-10 md:h-10 rounded-[10%] ml-2"
                objectFit="cover"
                width={18}
                sizes="100"
                height={18}
                src="/images/newspaper.png"
              />
              <div className="leading-10">
                <div className=" text-xs text-nowrap font-bold md:text-xl text-primary">
                  عضویت در خبرنامه
                </div>
                <div className="text-xs text-nowrap md:text-md md:pt-2 text-primary">
                  برای اطلاع از آخرین اطلاعیه ها، عضو شوید
                </div>
              </div>
            </div>
            <div className="col-span-10 mr-auto md:-mt-8 ">
              <input
                className=" text-xs w-25 md:w-[600px] ml-2 peer transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200  border focus:border-2 border-t-transparent md:text-sm px-1 py-1 md:px-2.5 md:py-2.5 rounded-[7px]  "
                placeholder="ﺟﻬﺖ ﻋﻀﻮﯾﺖ در ﺧﺒﺮﻧﺎﻣﻪ ﺷﻤﺎره ﻣﻮﺑﺎﯾﻞ ﺧﻮد ﺧﻮد را وارد کنید"
              />
              <Link
                className="ml-2.5 md:ml-0  text-xs md:text-sm p-0.5 md:p-2.5 bg-gradient-to-r from-gradient-second to-gradient-first text-white items-center text-center justify-between rounded-[7px] sm:w-auto"
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
          <div className="grid grid-cols-4 gap-4 md:py-32">
            <div className="col-span-1 flex flex-col justify-center">
              <div className="flex">
                <div className="ml-4">
                  <Image
                    alt="OnTVLogo"
                    width={80}
                    height={80}
                    src={"/images/android-chrome-192x192.png"}
                  />
                </div>
                <div>
                  <p className="md:text-2xl text-base-content-bg font-black mb-2">
                    آن
                  </p>
                  <p className="text-nowrap text-md font-bold">
                    اولین شبکه خبری آنلاین
                  </p>
                </div>
              </div>
              <div className="mr-20 md:-mr-5 flex gap-5 pt-1">
                <span>
                  <svg
                    className="w-9 h-9 dark:text-base-content"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <span>
                  <svg
                    className="w-9 h-9 dark:text-base-content"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <span>
                  <svg
                    className="w-9 h-9 dark:text-base-content"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <span>
                  <svg
                    className="w-9 h-9 dark:text-base-content"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                      clip-rule="evenodd"
                    />
                    <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                  </svg>
                </span>
                <span>
                  <svg
                    className="w-9 h-9 dark:text-base-content"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="hidden md:block col-span-1 mr-auto ">
              <div className="font-bold text-xl mb-5 sm:text-center sm:flex sm:justify-between">
                راه های ارتباطی
              </div>
              <ul>
                <li className="mb-4">
                  <Link href={"/"}>ﻋﻀﻮﯾﺖ در ﺧﺒﺮﻧﺎﻣﻪ</Link>
                </li>
                <li className="mb-4">
                  <Link href={"/"}>ﺗﻤﺎس ﺑﺎ ﻣﺎ</Link>
                </li>
                <li className="mb-4">
                  <Link href={"/about"}>درباره ﺳﺎﯾﺖ</Link>
                </li>
                <li>
                  <Link href={"/"}>خبرگزاری</Link>
                </li>
              </ul>
            </div>
            {/* <div className="hidden md:block col-span-1 mr-auto ">
              <div className="font-bold text-xl mb-5 sm:text-center sm:flex sm:justify-between">
                راه های ارتباطی
              </div>
              <ul>
                <li className="mb-4">
                  <Link href={"/"}>ﻋﻀﻮﯾﺖ در ﺧﺒﺮﻧﺎﻣﻪ</Link>
                </li>
                <li className="mb-4">
                  <Link href={"/"}>ﺗﻤﺎس ﺑﺎ ﻣﺎ</Link>
                </li>
                <li className="mb-4">
                  <Link href={"/"}>درباره ﺳﺎﯾﺖ</Link>
                </li>
                <li>
                  <Link href={"/"}>خبرگزاری</Link>
                </li>
              </ul>
            </div> */}
            {/* <div className="hidden md:block  col-span-1 mr-auto ">
              <div className="font-bold text-xl mb-5 sm:text-center sm:flex sm:justify-between">
                راه های ارتباطی
              </div>
              <ul>
                <li className="mb-4">
                  <Link href={"/"}>ﻋﻀﻮﯾﺖ در ﺧﺒﺮﻧﺎﻣﻪ</Link>
                </li>
                <li className="mb-4">
                  <Link href={"/"}>ﺗﻤﺎس ﺑﺎ ﻣﺎ</Link>
                </li>
                <li className="mb-4">
                  <Link href={"/"}>درباره ﺳﺎﯾﺖ</Link>
                </li>
                <li>
                  <Link href={"/"}>خبرگزاری</Link>
                </li>
              </ul>
            </div>  */}
          </div>
        </div>
      </div>

      {/* ================== bottom footer section ==================  */}
      <div className="h-[10px] dark:bg-base-75  md:h-[52px] flex justify-between items-center">
        <div className="container flex justify-between p-4 sm:h-full ">
          <div className="text-sm mt-5 mr-20 flex md:mr-0 md:mt-0 h-full md:justify-end md:items-center">
            © تمام حقوق برای آن محفوظ است.
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
