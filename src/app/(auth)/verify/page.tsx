"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { AUTH_URL } from "@/configs/global";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowIcon, EyesIcon, ViewIcon } from "@/app/_components/icons";
import { Button } from "@/app/_components/button";
import { show_toast } from "@/utils/functions";
import { useUserStore } from "@/stores/user.store";

export default function Verify() {
  const addUser = useUserStore(store=> store.addUser)
  const searchParams = useSearchParams();
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(120);
  const [isLoding, setIsLoading] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");
  const [isPasswordType, setIsPasswordType] = useState(false);

  const handleResendCode = () => {
    if (searchParams) console.log(searchParams.get("mobile"));
    axios
      .post(`${AUTH_URL}mobile/auth/send_otp`, {
        mobile: searchParams.get("mobile"),
        code: inputValue,
      })
      .then(({ data }) => {
        if (!data.success) {
          show_toast({ text: data?.message, type: "error" });
        } else {
          show_toast({ text: data?.message, type: "success" });
          setTimeLeft(120);
        }
      });
  };

  const handleSubmit = () => {
    setIsLoading(true);
    axios
      .post(`${AUTH_URL}mobile/auth/verify_mobile`, {
        mobile: searchParams.get("mobile"),
        code: inputValue,
      })
      .then(({ data }) => {
        if (data?.success) {
          show_toast({ text: data?.message, type: "success" });
        } else {
          show_toast({ text: data?.message, type: "warning" });
        }
        setIsLoading(false);
        localStorage.setItem("onTv_user_token", data.data.token);

        localStorage.setItem("onTv_user_data", JSON.stringify(data.data.user));
        addUser(data.data.user)

        router.push("/");
      })
      .catch((error) => {
        setIsLoading(false);
        show_toast({ text: error?.response?.data?.message, type: "error" });
      });
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${secs < 10 ? "0" : ""}${secs} : ${
      minutes < 10 ? "0" : ""
    }${minutes}`;
  };

  const handleIconClick = () => {
    setIsPasswordType(!isPasswordType);
  };
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  useEffect(() => {
    if (inputValue?.length === 4) {
      handleSubmit();
    }
  }, [inputValue]);
  return (
    <div className="flex justify-center items-center">
      <div className="px-8 py-6 md:py-2 w-[300px] md:w-[400px] h-[310px] md:h-[370px] bg-[#292929] flex gap-12 justify-center  flex-col rounded-md">
        <Link
          href={"/signin"}
          className="ml-auto cursor-pointer z-40 p-1 flex justify-center items-center gap-1 overflow-auto"
        >
          <ArrowIcon width={10} height={10} fill="#fff" />
          <div className="text-md text-white">بازگشت</div>
        </Link>
        <p className="text-center text-xs md:text-sm text-white -mt-8">
          رمز عبور خود را وارد کنید
        </p>
        <div className="flex flex-col gap-4">
          <div className="relative">
            <input
              ref={inputRef}
              type={isPasswordType ? "text" : "password"}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="p-2 pr-10 rounded-md focus:outline-none -mt-4 lg:mt-0 w-full bg-[#e8f0fe] text-[black]"
            />
            <button onClick={handleIconClick} className="absolute left-4 top-2">
              {!isPasswordType ? <EyesIcon /> : <ViewIcon fill="gray" />}
            </button>
          </div>
          <p className="text-center font-bold text-lg">
            {formatTime(timeLeft)}
          </p>
          <Button
            onClick={handleSubmit}
            loading={isLoding}
            bgColor="#d42b4d"
            className="py-2 text-white"
          >
            {isLoding ? "درحال درخواست" : "ورود"}
          </Button>
          <p
            onClick={handleResendCode}
            className={`text-center z-40 text-[12px] cursor-pointer text-white`}
          >
            ارسال دوباره کد
          </p>
        </div>
      </div>
    </div>
  );
}
