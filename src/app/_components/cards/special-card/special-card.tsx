"use client";
import React, { useState } from "react";
import { SpecialCardProps } from "./special-card.types";
import Image from "next/image";
import Link from "next/link";
import { FreeIcon, LockIcon, ViewIcon } from "../../icons";
import { useUserStore } from "@/stores/user.store";
import Modal from "../../modal/modal";
import { Button } from "../../button";
import { useRouter } from "next/navigation";

export const SpecialCard: React.FC<SpecialCardProps> = ({ data }) => {
  const router = useRouter();
  const user = useUserStore((store) => store.user);
  const [open, setOpen] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>("");
  const { seen, description, program, poster, title } = data;

  function truncate(text: string) {
    const maxLength = 25;
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  }
  const handleCardClick = () => {
    if (!user?.id && program?.is_paid) {
      setModalMessage("لطفا ابتدا در سایت ثبت نام کنید");
      setOpen(true);
    } else if (program?.is_paid && !user?.subscribe) {
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
          <div
            className="mt-2 mb-2 text-center w-[360px] text-[#e6e6e6]"
          >
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
          {user?.id && !user?.subscribe && program?.is_paid && (
            <Button
              className="mt-4 bg-primary py-2 text-white"
              onClick={() => router.push("/user/packages")}
            >
              تهیه اشتراک{" "}
            </Button>
          )}
        </>
      </Modal>
      <div onClick={handleCardClick} className="w-full cursor-pointer h-full flex flex-col gap-2">
        <div className="group w-full h-[85%]  relative">
          <div className="relative w-full h-full group">
            <Image
              src={poster?.[0]?.url}
              alt={title || "image"}
              width={0}
              style={{ objectFit: "cover" }}
              height={0}
              className="w-full h-full rounded-md overflow-auto"
            />
            {program?.is_paid && !user?.subscribe && (
              <div
                className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
                style={{
                  background: "rgba(0, 0, 0, 0.4)",
                  backdropFilter: "blur(5px)",
                }}
              >
                <span
                  className="w-12 h-12 rounded-full flex justify-center items-center bg-base-50"
                  style={{
                    background: "rgba(0, 0, 0, 0.4)",
                    backdropFilter: "blur(14px)",
                  }}
                >
                  <LockIcon width={20} height={20} />
                </span>
              </div>
            )}
          </div>
          <div className=" text-[11px] p-1 opacity-0 group-hover:opacity-[1] flex absolute top-0 right-0 font-light z-30 bottom-1 left-0 hover:transition hover:duration-[0.3s] ease-in-out  items-end text-white">
            <div className="flex flex-col gap-1">
              <div
                className="h-[20px] w-[70px] rounded-[500px] flex justify-around items-center font-bold"
                style={{
                  backdropFilter: "blur(20px)",
                  backgroundColor: "hsla(0, 0%, 5%, .25)",
                  boxShadow: "inset 0 0 0 1px transparent",
                }}
              >
                <ViewIcon />
                {seen}
              </div>
              <div>{program?.tags.map((tag: any) => tag.name).join(" - ")}</div>
              <p>{truncate(description ?? "")}</p>
            </div>
          </div>
          <div
            className="opacity-0 group-hover:opacity-[1] rounded-md overflow-auto absolute top-0  transition duration-[0.3s] ease-in-out right-0 bottom-0 left-0 z-10 "
            style={{
              background: "linear-gradient(180deg,transparent,rgba(0,0,0,.8))",
            }}
          ></div>
        </div>
        <div className="w-full h-[15%] text-white text-[10px] font-light md:text-[11px] xl:text-[13px]">
          <p>{title}</p>
        </div>
      </div>
    </>
  );
};
