"use client";
import React, { useEffect, useState } from "react";
import { NewestCardProps } from "./newest-card.types";
import Image from "next/image";
import { truncate } from "@/utils/functions";
import { useUserStore } from "@/stores/user.store";
import { useRouter } from "next/navigation";
import Modal from "../../modal/modal";
import { Button } from "../../button";

export const NewestCard: React.FC<NewestCardProps> = ({ data }) => {
  const user = useUserStore((store) => store.user);
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>("");
  const handleCardClick = () => {
    if(data?.program?.free_episodes >= data?.index){
      router.push(`/show-on/${data?.id}`);
      return
    }
    if (!user?.id && data?.program?.is_paid) {
      setModalMessage("لطفا ابتدا در سایت ثبت نام کنید");
      setOpen(true);
    } else if (data?.program?.is_paid && !user?.subscribe) {
      setModalMessage("برای مشاهده این محتوا باید اشتراک تهیه کنید");
      setOpen(true);
    } else {
      router.push(`/show-on/${data?.id}`);
    }
  };

  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <>
          <div className="mt-2 mb-2 text-center w-[360px] text-[#e6e6e6]">
            {modalMessage}
          </div>
          {!user?.id && (
            <Button
              className="mt-4 bg-primary py-2 text-white"
              onClick={() => router.push("/signin")}
            >
              ثبت نام{" "}
            </Button>
          )}
          {user?.id && !user?.subscribe && data?.program?.is_paid && (
            <Button
              className="mt-4 bg-primary py-2 text-white"
              onClick={() => router.push("/user/packages")}
            >
              تهیه اشتراک{" "}
            </Button>
          )}
        </>
      </Modal>
      <div
        onClick={handleCardClick}
        key={data?.alt}
        className="w-screen relative md:w-auto cursor-pointer md:col-span-6 lg:col-span-3 overflow-auto mb-5 px-9 md:px-0"
      >
        <div className="rounded-md overflow-auto">
          <Image
            src={data?.poster?.[0]?.url}
            width={0}
            height={0}
            alt={data?.alt}
            className="w-full max-h-[160px] object-cover"
          />
        </div>
        <div className="pb-[3px] h-[40%] flex justify-center items-center flex-col w-full">
          <div className="mt-3 flex justify-between items-center gap-1 w-full">
            <div className="mb-1 bg-box-slider-bg-text text-nowrap text-base-content-slider py-1 px-2 flex justify-center text-[10px] rounded-[20px]">
              {truncate(data?.title, 30)}
            </div>
            <div className="col-span-9 bg-box-slider-bg-text text-nowrap text-box-slider-text-l py-1 px-2 text-[9px] mr-auto rounded-[20px]">
              <span className="text-white"> 32:65 </span>
              <span>
                <div className="inline">&nbsp;</div> |
              </span>
              <span>{` ${data?.seen} نمایش`}</span>
            </div>
          </div>
          <div className="break-words w-full mt-1 mb-auto md:mt-0 text-justify text-[12px] md:text-[14px] max-w-[100%] md:min-w-[100%]">
            <h3 className="mb-1 text-right text-ellipsis dark:text-description-text md:text-clip overflow-hidden whitespace-nowrap md:text-wrap md:ml-auto ">
              {data?.description}
            </h3>
          </div>
        </div>
        {data?.program?.free_episodes >= data?.index ? (
          <div
            className="absolute top-0 overflow-hidden right-0 bg-primary px-3 py-1 z-50 text-white text-xs"
            style={{
              borderBottomLeftRadius: "10px",
              borderTopRightRadius: "6px",
              borderTopLeftRadius: "3px",
              borderBottomRightRadius: "3px",
            }}
          >
            رایگان
          </div>
        ) : !data?.program?.is_paid ? (
          <div
            className="absolute top-0 overflow-hidden right-0 bg-primary px-3 py-1 z-50 text-white text-xs"
            style={{
              borderBottomLeftRadius: "10px",
              borderTopRightRadius: "6px",
              borderTopLeftRadius: "3px",
              borderBottomRightRadius: "3px",
            }}
          >
            رایگان
          </div>
        ) : null}
      </div>
    </>
  );
};
