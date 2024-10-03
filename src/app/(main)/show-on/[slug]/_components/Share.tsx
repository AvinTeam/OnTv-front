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
        <ShareIcon fill="#B3BAC4" className="hidden md:block" />
        <p
          className="hidden md:block text-[10px] font-light lg:text-sm text-nowrap"
          onClick={() => setOpen(true)}
        >
          اشتراک گزاری
        </p>
        <ShareIcon width={22} className="md:hidden" onClick={() => setOpen(true)} />
      </div>
      <Modal
        open={open}
        title="اشتراک در شبکه های اجتماعی"
        onClose={() => setOpen(false)}
      >
        <div className="w-[350px] h-[170px] mt-4">
          <div className="flex justify-around items-center">
            <Link
              href={"https://rubika.ir/onnewsmedia"}
              className="cursor-pointer flex flex-col items-center"
            >
              <div className="w-10 h-10  transition-all duration-1000  hover:rotate-[360deg] rounded-full">
                <Image
                  src={"https://web.rubika.ir/assets/icons/icon-192x192.png"}
                  width={0}
                  height={0}
                  className="w-full h-full"
                  alt="روبیکا"
                />
              </div>
              <p className="text-[11px] mt-1 font-light text-[#94969e]">روبیکا</p>
            </Link>
            <Link
              href="https://t.me/onnewsmedia"
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
              href={"https://web.bale.ai/onnewsmedia1"}
              className="cursor-pointer flex flex-col items-center"
            >
              <div className="w-10 h-10  transition-all duration-1000  hover:rotate-[360deg] rounded-full">
                <Image
                  src={"https://web.bale.ai/logo82.png"}
                  width={0}
                  height={0}
                  className="w-full h-full"
                  alt="بله"
                />
              </div>
              <p className="text-[11px] mt-1 font-light text-[#94969e]">بله</p>
            </Link>
            <Link
              href={"https://www.instagram.com/onnewsmedia"}
              className="cursor-pointer flex flex-col items-center"
            >
              <div className="w-10 h-10  transition-all duration-1000  hover:rotate-[360deg] rounded-full">
                <Image
                  src={"https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"}
                  width={0}
                  height={0}
                  className="w-full h-full"
                  alt="اینستاگرام"
                />
              </div>
              <p className="text-[11px] mt-1 font-light text-[#94969e]">اینستاگرام</p>
            </Link>
            <Link
              href={"https://eitaa.com/onnewsmedia"}
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
