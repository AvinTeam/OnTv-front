"use client";
import { Button } from "@/app/_components/button";
import BadgeIcon from "@/app/_components/icons/Badge";
import StarIcon from "@/app/_components/icons/Star";
import Modal from "@/app/_components/modal/modal";
import Toast from "@/app/_components/Tost/Tost";
import { API_URL } from "@/configs/global";
import axios from "@/core/axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function RateAndFavorite({ programId }: { programId: string }) {
  const router = useRouter();
  const [refreshData, setRefreshData] = useState<boolean>(false);
  const [allData, setAllData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<any>();
  const [isError, setIsError] = useState<boolean>(false);
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const [userRating, setUserRating] = useState<number | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const handelAddFavorite = () => {
    setStatus(null);
    if (!isLoggedIn()) {
      setOpen(true);
      return;
    }
    setIsLoading(true);
    axios
      .post(`user/favorite/${programId}`, { status: isAdded ? 0 : 1 })
      .then(() => {
        setIsLoading(false);
        setIsAdded(isAdded ? false : true);
      })
      .catch((error) => {
        setIsLoading(false);
        setStatus(error?.response?.status);
        setIsError(true);
      });
  };
  const isLoggedIn = () => {
    const token = localStorage.getItem("user_token");
    return !!token;
  };
  const handleStarClick = (rating: number) => {
    setStatus(null);
    if (!isLoggedIn()) {
      setOpen(true);
      return;
    }
     axios
      .post(`program/storeScore/${programId}`, { score: rating })
      .then(() => {
        setRefreshData((prev) => !prev);
      })
      .catch((error: any) => {
        setStatus(error?.response?.status);
        setIsError(true);
      });
  };

  async function gatAllProgram(id: string) {
    axios.get(`${API_URL}program/publicShow/${id}`).then(({ data }) => {
      setAllData(data);
      setIsAdded(data.Program.isFavorite);
      setUserRating(parseFloat(data.Program.averageOfScore));
    });
  }

  useEffect(() => {
    gatAllProgram(programId);
  }, [refreshData, programId]);

  return (
    <>
      {isError && <Toast message={""} type="error" statusCode={status} />}
      <Modal open={open} onClose={() => setOpen(false)}>
        <>
          <div className="mt-2 w-[300px] text-center">لطفا ابتدا در سایت ثبت نام کنید</div>
          <Button
            className=" mt-4 bg-primary py-2 text-white"
            onClick={() => router.push("/signin")}
          >
            ثبت نام{" "}
          </Button>
        </>
      </Modal>
      <div className="flex gap-1 mt-2">
        <div
          className="relative cursor-pointer group"
          onClick={handelAddFavorite}
        >
          <BadgeIcon fill={`${isAdded ? "#3899a0" : "#fff"}`} />
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2">
            <div className="px-2 py-1 text-center flex justify-center items-center bg-gray-800 w-52 h-8 bg-primary text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {isLoading ? (
                <div className="loader border-t-transparent border-solid border-white border-4 rounded-full w-4 h-4 animate-spin"></div>
              ) : isAdded ? (
                <p>{"حذف از علاقه مندی ها"}</p>
              ) : (
                <p>{"افزودن به لیست علاقه‌مندی‌ها"}</p>
              )}
              <div className="w-0 absolute top-8 h-0 border-l-4 border-l-transparent border-primary border-r-4 border-r-transparent border-t-4 mx-auto"></div>
            </div>
          </div>
        </div>

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

export default RateAndFavorite;
