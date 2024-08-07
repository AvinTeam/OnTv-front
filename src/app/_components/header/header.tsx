"use client";
import { useState, useEffect, useLayoutEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchModal from "./components/searchModal";
import { useRouter } from "next/navigation";
import UserProfile from "./components/user-profile/user-profile";
const bg_color_first: string =
  "linear-gradient(180deg,hsla(0,0%,5%,.4),hsla(0,0%,5%,.4) .41%,hsla(0,0%,5%,.399) .9%,hsla(0,0%,5%,.396) 1.64%,hsla(0,0%,5%,.391) 2.84%,hsla(0,0%,5%,.383) 4.68%,hsla(0,0%,5%,.372) 7.35%,hsla(0,0%,5%,.356) 11.04%,hsla(0,0%,5%,.336) 15.94%,hsla(0,0%,5%,.31) 22.23%,hsla(0,0%,5%,.278) 30.12%,hsla(0,0%,5%,.238) 39.78%,hsla(0,0%,5%,.192) 51.41%,hsla(0,0%,5%,.137) 65.2%,hsla(0,0%,5%,.073) 81.33%,hsla(0,0%,5%,0))";
const bg_color_second: string = "hsla(0,0%,5%,.75)";
export const Header: React.FC = () => {
  const router = useRouter()
  const [bgColor, setBgColor] = useState(bg_color_first);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
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

  useLayoutEffect(() => {
    const token = localStorage.getItem("user_token");
    const userData = localStorage.getItem("user_name");
    const parsedData = userData ? JSON.parse(userData) : null;

    if (token && parsedData) {
      setIsLoggedIn(true);
      setUsername(parsedData.mobile);
    } else{
      router.push("/")
    }
  }, []);

  return (
    <header
      className="mx-auto w-full select-none sticky top-0 z-[1000] overflow-visible transition-all"
      style={{
        background: bgColor,
        backdropFilter: bgColor === bg_color_first ? "none" : "blur(40px)",
      }}
    >
      <div className="container mx-auto block md:grid h-full overflow-visible md:grid-cols-[auto_1fr] justify-between items-center gap-1">
        {/* ================= mobole menue =============== */}
        <div className="flex ml-0 mr-0 md:mr-4 h-full gap-4 md:gap-0 justify-between overflow-hidden w-full md:md:w-20 py-2.5 md:justify-center items-center">
          <div className="flex justify-start items-center gap-3">
            <div
              className="md:hidden mr-4"
              onClick={() => setShowMobileMenu(true)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="white"
                width={35}
                height={35}
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M4 17H20M4 12H20M4 7H20"
                    stroke="#fff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
            </div>
            <Link href={"/"} className="w-full h-full">
              <Image
                alt="OnTVLogo"
                width={0}
                style={{ objectFit: "contain" }}
                className="w-[45px] md:w-12 h-[45px] md:h-12"
                height={0}
                src={"/images/android-chrome-192x192.png"}
              />
            </Link>
            <div
              className="w-full h-full md:hidden"
              onClick={() => setIsSearchActive(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                width={"24px"}
                height={"24px"}
                viewBox="0 0 24 24"
              >
                <path d="M19.16 4.84a8 8 0 0 0-12 10.56l-4.4 4.39a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.42-4.39a8 8 0 0 0 10.56-12Zm-1.42 9.9a6 6 0 1 1 0-8.48 6 6 0 0 1 0 8.48Z"></path>
              </svg>
            </div>
          </div>
          {isLoggedIn ? (
            <div className="w-8 h-8 rounded-full"></div>
          ) : (
            <Link
              href={"/signin"}
              className="md:hidden ml-2 text-white text-xs md:text-md rounded-md flex justify-center items-center bg-base-50 hover:bg-base-25 py-2 px-4"
            >
              ورود
            </Link>
          )}
        </div>
        {showMobileMenu && (
          <div className="z-[12000] bg-base-75 fixed top-0 left-0 right-0 w-[100%] h-[300px] flex justify-center items-star ">
            <div className="w-[90%] h-[300px]">
              <div className="flex flex-col justify-start items-start gap-3">
                <div className="flex justify-start gap-6 items-center">
                  <div
                    className="md:hidden mr-4 bg-base-70 flex rounded-md justify-center items-center  p-1 mt-3"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                    >
                      <path d="m13.41 12 6.3-6.29a1 1 0 1 0-1.42-1.42L12 10.59l-6.29-6.3a1 1 0 0 0-1.42 1.42l6.3 6.29-6.3 6.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l6.29-6.3 6.29 6.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Z"></path>
                    </svg>
                  </div>
                  <div className="w-full h-full">
                    <Image
                      alt="OnTVLogo"
                      width={0}
                      style={{ objectFit: "contain" }}
                      className="w-[60px] md:w-12 h-[60px] md:h-12 mt-2"
                      height={0}
                      src={"/images/android-chrome-192x192.png"}
                    />
                  </div>
                  <div
                    className="w-full h-full mt-4 md:hidden"
                    onClick={() => setIsSearchActive(true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#fff"
                      width={"24px"}
                      height={"24px"}
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.16 4.84a8 8 0 0 0-12 10.56l-4.4 4.39a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.42-4.39a8 8 0 0 0 10.56-12Zm-1.42 9.9a6 6 0 1 1 0-8.48 6 6 0 0 1 0 8.48Z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <ul className="mr-4 [&>*]:mt-2 [&>*]:text-white">
                    <li>فیلم</li>
                    <li>سریال</li>
                    <li>دسته بندی</li>
                    <li>کودک و نوجوان</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        <nav className="hidden md:flex justify-between items-center ml-auto w-full">
          <ul className="flex justify-between gap-1 md:gap-4 text-primary-content">
            <li className="mr-0 md:mr-4 flex justify-center items-center">
              <Link
                href="#"
                className="hover:bg-[#242424] flex gap-1 justify-center items-center text-center rounded-md px-1 py-[6px] text-[10px] text-nowrap md:text-[12px] "
              >
                <svg viewBox="0 0 20 20" fill="orange" width={18} height={18}>
                  <path
                    fill="url(#fire-on_svg__a)"
                    d="M14.982 9.296c-.203-.264-.45-.493-.678-.722-.59-.528-1.258-.906-1.822-1.46-.996-.977-1.403-2.436-1.174-3.795.085-.507-.355-1.003-.802-.75-.352.197-.678.43-.98.672-2.28 1.83-3.178 5.06-2.104 7.832.035.088.07.176.07.29 0 .194-.131.37-.307.44-.203.089-.414.036-.581-.105a.51.51 0 0 1-.123-.15 4.173 4.173 0 0 1-.839-1.965c-.095-.63-.942-1.067-1.21-.49a6.481 6.481 0 0 0-.592 3.08c.053.44.106.88.256 1.32.123.529.36 1.057.624 1.523.95 1.522 2.597 2.614 4.365 2.834 1.884.237 3.899-.106 5.342-1.408 1.61-1.461 2.174-3.802 1.347-5.809l-.115-.228c-.184-.405-.677-1.11-.677-1.11ZM12.2 14.84c-.247.211-.651.44-.968.528-.715.255-1.43.066-1.99-.278-.267-.164-.168-.547.107-.699a2.41 2.41 0 0 0 1.188-1.549c.15-.704-.133-1.285-.247-1.962a3.954 3.954 0 0 1-.053-.94c.027-.345.448-.375.645-.09.037.052.074.102.112.15.678.88 1.743 1.267 1.971 2.464.036.123.053.246.053.378.027.722-.29 1.514-.818 1.998Z"
                  ></path>
                  <defs>
                    <radialGradient
                      id="fire-on_svg__a"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientTransform="rotate(-115.942 13.225 6.684) scale(20.573 28.2969)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F58540"></stop>
                      <stop offset="0.542" stop-color="#F99F3E"></stop>
                      <stop offset="1" stop-color="#FEC23B"></stop>
                    </radialGradient>
                  </defs>
                </svg>
                <p>صفحه نخست</p>
              </Link>
            </li>
            <li className="flex justify-center items-center gap-1">
              <Link
                href="#"
                className="hover:bg-[#242424] text-nowrap text-center rounded-md px-1 py-[6px] text-[10px] md:text-[12px] "
              >
                تولیدات
              </Link>
            </li>
            <ul className="group">
              <li className="flex group justify-center items-center">
                <div className="hover:bg-[#242424] flex gap-1 text-nowrap justify-center items-center text-center rounded-md px-1 py-[6px] text-[10px] md:text-[12px] ">
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
                </div>
              </li>
              <div className="w-[170px] translate-y-[-300px] group-hover:translate-y-[0px] group-hover:opacity-100 group-hover:right-40 md:group-hover:right-80 p-2 z-[1000] rounded-md absolute bg-[#0f0f0f] border border-[#282828]  ">
                <ul>
                  <li className="mb-2 cursor-pointer hover:bg-[#242424] pr-2 py-[8px] text-[10px] text-nowrap md:text-[12px] flex justify-start transition-all rounded-md">
                    <Link
                      href={"#"}
                      className="flex justify-center items-center gap-1"
                    >
                      <div className="w-3 h-3 ml-1 border-base-75 bg-[#0f0f0f] border rounded-[50%]"></div>
                      <p>اجتماعی</p>
                    </Link>
                  </li>
                  <li className="mb-2 cursor-pointer hover:bg-[#242424] pr-2 py-[8px] text-[10px] text-nowrap md:text-[12px]  flex justify-starttransition-all rounded-md">
                    <Link
                      href={"#"}
                      className="flex justify-center items-center gap-1"
                    >
                      <div className="w-3 h-3 ml-1 border-base-75 bg-[#0f0f0f] border rounded-[50%]"></div>

                      <p>سیاسی</p>
                    </Link>
                  </li>
                  <li className="mb-2 cursor-pointer hover:bg-[#242424] pr-2 py-[8px] text-[10px] text-nowrap md:text-[12px]  flex justify-starttransition-all rounded-md">
                    <Link
                      href={"#"}
                      className="flex justify-center items-center gap-1"
                    >
                      <div className="w-3 h-3 ml-1 border-base-75 bg-[#0f0f0f] border rounded-[50%]"></div>

                      <p>فرهنگی</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </ul>

            <li className="flex justify-center items-center">
              <Link
                href="#"
                className="hover:bg-[#242424] text-center rounded-md px-1 py-[6px] text-[10px] text-nowrap md:text-[12px] "
              >
                درباره ما
              </Link>
            </li>
            <li className="flex justify-center items-center">
              <Link
                href="#"
                className="hover:bg-[#242424] text-center rounded-md px-1 py-[6px] text-[10px] text-nowrap md:text-[12px] "
              >
                ارتباط با ما
              </Link>
            </li>
            <li className="flex justify-center items-center">
              <div
                onClick={() => setIsSearchActive(true)}
                className="cursor-pointer hover:bg-[#242424] flex gap-1 justify-center items-center text-center rounded-md pl-3 pr-1 py-[6px] text-[10px] text-nowrap md:text-[12px] "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="gray"
                  width={"18px"}
                  height={"18px"}
                  viewBox="0 0 24 24"
                >
                  <path d="M19.16 4.84a8 8 0 0 0-12 10.56l-4.4 4.39a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.42-4.39a8 8 0 0 0 10.56-12Zm-1.42 9.9a6 6 0 1 1 0-8.48 6 6 0 0 1 0 8.48Z"></path>
                </svg>
                <p className="hidden md:block">جستجو</p>
              </div>
            </li>
          </ul>
          <div className="group">
            {isLoggedIn ? (
              <>
               <UserProfile mobile={username} />
              </>
            ) : (
              <Link
                href={"/signin"}
                className="mr-auto text-white text-sm md:text-md rounded-md flex justify-center items-center bg-base-50 hover:bg-base-25 py-2 px-4"
              >
                ورود
              </Link>
            )}
          </div>
        </nav>
      </div>
      {isSearchActive && (
        <SearchModal
          isOpen={isSearchActive}
          onClose={() => setIsSearchActive(false)}
        />
      )}
    </header>
  );
};

export default SearchModal;
