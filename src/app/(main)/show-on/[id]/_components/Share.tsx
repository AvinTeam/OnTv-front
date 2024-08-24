"use client";
import React, { useEffect, useState } from "react";
import Modal from "@/app/_components/modal/modal";
import ShareIcon from "@/app/_components/icons/Share";
import Image from "next/image";
import { TelegramIcon, TwitterIcon } from "@/app/_components/icons";
import LinkedinIcon from "@/app/_components/icons/Linkedin";
import WhatsappIcon from "@/app/_components/icons/Whatsapp";
import FacebookIcon from "@/app/_components/icons/Facebook";
import CopyIcon from "@/app/_components/icons/Copy";
import Link from "next/link";

function Share() {
  const [open, setOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };
  return (
    <>
      <div className="flex md:ml-2 lg:ml-4 gap-1 text-[#B3BAC4] text-sm cursor-pointer">
        <ShareIcon />
        <p
          className="text-[10px] font-light lg:text-sm text-nowrap"
          onClick={() => setOpen(true)}
        >
          اشتراک گزاری
        </p>
      </div>
      <Modal
        open={open}
        title="اشتراک در شبکه های اجتماعی"
        onClose={() => setOpen(false)}
      >
        <div className="w-[350px] h-[170px] mt-4">
          <div className="flex justify-around items-center">
            <Link
              href={"https://www.facebook.com"}
              className="cursor-pointer flex flex-col justify-center items-center"
            >
              <div className="w-10 h-10 rounded-full transition-all duration-1000  hover:rotate-[360deg] bg-[#3b5998]  flex justify-center items-center">
                <FacebookIcon width={23} height={23} />
              </div>
              <p className="text-[11px] mt-1 font-lig text-[#94969e]">فیسبوک</p>
            </Link>
            <Link
              href={"https://www.twitter.com"}
              className="cursor-pointer flex flex-col justify-center items-center"
            >
              <div className="w-10 h-10 rounded-full  transition-all duration-1000  hover:rotate-[360deg] bg-[#2daae1] flex justify-center items-center">
                <TwitterIcon fill="#fff" width={25} height={25} />
              </div>
              <p className="text-[11px] mt-1 font-light text-[#94969e]">
                توییتر
              </p>
            </Link>
            <Link
              href={"https://wa.me"}
              className="cursor-pointer flex flex-col justify-center items-center"
            >
              <div className="w-10 h-10 rounded-full  transition-all duration-1000  hover:rotate-[360deg] bg-[#43d854] flex justify-center items-center">
                <WhatsappIcon width={25} height={25} />
              </div>
              <p className="text-[11px] mt-1 font-light text-[#94969e]">
                واتساپ
              </p>
            </Link>
            <Link
              href={"https://t.me"}
              className="cursor-pointer flex flex-col justify-center items-center"
            >
              <div className="w-10 h-10 rounded-full  transition-all duration-1000  hover:rotate-[360deg] bg-[#0088cc] flex justify-center items-center">
                <TelegramIcon fill="#fff" width={23} height={23} />
              </div>
              <p className="text-[11px] mt-1 font-light text-[#94969e]">
                تلگرام
              </p>
            </Link>
            <Link
              href={"https://www.linkedin.com"}
              className="cursor-pointer flex flex-col justify-center items-center"
            >
              <div className="w-10 h-10 rounded-full  transition-all duration-1000  hover:rotate-[360deg] bg-[#0077b5] flex justify-center items-center">
                <LinkedinIcon width={20} height={20} fill="#fff" />
              </div>
              <p className="text-[11px] mt-1 font-light text-[#94969e]">
                لینکدین
              </p>
            </Link>
            <Link
              href={"https://www.eitaa.com"}
              className="cursor-pointer flex flex-col items-center"
            >
              <div className="w-10 h-10  transition-all duration-1000  hover:rotate-[360deg] rounded-full">
                <Image
                  src={"https://www.aparat.com/static/img/eitaa.svg"}
                  width={0}
                  height={0}
                  className="w-full h-full"
                  alt="ایتا"
                />
              </div>
              <p className="text-[11px] mt-1 font-light text-[#94969e]">ایتا</p>
            </Link>
          </div>
          <div className="mt-12">
            <div className="w-full flex">
              <button
                onClick={copyToClipboard}
                className="ml-4  bg-[#3c3a42] text-white font-bold py-2 px-4 rounded flex items-center justify-center"
              >
                {isCopied ? (
                  <p className="text-[10px] text-nowrap text-primary">کپی شد</p>
                ) : (
                  <CopyIcon width={24} height={24} />
                )}
              </button>
              <div className="w-full">
                <div className="border border-base-50 p-2 rounded">
                  <input
                    type="text"
                    className="w-full text-xs text-left text-[#B3BAC4] outline-none bg-[#212226]"
                    value={url}
                    disabled
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Share;
