"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { createPortal } from 'react-dom';
import Image from "next/image";
const bg_color_first: string =
  "linear-gradient(180deg,hsla(0,0%,5%,.4),hsla(0,0%,5%,.4) .41%,hsla(0,0%,5%,.399) .9%,hsla(0,0%,5%,.396) 1.64%,hsla(0,0%,5%,.391) 2.84%,hsla(0,0%,5%,.383) 4.68%,hsla(0,0%,5%,.372) 7.35%,hsla(0,0%,5%,.356) 11.04%,hsla(0,0%,5%,.336) 15.94%,hsla(0,0%,5%,.31) 22.23%,hsla(0,0%,5%,.278) 30.12%,hsla(0,0%,5%,.238) 39.78%,hsla(0,0%,5%,.192) 51.41%,hsla(0,0%,5%,.137) 65.2%,hsla(0,0%,5%,.073) 81.33%,hsla(0,0%,5%,0))";
const bg_color_second: string = "hsla(0,0%,5%,.75)";
export const Header: React.FC = () => {
  const [bgColor, setBgColor] = useState(bg_color_first);
  const [isSearchActive, setIsSearchActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor(bg_color_second);
      } else {
        setBgColor(bg_color_first);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className="mx-auto w-full sticky top-0 z-[1000] overflow-auto transition-all"
      style={{
        background: bgColor,
        backdropFilter: bgColor === bg_color_first ? "none" : "blur(40px)",
      }}
    >
      <div className="container mx-auto grid h-full grid-cols-[auto_auto] md:grid-cols-[auto_1fr_auto] justify-between items-center gap-4">
        {/* ================= mobole menue =============== */}
        <div className="md:hidden mr-2 bg-base-content-bg p-2 text-base-content rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            width={"30px"}
            height={"30px"}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div className="flex ml-0 mr-4 h-full overflow-hidden w-20 py-2.5 justify-center items-center">
          <Image
            alt="OnTVLogo"
            width={0}
            style={{ objectFit: "contain" }}
            className="w-12 h-12"
            height={0}
            src={"/images/android-chrome-192x192.png"}
          />
        </div>
        <nav className="hidden md:flex justify-start">
          <ul className="flex justify-between gap-4 text-primary-content">
            <li className="mr-4 flex justify-center items-center">
              <Link
                href="#"
                className="hover:bg-[#242424] text-center rounded-md px-3 py-[6px] text-[11px] md:text-[12px] "
              >
                صفحه نخست
              </Link>
            </li>
            <li className="flex justify-center items-center gap-1">
              <Link
                href="#"
                className="hover:bg-[#242424] text-center rounded-md px-3 py-[6px] text-[11px] md:text-[12px] "
              >
                تولیدات
              </Link>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11.468"
                height="7.442"
                viewBox="677.333 698 11.468 7.442"
              >
                <path
                  d="m683.067 705.442-5.734-5.734 1.708-1.708 4.026 4.026 4.026-4.026 1.708 1.708-5.734 5.734Z"
                  fill="#fff"
                  fill-rule="evenodd"
                  data-name="Path 36"
                />
              </svg>{" "} */}
            </li>
            <li className="flex justify-center items-center">
              <Link
                href="#"
                className="hover:bg-[#242424] flex gap-1 justify-center items-center text-center rounded-md px-3 py-[6px] text-[11px] md:text-[12px] "
              >
                <p>آرشیو</p>
               <div className="rotate-180">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="gray"
                  width={"13px"}
                  height={"13px"}
                  viewBox="0 0 24 24"
                >
                  <path d="M17 16H7a1 1 0 0 1-.77-1.64l5-6a1 1 0 0 1 1.54 0l5 6A1 1 0 0 1 17 16Z"></path>
                </svg>
               </div>
              </Link>
            </li>
    
            {/* <li className="flex justify-center items-center gap-1">
              <Link href="#" className="hover:underline">
                اخبار صوتی
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11.468"
                height="7.442"
                viewBox="677.333 698 11.468 7.442"
              >
                <path
                  d="m683.067 705.442-5.734-5.734 1.708-1.708 4.026 4.026 4.026-4.026 1.708 1.708-5.734 5.734Z"
                  fill="#fff"
                  fill-rule="evenodd"
                  data-name="Path 36"
                />
              </svg>{" "}
            </li> */}
            <li className="flex justify-center items-center">
              <Link
                href="#"
                className="hover:bg-[#242424] text-center rounded-md px-3 py-[6px] text-[11px] md:text-[12px] "
              >
                درباره ما
              </Link>
            </li>
            <li className="flex justify-center items-center">
              <Link
                href="#"
                className="hover:bg-[#242424] text-center rounded-md px-3 py-[6px] text-[11px] md:text-[12px] "
              >
                ارتباط با ما
              </Link>
            </li>
            <li className="flex justify-center items-center">
               <div
               onClick={()=> setIsSearchActive(true)}
                 className="cursor-pointer hover:bg-[#242424] flex gap-1 justify-center items-center text-center rounded-md pl-3 pr-1 py-[6px] text-[11px] md:text-[12px] "
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="gray" width={'18px'} height={'18px'} viewBox="0 0 24 24"><path d="M19.16 4.84a8 8 0 0 0-12 10.56l-4.4 4.39a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.42-4.39a8 8 0 0 0 10.56-12Zm-1.42 9.9a6 6 0 1 1 0-8.48 6 6 0 0 1 0 8.48Z"></path></svg>
                <p>جستجو</p>
              </div>
            </li>
            {/* <li className="flex justify-center items-center gap-1">
              <Link href="#" className="hover:underline">
                   
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11.468"
                height="7.442"
                viewBox="677.333 698 11.468 7.442"
              >
                <path
                  d="m683.067 705.442-5.734-5.734 1.708-1.708 4.026 4.026 4.026-4.026 1.708 1.708-5.734 5.734Z"
                  fill="#fff"
                  fill-rule="evenodd"
                  data-name="Path 36"
                />
              </svg>{" "}
            </li>  */}
          </ul>
        </nav>
        {/* <div className="hidden md:flex text-primary-content justify-end ml-4">
          <Link
            href="/signin"
            key={Math.random()}
            className="px-4 py-2 bg-transparent text-secondary-content hover:bg-base-content-slider border border-text-secondary-content border-spacing-1 text-black rounded-md hover:bg-gray-100"
          >
            ورود/ثبت نام
          </Link>
        </div> */}
      </div>
      {isSearchActive && (
        // <div className="fixed inset-0 bg-[black] bg-opacity-90 z-50 flex items-center justify-start">
        //   <div className="  mx-auto p-4 text-white">
        //     <button
        //       className="absolute top-4 right-4 text-2xl"
        //       onClick={() => setIsSearchActive(false)}
        //     >
        //       xhfhfghfhg
        //     </button>
        //     <input
        //       type="text"
        //       placeholder="Search..."
        //       className="w-full p-4 text-black"
        //     />
        //   </div>
        // </div>
      <SearchModal isOpen={isSearchActive} onClose={()=> setIsSearchActive(false)} />
      )}
    </header>
  );
};


const SearchModal = ({ isOpen, onClose }: any) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed bg-[black] w-full h-full bg-opacity-90 z-[1000] flex items-center justify-around">
      <div className="container w-full h-full mt-48 mx-auto p-4 text-white relative">
       <div className="flex mr-[100%">
        <input
          type="text"
          width={400}
          height={200}
          
          placeholder="جستجو..."
          className="w-full p-4 rounded-md bottom-1 border-base-content-bg text-black bg-base-75 outline-none"
        />
      </div>
       <button
          className="absolute cursor-pointer mr-auto pt-2 w-10 h-10 flex justify-center items-center rounded-[50%] bg-base-70 top-4 right-4 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
       </div>
    </div>,
    document.body
  );
};

export default SearchModal;