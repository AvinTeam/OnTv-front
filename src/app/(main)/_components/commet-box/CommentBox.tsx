"use client";
import React, { useState } from "react";
import { show_toast } from "@/utils/functions";
import axios from "@/core/axios";
import Toast from "@/app/_components/Tost/Tost";
import { SendIcon } from "@/app/_components/icons";
import { API_URL } from "@/configs/global";

function CommentBox({ id, type }: { id: string; type: "episode" | "program" }) {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [comment, setComment] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = () => {
    setIsSuccess(false);
    setIsError(false);
    axios
      .post(`${API_URL}${type}/storeComment/${id}`, { comment: comment })
      .then(({ data }) => {
        setIsSuccess(true);
        show_toast({ text: data?.message, type: "success" });
        setComment("");
      })
      .catch((error) => {
        setIsError(true);
        setErrorMessage(error?.response?.data?.message);
      });
  };

  return (
    <div className="flex flex-col justify-start items-start gap-0 w-full pr-2 border-b-[1px] border-b-[#333]">
      {isSuccess && <Toast message="نظر شما با موفقیت ثبت شد" type="success" />}
      {isError && <Toast message={errorMessage} type="error" />}
      <h3 className="text-md text-white pb-0">دیدگاه بینندگان</h3>
      <div className="h-[80px] px-2 md:h-[100px] flex items-center justify-start gap-2 rounded-md w-full">
        <figure className="bg-[#f4511e] h-8 w-8  rounded-full flex justify-center items-center">
          <div className="text-white">�</div>
        </figure>

        <div className="relative w-full peer rounded-md overflow-auto ">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full text-sm pt-2 pr-2 pb-4 rounded-md peer font-light h-[40px] flex justify-center items-center focus:outline-none focus:bg-white focus:text-[#424242] overflow-hidden bg-[#424242] text-[#fff]"
            placeholder="دیدگاه خود دار وارد کنید"
          />
          <span
            onClick={handleSubmit}
            className={`absolute ${
              !comment?.length ? "pointer-events-none cursor-default" : "pointer-events-auto"
            }  peer-focus:bg-white group-focus:text-black  overflow-hidden cursor-pointer rotate-180 top-0 left-0 bg-[#3b3b3b] h-full flex justify-center items-center transition-colors duration-300`}
          >
            <SendIcon fill="#d0d0d0" width={34} height={26} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default CommentBox;
