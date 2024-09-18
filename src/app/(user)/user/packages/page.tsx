"use client";
import { useUserStore } from "@/stores/user.store";
import React, { useEffect, useState } from "react";
import sub1 from "../../../../../public/images/sub1-big-size.png";
import sub3 from "../../../../../public/images/sub3-big-size.png";
import sub6 from "../../../../../public/images/sub6-big-size.png";
import Image from "next/image";
import { ArrowIcon } from "@/app/_components/icons";
import axios from "@/core/axios";
import LoadingSpinner from "@/app/_components/loading/loading";
import { toLocaleNumber } from "@/utils/functions";
import Modal from "@/app/_components/modal/modal";
function Packages() {
  const [paymentGateways, setPaymentGateways] = useState<any[]>([]);
  const [plans, setPlans] = useState<any[]>([]);
  const [loadingِData, setLoadingData] = useState<boolean>(false);
  const [id, setId] = useState<number | null>(null);
  const [planId, setPlanId] = useState<number | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const openInNewTab = (url: string) => {
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.click();
  };
  const user = useUserStore((store) => store.user);
  const handlePayment = () => {
    setLoadingData(true);
    axios
      .post(`plan/buyPlan/${id}`, { plan_id: planId })
      .then(({ data }) => {
        openInNewTab(data?.response?.url)
        setLoadingData(false);
      })
      .catch(() => setLoadingData(false));
  };
  useEffect(() => {
    setLoadingData(true);
    axios
      .get(`plan/publicIndex`)
      .then(({ data }) => {
        setPaymentGateways(data?.payment_gateways);
        setPlans(data?.plans?.data);
        setLoadingData(false);
      })
      .catch(() => setLoadingData(false));
  }, []);
  if (loadingِData) {
    return (
      <LoadingSpinner message="در حال انجام عملیات هستیم لطفا منتظر بمانید  ..." />
    );
  }
  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="روش پرداخت را انتخاب نمایید:"
      >
        <div className="w-[350px] md:w-[400px] text-[#B3BAC4] overflow-scroll">
          <p className="text-sm mt-2">پرداخت آنلاین</p>
          {paymentGateways?.map((item) => {
            if (item?.is_active) {
              return (
                <div
                  onClick={() => setId(item?.id)}
                  key={item?.id}
                  className="mt-4 flex gap-4 justify-start items-center cursor-pointer border border-[#3f3f3f] rounded-lg w-[200] h-16 p-2 shadow-2xl"
                >
                  <div className="w-5 h-5 border border-primary rounded-full flex justify-center items-center">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{
                        background: id && item?.id === id ? "#3899a0" : "",
                      }}
                    ></div>
                  </div>
                  <div>
                    <Image
                      src={item?.image?.[0]?.url}
                      alt={item?.name}
                      width={40}
                      height={40}
                    />
                  </div>
                  <div> {item?.name}</div>
                </div>
              );
            }
          })}
          <div
            onClick={handlePayment}
            className="w-full h-10 mt-2 rounded-lg bg-[#d42b50] text-white pt-1.5 cursor-pointer text-center"
          >
            پرداخت
          </div>
        </div>
      </Modal>
      <div className="mt-8 h-full p-4 flex flex-col gap-3  w-screen md:w-full overflow-hidden ">
        <div className="flex justify-between w-full">
          <p className="text-primary text-[12px] md:text-sm">خرید اشتراک آن</p>
          <p className="text-primary text-[12px] md:text-sm">برای شماره موبایل: {user?.mobile}</p>
        </div>
        <div className="text-center h-[2px] select-none bg-[#242323] md:min-w-[500px] overflow-hidden shadow-2xl flex justify-center items-center rounded-md"></div>
        <div className="mt-6 flex flex-col-reverse items-center gap-6 justify-center ">
          {plans?.map((item) => (
            <div
              onClick={() => {
                setPlanId(item?.id);
                setOpen(true);
              }}
              key={item?.id}
              className="relative w-full md:w-[600px] mx-auto h-[90px] md:h-[100px] flex  hover:border duration-[0.3s] ease-in-out cursor-pointer hover:border-[#1c5053] transition rounded-lg"
            >
              <div
                className="hidden md:flex justify-center items-center rounded-lg w-[23%] border-r-2 p-2 bg-[#242323] shadow-2xl"
                style={{
                  borderLeft: "2px dashed #010101",
                  borderRight: `2px solid ${item?.color}`,
                }}
              >
                <Image
                  src={
                    item?.image?.[0]?.url
                  }
                  width={80}
                  height={80}
                  alt={item?.title}
                />
              </div>
              <div  style={{
                   borderColor: `${item?.color}`,
                }} className="flex border-r-2 md:border-r-0 flex-col justify-between w-full md:w-[77%] rounded-lg items-center p-2 bg-[#242323]">
                <div className="w-full  mt-1 flex justify-between">
                  <p className="text-[#c9c9c9] md:mr-6 text-sm">{item?.title}</p>
                  <p className="text-[#e9e9e9] text-xs bg-[#d42b50] py-1.5 px-3 rounded-md">
                    {` تخفیف ${100 - ((item?.priceAfterDiscount / item.price) * 100)}%`}
                  </p>
                </div>
                <div className="w-full mb-1 flex justify-between items-end">
                  <div className="flex gap-1">
                    <div className="relative">
                      <span className="text-xs md:text-sm md:mr-6 text-[#63676b] before:content-[''] before:absolute before:h-[1px] before:w-[80%] before:bg-current before:top-3 before:-rotate-12 before:right-4">
                        {toLocaleNumber(item?.price)}
                      </span>
                    </div>
                    <p className="text-[#919396] text-xs md:text-sm mr-3">{`${toLocaleNumber(
                      item?.priceAfterDiscount.toString()?.split(".")?.[0]
                    )} تومان`}</p>
                    <p className="text-[#0a0a0a] text-[11px] md:text-xs rounded-md py-1 px-1 md:px-2 bg-[#6ebec4] mr-3">{` ماهانه ${toLocaleNumber(
                      (item?.priceAfterDiscount / (item?.period / 30))
                        .toString()
                        ?.split(".")?.[0]
                        .slice(0, 6)
                    )} تومان`}</p>
                  </div>
                  <span className="text-[10px] md:text-xs flex gap-1 items-center text-primary ">
                    <p>انتخاب و خرید </p>
                    <ArrowIcon fill="#3899a0" className="rotate-180" />
                  </span>
                </div>
              </div>
              <div className="hidden md:absolute w-7 h-12 right-[123px] -top-9 bg-[#000] rounded-full"></div>
              <div className="hidden md:absolute w-7 h-12 right-[123px] -bottom-9 bg-[#000] rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Packages;
