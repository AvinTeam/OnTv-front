"use client";
import { Button } from "@/app/_components/button";
import StarIcon from "@/app/_components/icons/Star";
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
      <div className="flex gap-1 mt-2">
        <div className="flex ml-[2px] cursor-pointer">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} onClick={() => handleStarClick(rating)}>
              <StarIcon
                fill={
                  userRating && userRating >= rating ? "#FFD700" : "#D3D3D3"
                }
              />
            </div>
          ))}
        </div>
        <div className="text-[#B088FF]">
          {allData?.Program?.averageOfScore
            ? `${parseFloat(allData.Program.averageOfScore).toFixed(1)}`
            : "0.0"}
        </div>
      </div>
    </>
  );
}

export default Rate;
