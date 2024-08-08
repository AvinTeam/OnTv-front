// components/Sidebar.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useLayoutEffect, useState } from "react";
import { menuItems } from "./constants/menuItems";

const Sidebar: React.FC = () => {
  const [url, setUrl] = useState<string>();
  const [mobile, setMobile] = useState<string>();
  useLayoutEffect(() => {
    const userData = localStorage.getItem("user_name");
    const parsedData = userData ? JSON.parse(userData) : null;
    if (parsedData) {
      setUrl(parsedData.avatar);
      setMobile(parsedData.mobile);
    }
  }, []);

  return (
    <aside className="bg-base-70 w-72 mt-4 rounded-lg mr-7 h-[605px] p-4 self-stretch">
      <div className="flex flex-col gap-4 h-[80%] select-none">
        <ul className="flex flex-col gap-4 text-sm justify-center items-center">
          <div className="w-14 overflow-hidden h-14 bg-[gray] flex justify-center items-center rounded-full">
            {url ? (
              <Image
                src={url}
                className="object-cover w-full h-full"
                width={0}
                height={0}
                alt="avatar"
              />
            ) : (
              <svg
                width={60}
                height={60}
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="32" cy="32" r="32" fill="#5C5C5C"></circle>
                <path
                  d="M32.0002 35.3346C37.8912 35.3346 42.6668 30.2605 42.6668 24.0013C42.6668 17.7421 37.8912 12.668 32.0002 12.668C26.1091 12.668 21.3335 17.7421 21.3335 24.0013C21.3335 30.2605 26.1091 35.3346 32.0002 35.3346Z"
                  fill="white"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.2725 55.4949C11.4345 52.5268 13.2034 49.7996 15.5008 47.5021C19.8767 43.1263 25.8116 40.668 32 40.668C38.1884 40.668 44.1233 43.1263 48.4991 47.5021C50.7963 49.7993 52.5651 52.5262 53.7272 55.4947C53.8624 55.844 53.7968 56.2316 53.5538 56.5285C53.3107 56.8254 52.9232 57 52.5 57H11.5C11.0768 57 10.6894 56.8254 10.4463 56.5285C10.2033 56.2316 10.1377 55.844 10.2729 55.4947L10.2725 55.4949Z"
                  fill="white"
                ></path>
              </svg>
            )}
          </div>
          <p className="text-sm text-[#6d6d6d]">{mobile}</p>
          <hr className="w-full border-[#4b4a4a]" />
          {menuItems.map((item: any) => (
            <li
              key={item.href}
              className="cursor-pointer h-10 flex items-center w-full  [&>*]:transition-all"
            >
              <Link
                href={item.href}
                className="h-full flex w-full items-center p-3 hover:bg-[#434444] rounded-md gap-2"
              >
                <item.icon width={16} height={16} />
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
        <hr className="w-full border-[#4b4a4a]" />
        <li className="cursor-pointer h-10 flex items-center w-full  [&>*]:transition-all">
          <button className="h-full flex w-full text-xs items-center p-3 hover:bg-[#434444] rounded-md gap-2">
            <span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.1168 6V3C12.1168 1.89543 11.2214 1 10.1168 1H3C1.89543 1 1 1.89543 1 3V15C1 16.1046 1.89543 17 3 17H10.1168C11.2214 17 12.1168 16.1046 12.1168 15V12"
                  stroke="currentColor"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M16.9989 8.88477L15.5908 10.2358"
                  stroke="currentColor"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M16.9992 8.8853L15.6104 7.55273"
                  stroke="currentColor"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M16.2884 9H6.56116"
                  stroke="currentColor"
                  stroke-linecap="round"
                ></path>
              </svg>
            </span>
            <p> خروج از حساب کاربری</p>{" "}
          </button>
        </li>
      </div>
    </aside>
  );
};

export default Sidebar;
