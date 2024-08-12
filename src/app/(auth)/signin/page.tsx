"use client";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { AUTH_URL } from "@/configs/global";
import { show_toast } from "@/utils/functions";
import { Button } from "@/app/_components/button";

export default function SignIn() {
  const [isLoding, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const [mobile, setMobile] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
     if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

   useEffect(() => {
    const mobilePattern = /^09\d{9}$/;  
    setIsValid(mobilePattern.test(mobile));
  }, [mobile]);

  const handelSubmit = () => {
    if (!isValid) return;

    setIsLoading(true);
    axios
      .post(`${AUTH_URL}mobile/auth/send_otp`, { mobile })
      .then(({ data }) => {
        show_toast({ text: data?.message, type: "success" });
        if (data.success) router.push(`/verify?mobile=${mobile}`);
        setMobile("");
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        show_toast({ text: error?.response?.data?.message, type: "error" });
      });
  };

  return (
   <div className="flex justify-center items-center">
     <div className="px-8 py-6 md:py-2 w-[300px] md:w-[400px] h-[290px] md:h-[330px] bg-[#292929] flex gap-12 justify-center  flex-col rounded-md">
      <p className="text-white text-[32px] font-bold text-center mt-4">ورود</p>
      <p className="text-white text-sm text-center -mt-4">
        شماره تلفن همراه خود را وارد نمایید
      </p>
      <div className="flex flex-col gap-6">
        <input
          ref={inputRef}  
          className="p-2 rounded-md focus:outline-none bg-[#424242] text-white"
          value={mobile}
          onChange={(event: any) => {
            setMobile(event.target.value);
          }}
        />
        <Button
          onClick={handelSubmit}
          loading={isLoding}
          bgColor={isValid ? "#d42b4d" : "#8f8f8f"}  
          className={`py-2 ${isValid ? "text-white" : "text-[#5c5c5c]"}`}
          disabled={!isValid || isLoding} 
        >
          {isLoding ? "درحال درخواست" : "ورود / ثبت نام"}
        </Button>
      </div>
    </div>
   </div>
  );
}
