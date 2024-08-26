import React, { useEffect, useState } from "react";
import { ErrorStatusIcon, SuccessStatusIcon } from "../icons";
const STATUS_CODE: any = {
  401: "کاربری بااین مشخصات یافت نشد",
  402: "اطلاعات ارسالی ناقص می باشد",
  404: "آدرس مورد نظر یافت نشد",
  422: "داده های اجباری را وارد نمایید",
  500: "اشکال در ارتباط با سرور",
};
const Toast = ({
  type,
  message,
  statusCode
}: {
  type: "success" | "error" | "warning";
  message: string;
  statusCode?: number
}) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  const toastStyles = {
    success: "bg-primary text-white",
    error: "bg-[#ff5353] text-white",
    warning: "bg-[#f1ad15] text-white",
  };

  const icon = type === "success" ? <SuccessStatusIcon width={32} height={32} /> : <ErrorStatusIcon width={28} height={28} />;
  return (
    <div
      className={`fixed z-[1000] flex justify-center items-center gap-3 top-[80%] w-96 left-56 transform -translate-x-1/2 p-4 rounded ${toastStyles[type]}`}
    >
      <div className="flex-shrink-0">{icon}</div>
      <p className="text-center">{statusCode ? STATUS_CODE[statusCode ?? 0] : message}</p>
    </div>
  );
};

export default Toast;
