"use client";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import axios from "../../../../core/axios";
 import {
  convertGregorianToJalaliFullTim,
  convertJalaliToGregorian,
  show_toast,
} from "@/utils/functions";
import { Button } from "@/app/_components/button";
import LoadingSpinner from "@/app/_components/loading/loading";
const genderOptions = ["ترجیح میدهم اعلام نکنم", "خانم", "آقا"];
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

export default function EditProfile() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingِData, setLoadingData] = useState<boolean>(false);
  const [userData, setUserData] = useState<any>(null);
  const [gender, setGender] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [day, setDay] = useState<number | null>(null);
  const [month, setMonth] = useState<number | null>(null);
  const [year, setYear] = useState<number | null>(null);
  const [iimgFile, setImgFile] = useState<any>(null);

  const handleDivClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setImgFile(file);
    if (file) {
      setSelectedImage(file);
    }
  };
  const handelSubmit = () => {
    setLoading(true);
    const formData = new FormData();
    console.log({ selectedImage })

    formData.append('birthday', convertJalaliToGregorian(`${year}/${month}/${day}`));
    formData.append('name', name ?? "");
    formData.append('gender', gender == "خانم" ? '1' : gender == "آقا" ? '2' : '0');
    formData.append('avatar', selectedImage as any);
    axios
      .post(`profile/${userId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(({ data }) => {
        setLoading(false);

        localStorage.setItem("user_name", JSON.stringify(data.user));

        show_toast({ text: data?.message, type: "success" });
      }).catch(() => {
        setLoading(false)
      })
  };

  const years = Array.from({ length: 100 }, (_, i) => 1403 - i);

  const getUserInfo = () => {
    axios.get(`profile/${userId}`).then(({ data }) => {
      setLoadingData(false)
      setUserData(data.user);
      setName(data.user.name);

      setGender(genderOptions[data.user.gender]);
      if (data.user.birthday) {
        const [year, month, day] = convertGregorianToJalaliFullTim(
          data.user.birthday
        ).split("/");
        setDay(+day);
        setMonth(+month);
        setYear(+year);
      }
    }).catch(() => {
      setLoadingData(false)
    })
  };

  useLayoutEffect(() => {
    axios.get("homepage").then(({data})=>{
      console.log(data)
    })
    setLoadingData(true)
    const userData = localStorage.getItem("user_name");
    const parsedData = userData ? JSON.parse(userData) : null;

    setUserId(parsedData?.id);
    if (!userId) return;
    getUserInfo();
  }, [userId]);
  if (loadingِData) {
    return <LoadingSpinner message="در حال دریافت اطلاعات..." />;
  }
  return (
    <div className=" h-full p-4 flex flex-col gap-3 justify-center items-center w-screen md:w-full overflow-hidden ">
      <h2 className="text-white mt-6 text-xl md:text-2xl">ویرایش پروفایل</h2>
      <div className="text-center select-none bg-[#242323] h-auto min-w-[320px] md:min-w-[500px] overflow-hidden shadow-2xl flex justify-center items-center p-4 rounded-md">
        <div className="h-full w-full flex flex-col gap-2 p-3 md:p-8">
          <div className="w-full flex flex-col gap-2 text-white justify-center items-center select-none">
            <div
              onClick={handleDivClick}
              className="cursor-pointer bg-primary w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-full flex-col gap-2 text-white justify-center items-center"
            >
              <Image
                src={
                  selectedImage
                    ? URL.createObjectURL(selectedImage)
                    : userData?.avatar[0]?.thumbnail?.url
                      ? userData?.avatar[0]?.thumbnail?.url
                      : userData?.avatar
                        ? userData?.avatar
                        : "/images/avatar/avatar.jpg"

                }
                alt="Selected Profile"
                className="rounded-full object-cover w-full h-full"
                width={70}
                height={70}
              />

              <p className="-mr-1.5 text-nowrap mt-2"> انتخاب تصویر</p>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className="mt-8 text-sm flex flex-col justify-start gap-2 items-start text-white">
            <p>نام پروفایل</p>
            <input
              type="text"
              value={name ?? userData?.name}
              onChange={(e) => {
                setName(e.target.value || "");
              }}
              className="bg-[#424242] focus:outline-none w-full rounded-md p-2"
            />
          </div>
          <div className="mt-2 text-sm flex flex-col justify-start gap-2 items-start text-white">
            <p>جنسیت</p>
            <select
              value={gender ?? ""}
              onChange={(e) => setGender(e.target.value)}
              className="bg-[#424242] focus:outline-none w-full rounded-md p-2 text-white"
            >
              <option value="">{"انتخاب"}</option>
              {genderOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-2 flex text-sm flex-col justify-start gap-2 items-start text-white">
            <p>تاریخ تولد</p>
            <div className="flex gap-2 w-full">
              <select
                value={day ?? ""}
                onChange={(e: any) => setDay(e.target.value)}
                className="bg-[#424242] focus:outline-none w-full rounded-md p-2 text-white"
              >
                <option value="">{"روز"}</option>
                {days.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
              <select
                value={month ?? ""}
                onChange={(e: any) => setMonth(e.target.value)}
                className="bg-[#424242] focus:outline-none w-full rounded-md p-2 text-white"
              >
                <option value="">ماه</option>
                {months.map((month, index) => (
                  <option key={index} value={index + 1}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                value={year ?? ""}
                onChange={(e: any) => setYear(e.target.value)}
                className="bg-[#424242] focus:outline-none w-full rounded-md p-2 text-white"
              >
                <option value="">سال</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex gap-2 mt-7 justify-between items-center">
            <Button
              onClick={handelSubmit}
              bgColor="#009494"
              className="w-full h-full py-2"
              color={loading ? "#424242" : "white"}
              loading={loading}
              loadingColor="#142a58"
            >
              {loading ? "درحال درخواست" : "تایید"}
            </Button>
            <Button className="bg-[#424242] w-full h-full py-2 text-white">
              بازگشت
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
