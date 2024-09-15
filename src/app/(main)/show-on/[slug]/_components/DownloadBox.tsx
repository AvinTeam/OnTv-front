"use client";

import DownloadIcon from "@/app/_components/icons/Download";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

function DownloadBox({ videoLinks }: { videoLinks: string[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  const extractQuality = (url: string) => {
    const match = url.match(/h_(\d+)_(\d+k).mp4/);
    if (match) {
      return `${match[1]}p`;
    }
    return "Unknown Quality";
  };

  const toggleBox = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <div
        className="hidden md:flex gap-1 text-[#B3BAC4] text-sm cursor-pointer"
        onClick={toggleBox}
      >
        <span>
          <DownloadIcon width={20} height={20}  fill="#B3BAC4" />
        </span>
        <p className="text-[10px] font-light lg:text-sm text-nowrap">دانلود</p>
      </div>
      <DownloadIcon
        className="md:hidden cursor-pointer"
        onClick={toggleBox}
        width={22}
        height={22}
        fill="#fff"
      />

      {isOpen && videoLinks?.length ? (
        <div
          ref={boxRef}
          className="absolute top-4 w-48 mt-4 -left-10 z-10 p-2 bg-[#0f0f0f] border border-[#282828] rounded-lg shadow-md"
        >
          {videoLinks.map((url, index) => (
            <Link
              key={index}
              target="_blank"
              href={url}
              className="block p-2 text-center text-xs transition-all font-light hover:bg-[#242424] mt-2 rounded-md"
            >
              دانلود با کیفیت {extractQuality(url)}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default DownloadBox;
