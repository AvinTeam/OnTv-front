"use client";
import { useState, useEffect, useLayoutEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchModal from "./components/searchModal";
import { useRouter } from "next/navigation";
import UserProfile from "./components/user-profile/user-profile";
import {
  ArrowTopIcon,
  CloseIcon,
  HamburgerIcon,
  HomeIcon,
  SearchIcon,
} from "../icons";
import axios from "../../../core/axios";

const bg_color_first: string =
  "linear-gradient(180deg,hsla(0,0%,5%,.4),hsla(0,0%,5%,.4) .41%,hsla(0,0%,5%,.399) .9%,hsla(0,0%,5%,.396) 1.64%,hsla(0,0%,5%,.391) 2.84%,hsla(0,0%,5%,.383) 4.68%,hsla(0,0%,5%,.372) 7.35%,hsla(0,0%,5%,.356) 11.04%,hsla(0,0%,5%,.336) 15.94%,hsla(0,0%,5%,.31) 22.23%,hsla(0,0%,5%,.278) 30.12%,hsla(0,0%,5%,.238) 39.78%,hsla(0,0%,5%,.192) 51.41%,hsla(0,0%,5%,.137) 65.2%,hsla(0,0%,5%,.073) 81.33%,hsla(0,0%,5%,0))";
const bg_color_second: string = "hsla(0,0%,5%,.75)";
export const Header = ({ headerMenueItems }: { headerMenueItems: any[] }) => {
  const router = useRouter();
  const [bgColor, setBgColor] = useState(bg_color_first);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState<string>("");

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
      setAvatar(
        parsedData?.avatar?.[0]?.thumbnail?.url
          ? parsedData.avatar[0].thumbnail.url
          : parsedData.avatar
          ? parsedData.avatar
          : "/images/avatar/avatar.jpg"
      );
      setIsLoggedIn(true);
      setUsername(parsedData.mobile);
      getUserInfo();
    } else {
      if (window.location.pathname.startsWith("/user")) {
        router.push("/");
      }
    }
  }, [router]);

  const getUserInfo = () => {
    const userData = localStorage.getItem("user_name");
    const parsedData = userData ? JSON.parse(userData) : null;
    axios
      .get(`profile/${parsedData?.id}`)
      .then(({ data }) => {
        localStorage.setItem("user_name", JSON.stringify(data.user));
        setAvatar(
          parsedData?.avatar[0]?.thumbnail?.url
            ? parsedData?.avatar[0]?.thumbnail?.url
            : parsedData?.avatar
            ? parsedData?.avatar
            : "/images/avatar/avatar.jpg"
        );
      })
      .catch(() => {});
  };

  return (
    <header
      className="mx-auto w-full select-none sticky top-0 z-[1000] overflow-visible transition-all"
      style={{
        background: bgColor,
        backdropFilter: bgColor === bg_color_first ? "none" : "blur(40px)",
      }}
    >
      <div className="container mx-auto block lg:grid h-full overflow-visible lg:grid-cols-[auto_1fr] justify-between items-center gap-1">
        {/* ================= mobole menue =============== */}
        <div className="flex ml-0 mr-0 lg:mr-4 h-full gap-4 lg:gap-0 justify-between w-full lg:w-20 py-2.5 lg:justify-center items-center">
          <div className="flex justify-start items-center gap-3">
            <div
              className="lg:hidden mr-4"
              onClick={() => setShowMobileMenu(true)}
            >
              <HamburgerIcon />
            </div>
            <Link href={"/"} className="w-full h-full">
              <Image
                alt="OnTVLogo"
                width={0}
                style={{ objectFit: "contain" }}
                className="w-[45px] lg:w-12 h-[45px] lg:h-12"
                height={0}
                src={"/images/android-chrome-192x192.png"}
              />
            </Link>
            <div
              className="w-full h-full lg:hidden"
              onClick={() => setIsSearchActive(true)}
            >
              <SearchIcon width={"24px"} height={"24px"} />
            </div>
          </div>
          <div className="group block lg:hidden ml-4">
            {isLoggedIn ? (
              <>
                <UserProfile mobile={username} avatar={avatar} setIsLoggedIn={setIsLoggedIn} />
              </>
            ) : (
              <Link
                href={"/signin"}
                className="mr-auto text-white text-sm md:text-md rounded-md flex justify-center items-center bg-base-50 hover:bg-base-25 py-2 px-4"
              >
                ورود / ثبت نام
              </Link>
            )}
          </div>
        </div>
        {showMobileMenu && (
          <div className="z-[12000] bg-base-75 fixed top-0 left-0 right-0 w-[100%] h-auto flex justify-center items-star">
            <div className="w-[90%] h-auto">
              <div className="flex flex-col justify-start items-start gap-3">
                <div className="flex justify-start gap-6 items-center">
                  <div
                    className="lg:hidden mr-4 bg-base-70 flex rounded-md justify-center items-center  p-1 mt-3"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    <CloseIcon />
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
                    className="w-full h-full mt-3 lg:hidden"
                    onClick={() => setIsSearchActive(true)}
                  >
                    <SearchIcon width={"24px"} height={"24px"} />
                  </div>
                </div>
                <div className="max-h-72 w-full flex justify-start overflow-scroll">
                  <ul className="mr-4 [&>*]:mt-2 [&>*]:font-light flex flex-col gap-2 pb-4 [&>*]:text-white">
                    <Link
                      href={"/"}
                      onClick={() => setShowMobileMenu(false)}
                      className="flex gap-1 justify-center items-center"
                    >
                      <HomeIcon />
                      صفحه نخست
                    </Link>
                    {headerMenueItems?.map((item) => (
                      <Link
                        key={item?.id}
                        href={`${
                          item?.url
                            ? item?.url
                            : `/all-program/${item?.service?.slug}/tag/all`
                        }`}
                        onClick={() => setShowMobileMenu(false)}
                      >
                        {item?.name}
                      </Link>
                    ))}
                    <Link
                      href={"/about"}
                      onClick={() => setShowMobileMenu(false)}
                    >
                      درباره ما
                    </Link>
                    <Link
                      href={"/privacy"}
                      onClick={() => setShowMobileMenu(false)}
                    >
                      ارتباط با ما
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        <nav className="hidden lg:flex justify-between items-center ml-auto w-full">
          <ul className="flex justify-between gap-1 md:gap-4 text-primary-content">
            <li className="mr-0 md:mr-4 flex justify-center items-center">
              <Link
                href="/"
                className="hover:bg-[#242424] flex gap-1 justify-center items-center text-center rounded-md px-1 py-[6px] text-[10px] text-nowrap md:text-[12px] "
              >
                <HomeIcon />
                <p>صفحه نخست</p>
              </Link>
            </li>
            {headerMenueItems?.map((item) => (
              <li key={item?.id} className="group relative">
                <Link
                  href={`${
                    item?.url
                      ? item?.url
                      : `/all-program/${item?.service?.slug}/tag/all`
                  }`}
                  className="flex group justify-center items-center"
                >
                  <div className="hover:bg-[#242424] flex gap-1 text-nowrap justify-center items-center text-center rounded-md px-1 py-[6px] text-[10px] md:text-[12px] ">
                    <p>{item?.name}</p>
                    {item.children && item.children.length ? (
                      <ArrowTopIcon className="rotate-180" />
                    ) : null}
                  </div>
                </Link>
                {item.children && item.children.length > 0 && (
                  <>
                    <div className="w-[170px] max-h-0 overflow-hidden opacity-0 invisible group-hover:max-h-[500px] group-hover:opacity-100 group-hover:visible transition-[opacity,max-height] duration-300 ease-in-out absolute top-7 right-0 p-2 rounded-md bg-[#242424] border border-[#282828]">
                      <ul>
                        {item.children?.map((item: any) => (
                          <li key={item?.id} className="mb-2 cursor-pointer hover:bg-[#101010] pr-2 py-[8px] text-[10px] text-nowrap md:text-[12px] flex justify-start transition-all rounded-md">
                            <Link
                              href={`${
                                item?.url
                                  ? item?.url
                                  : `/all-program/${item?.service?.slug}/tag/all`
                              }`}
                              className="flex justify-center items-center gap-1"
                            >
                              <p>{item?.name}</p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </li>
            ))}

            <li className="flex justify-center items-center">
              <Link
                href="/about"
                className="hover:bg-[#242424] text-center rounded-md px-1 py-[6px] text-[10px] text-nowrap md:text-[12px] "
              >
                درباره ما
              </Link>
            </li>
            <li className="flex justify-center items-center">
              <Link
                href="/privacy"
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
                <SearchIcon fill="gray" />
                <p className="hidden md:block">جستجو</p>
              </div>
            </li>
          </ul>
          <div className="group">
            {isLoggedIn ? (
              <>
                <UserProfile mobile={username} avatar={avatar} setIsLoggedIn={setIsLoggedIn}/>
              </>
            ) : (
              <Link
                href={"/signin"}
                className="mr-auto text-white text-sm md:text-md rounded-md flex justify-center items-center bg-base-50 hover:bg-base-25 py-2 px-4"
              >
                ورود / ثبت نام
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
