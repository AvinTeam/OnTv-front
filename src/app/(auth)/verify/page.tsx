"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/images/android-chrome-192x192.png";
import axios from "axios";
import { AUTH_URL } from "@/configs/global";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowIcon } from "@/app/_components/icons";
import { Button } from "@/app/_components/button";
import { show_toast } from "@/utils/functions";

export default function Verify() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [inputs, setInputs] = useState(Array(4).fill(""));
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [timeLeft, setTimeLeft] = useState(120);
  const [isLoding, setIsLoading] = useState<boolean>(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [isResendEnabled, setIsResendEnabled] = useState(false);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  useEffect(() => {
    setIsButtonDisabled(inputs.includes(""));
  }, [inputs]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setIsResendEnabled(true);
    }
  }, [timeLeft]);

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newInputs = [...inputs];
      newInputs[index] = value;
      setInputs(newInputs);

      if (value !== "" && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1]!.focus();
      }
    }
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (
      event.key === "Backspace" &&
      inputs[index] === "" &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1]!.focus();
    }
  };

  const handleResendCode = () => {
    console.log(inputs.join(""));
    if (searchParams) console.log(searchParams.get("mobile"));
    axios
      .post(`${AUTH_URL}mobile/auth/send_otp`, {
        mobile: searchParams.get("mobile"),
        code: inputs.join(""),
      })
      .then(() => {
        setTimeLeft(120);
        setIsResendEnabled(false);
      });
  };

  const handleSubmit = () => {
    setIsLoading(true);
    if (searchParams) console.log(searchParams.get("mobile"));
    axios
      .post(`${AUTH_URL}mobile/auth/verify_mobile`, {
        mobile: searchParams.get("mobile"),
        code: inputs.join(""),
      })
      .then(({ data }) => {
        show_toast({ text: data?.message, type: "success" });
        setIsLoading(false);
        localStorage.setItem("user_token", data.data.token);
        localStorage.setItem("user_name", JSON.stringify(data.data.user));

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

  return (
    <div className="px-10 py-4 w-[330px] h-[390px] bg-base-50 flex justify-around items-center flex-col rounded-md">
      <div className="flex gap-3 mt-10">
        <Image
          src={logo}
          width={0}
          objectFit="contain"
          height={0}
          className="w-14 h-14 mt-3"
          alt="logo"
        />
        <div className="flex mt-2 flex-col gap-2">
          <p className="text-white font-bold text-[12px]">ورود به آن</p>
          <p className="text-[11px] mb-6">
            جهت ورود یا ثبت‌نام در آن، شماره موبایل خود را وارد کنید.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-4 gap-2">
          {[...inputs].reverse().map((input, index) => (
            <input
              key={index}
              value={inputs[inputs.length - 1 - index]}
              ref={(el: any) =>
                (inputRefs.current[inputs.length - 1 - index] = el)
              }
              onChange={(e) =>
                handleChange(inputs.length - 1 - index, e.target.value)
              }
              onKeyDown={(e) => handleKeyDown(inputs.length - 1 - index, e)}
              className="p-2 rounded-md focus:outline-none bg-base-25 text-white text-center"
            />
          ))}
        </div>
        <p className="text-center font-bold text-lg">{formatTime(timeLeft)}</p>
        <Button
          onClick={handleSubmit}
          loading={isLoding}
          bgColor="#424242"
          className="py-2 text-white"
        >
          {isLoding ? "درحال درخواست" : "ثبت نام"}
        </Button>
        <p
          onClick={handleResendCode}
          className={`text-center text-[12px] cursor-pointer ${
            isResendEnabled ? "" : "opacity-50 cursor-not-allowed"
          }`}
        >
          ارسال دوباره کد
        </p>
      </div>
      <div className="mr-auto flex justify-center items-center gap-1 cursor-pointer">
        <Link href={"/signin"} className="text-sm">
          بازگشت
        </Link>
        <ArrowIcon width={8} height={8} className="rotate-180" />
      </div>
    </div>
  );
}
