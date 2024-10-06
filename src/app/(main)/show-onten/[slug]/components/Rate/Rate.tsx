"use client";
import { Button } from "@/app/_components/button";
import LikeIcon from "@/app/_components/icons/Like";
import Modal from "@/app/_components/modal/modal";
import { API_URL } from "@/configs/global";
import axios from "@/core/axios";
import { useUserStore } from "@/stores/user.store";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Rate({ programId }: { programId: string }) {
  const user = useUserStore((store) => store?.user);
  const router = useRouter();
  const [refreshData, setRefreshData] = useState<boolean>(false);
  const [allData, setAllData] = useState<any>();
  const [userRating, setUserRating] = useState<number | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const handleStarClick = (rating: number) => {
    if (!user) {
      setOpen(true);
      return;
    }
    axios
      .post(`program/storeScore/${programId}`, { score: rating })
      .then(() => {
        setRefreshData((prev) => !prev);
      });
  };

  async function gatAllProgram(id: string) {
    axios.get(`${API_URL}program/publicShow/${id}`).then(({ data }) => {
      setAllData(data);
      console.log(data);
      setUserRating(parseFloat(data.Program.averageOfScore));
    });
  }

  useEffect(() => {
    gatAllProgram(programId);
  }, [refreshData, programId]);

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
      <div className="flex mt-2 gap-2 justify-center items-center">
        <LikeIcon width={20} height={20} fill="#B088FF" />
        <div className="text-[#B088FF] text-sm mt-1">
          {allData?.Program?.averageOfScore
            ? `${allData.Program.averageOfScore} %`
            : "0"}
        </div>
      </div>
      <div className="flex mt-4  gap-5 justify-center items-center ">
        <div className="group">
          <span
            className={`flex relative text-[#8b8a8a] gap-2  scale-x-[1]`}
            onClick={() =>
              handleStarClick(allData?.Program?.userScore == 1 ? 0 : 1)
            }
          >
            <div className="w-auto absolute bottom-7 -right-7 opacity-0 transition-all duration-5  group-hover:opacity-[100] flex justify-center items-center h-8 p-3 bg-primary rounded-xl text-base-70">
              <p>میپسندم</p>
            </div>
            <LikeIcon
              width={18}
              height={18}
              fill={allData?.Program?.userScore == 1 ? "#144c14" : "#fff"}
              className="transform group cursor-pointer hover:scale-125 transition-transform duration-200"
            />
          </span>
        </div>
        <div className="group">
          <span
            className={`flex text-[#8b8a8a] gap-2 rotate-180 scale-x-[1]`}
            onClick={() =>
              handleStarClick(allData?.Program?.userScore == -1 ? 0 : -1)
            }
          >
            <div className="w-auto absolute top-7 rotate-180 scale-x-[1] transition-all duration-700 -right-7 opacity-0  group-hover:opacity-[100] flex justify-center items-center h-8 p-3 bg-primary rounded-xl text-base-70">
              <p>نمیپسندم</p>
            </div>
            <LikeIcon
              width={18}
              height={18}
              fill={allData?.Program?.userScore == -1 ? "#d42b4d" : "#fff"}
              className="transform cursor-pointer group hover:scale-125 transition-all duration-700 "
            />
          </span>
        </div>
      </div>
    </>
  );
}

export default Rate;
