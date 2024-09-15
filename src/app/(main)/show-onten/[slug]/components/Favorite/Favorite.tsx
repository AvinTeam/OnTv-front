"use client";
import { Button } from "@/app/_components/button";
import { BadgeFillIcon } from "@/app/_components/icons";
import BadgeIcon from "@/app/_components/icons/Badge";
import Modal from "@/app/_components/modal/modal";
import { API_URL } from "@/configs/global";
import axios from "@/core/axios";
import { useUserStore } from "@/stores/user.store";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Favorite({ programId }: { programId: string }) {
  const user = useUserStore((store) => store?.user);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const handelAddFavorite = () => {
    if (!user) {
      setOpen(true);
      return;
    }
    setIsLoading(true);
    axios
      .post(`user/favorite/${programId}`, { status: isAdded ? 0 : 1 })
      .then(() => {
        setIsLoading(false);
        setIsAdded(prev=> !prev);
      });
  };

  async function gatAllProgram(id: string) {
    axios.get(`${API_URL}program/publicShow/${id}`).then(({ data }) => {
      setIsAdded(data.Program.isFavorite);
    });
  }

  useEffect(() => {
    gatAllProgram(programId);
  }, [programId]);

  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <>
          <div className="mt-2 w-[300px] text-center  text-[#e6e6e6]">
            لطفا ابتدا در سایت ثبت نام کنید
          </div>
          <Button
            className=" mt-4 bg-primary py-2 text-white"
            onClick={() => router.push("/signin")}
          >
            ثبت نام{" "}
          </Button>
        </>
      </Modal>
      <div className="flex gap-1">
        <div
          className="relative cursor-pointer group"
          onClick={handelAddFavorite}
        >
          {isAdded ? (
            <BadgeFillIcon width={29} height={29} fill="#3899a0" />
          ) : (
            <BadgeIcon width={29} height={29} fill="#fff" />
          )}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2">
            <div className="px-2 py-1 text-center flex justify-center items-center bg-gray-800 w-52 h-8 bg-primary text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {isLoading ? (
                <div className="loader border-t-transparent border-solid border-white border-4 rounded-full w-4 h-4 animate-spin"></div>
              ) : isAdded ? (
                <p>{"حذف از نشان شده ها"}</p>
              ) : (
                <p>{"افزودن به لیست  نشان شده ها"}</p>
              )}
              <div className="w-0 absolute top-8 h-0 border-l-4 border-l-transparent border-primary border-r-4 border-r-transparent border-t-4 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Favorite;
