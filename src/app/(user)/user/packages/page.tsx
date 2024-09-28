"use client";
import { useUserStore } from "@/stores/user.store";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowIcon } from "@/app/_components/icons";
import axios from "@/core/axios";
import LoadingSpinner from "@/app/_components/loading/loading";
import { toLocaleNumber } from "@/utils/functions";
import Modal from "@/app/_components/modal/modal";
import DiscountCode from "./components/DiscountCode";

function Packages() {
  const [paymentGateways, setPaymentGateways] = useState<any[]>([]);
  const [plans, setPlans] = useState<any[]>([]);

  const [loadingِData, setLoadingData] = useState<boolean>(false);
  const [discount, setDiscount] = useState<{
    type: "amount" | "percent" | "";
    amount: number;
    code: string;
    discountable_type: any;
    discountable_id: any;
  }>({
    type: "",
    code: "",
    amount: 0,
    discountable_type: '',
    discountable_id: null
  });

  const [discountCode, setDiscountCode] = useState('');

  const [id, setId] = useState<number | null>(null);
  const [planId, setPlanId] = useState<number | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const user = useUserStore((store) => store.user);
  const handlePayment = () => {
    setLoadingData(true);
    axios
      .post(`plan/buyPlan/${id}`, {
        plan_id: planId,
        ...addDiscountToPayment(planId)
      })
      .then(({ data }) => {
        window.location.href = data?.response?.url
        setLoadingData(false);
      })
      .catch(() => setLoadingData(false));
  };

  const addDiscountToPayment = (plan_id: any) => {
    let result = {}
    if (discountCode !== '') {
      if (!discount.discountable_type || plan_id == discount.discountable_id)
        result = { discountCode: discountCode }
    }
    console.log({ discountCode, discount })
    return result
  }

  const applyDiscount = (code: string) => {
    setLoadingData(true);
    axios
      .post(`discount/validate`, { code, plan_id: 1 })
      .then(({ data }) => {
        setLoadingData(false);
        setDiscountCode(code);
        const discountableId = data?.discount?.discountable_id;

        setDiscount(data?.discount);
        if (discountableId) {
          setPlans((prevPlans) =>
            prevPlans.map((plan: any) => {
              if (plan.id == discountableId) {
                return {
                  ...plan,
                  originalPrice: plan.priceAfterDiscount || plan.price,
                  priceAfterDiscount: plan.priceAfterDiscount - discountCalc(data?.discount, plan.priceAfterDiscount),
                };
              }
              const { originalPrice, ...restPlan } = plan;
              return restPlan;
            })
          );
        } else {
          setPlans((prevPlans) =>
            prevPlans.map((plan) => ({
              ...plan,
              originalPrice: plan.priceAfterDiscount,
              priceAfterDiscount: plan.priceAfterDiscount - discountCalc(data?.discount, plan.priceAfterDiscount),
            }))
          );
        }

       })
      .catch(() => {
        setLoadingData(false);
        setDiscountCode('');
      });

    window.scrollTo(0, 0);
  };
  const cancelDiscount = () => {
    if (!discountCode) {
      setDiscountCode('');
      return;
    }
    setDiscountCode('');

    setPlans((prevPlans) =>
      prevPlans.map((plan) => ({
        ...plan,
        priceAfterDiscount: plan.originalPrice ? plan.originalPrice : plan?.priceAfterDiscount,
      }))
    );

    setDiscount({
      type: "",
      amount: 0,
      discountable_id: null,
      discountable_type: null,
      code: ''
    });
  };
  useEffect(() => {
    setLoadingData(true);
    axios
      .get(
        `plan/publicIndex?f_params[orderBy][field]=period&f_params[orderBy][type]=asc`
      )
      .then(({ data }) => {
        setPaymentGateways(data?.payment_gateways);
        setPlans(data?.plans?.data);
        setLoadingData(false);
      })
      .catch(() => setLoadingData(false));
  }, []);


  const discountCalc = (discount: any, price: number) => {
    let discountAmount = 0;
    if (discount.type == "amount") {
      discountAmount = discount.amount
    } else {
      discountAmount = price * discount.amount / 100;
    }

    return price <= discountAmount ? price : discountAmount
  }

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
      <div className="mt-8 h-full p-4 flex flex-col gap-3 w-screen md:w-full mb-12">
        <div className="flex justify-between w-full">
          <p className="text-primary text-[12px] md:text-sm">خرید اشتراک آن</p>
          <p className="text-primary text-[12px] md:text-sm">
            برای شماره موبایل: {user?.mobile}
          </p>
        </div>
        <div className="text-center h-[2px] select-none bg-[#242323] md:min-w-[500px] overflow-hidden shadow-2xl flex justify-center items-center rounded-md"></div>
        {discountCode && (
          <div className="mt-4 bg-[#242323] items-center justify-around w-full md:w-[600px] border border-primary mx-auto h-[90px] md:h-[80px] flex cursor-pointer transition rounded-lg">
            <div className="text-primary leading-7 text-xs md:text-sm w-[65%]">
              {`کد تخفیف  ${discountCode} با موفقیت اعمال شد. اکنون نوع اشتراک مورد نظر خود را انتخاب کنید.`}
            </div>
            <button
              onClick={cancelDiscount}
              className="text-xs md:text-sm text-[#f16363]"
            >
              لغو تخفیف
            </button>
          </div>
        )}
        <div className="mt-6 flex flex-col items-center gap-6 justify-center pb-5">
          {plans?.map((item) => (
            <div
              onClick={() => {
                setPlanId(item?.id);
                setOpen(true);
              }}
              key={item?.id}
              className="relative w-full md:w-[600px] mx-auto h-[90px] md:h-[100px] flex border border-[#040404] duration-[0.3s] ease-in-out cursor-pointer hover:border-[#1c5053] transition rounded-lg"
            >
              <div
                className="hidden md:flex justify-center items-center rounded-lg w-[23%] border-r-2 p-2 bg-[#242323] shadow-2xl"
                style={{
                  borderLeft: "2px dashed #010101",
                  borderRight: `2px solid ${item?.color}`,
                }}
              >
                <Image
                  src={item?.image?.[0]?.url}
                  width={80}
                  height={80}
                  alt={item?.title}
                />
              </div>
              <div
                style={{
                  borderColor: `${item?.color}`,
                }}
                className="flex border-r-2 md:border-r-0 flex-col justify-between w-full md:w-[77%] rounded-lg items-center p-2 bg-[#242323]"
              >
                <span className="w-full mt-1 flex justify-between">
                  <p className="text-[#c9c9c9] md:mr-6 text-sm">
                    {item?.title}
                  </p>
                  <span className="flex gap-1">
                    {discount.amount &&
                      item?.originalPrice ? (
                      <p className="text-[11px] font-bold text-[#cacaca]  bg-[#04745b] py-1.5 px-3 rounded-md">
                        {` تخفیف نقدی ${discountCalc(discount, item.originalPrice)} تومان`}
                      </p>
                    ) : null}
                    <p className="text-[#e9e9e9] text-xs bg-[#d42b50] py-1.5 px-3 rounded-md">
                      {` تخفیف ${Number(item?.discount)}%`}
                    </p>
                  </span>
                </span>



                <div className="w-full mb-1 flex justify-between items-end">
                  {item?.priceAfterDiscount == 0 ? (
                    <p className="md:mr-5 bg-primary text-base-70 py-1 px-3 rounded-md text-sm">
                      اشتراک رایگان
                    </p>
                  ) : (
                    <div className="flex gap-1">
                      <div className="relative">
                        <span className="text-xs md:text-sm md:mr-6 text-[#63676b] before:content-[''] before:absolute before:h-[1px] before:w-[80%] before:bg-current before:top-3 before:-rotate-12 before:right-4">
                          {toLocaleNumber(item?.price)}
                        </span>
                      </div>
                      <p className="text-[#919396] text-xs md:text-sm mr-3">{`${toLocaleNumber(
                        item?.priceAfterDiscount.toString()?.split(".")?.[0]
                      )} تومان`}</p>
                      {item?.priceAfterDiscount.toString()?.split(".")?.[0] !== (item?.priceAfterDiscount / (item?.period / 30))
                        .toString()
                        ?.split(".")?.[0]
                        .slice(0, 6) &&
                        <p className="text-[#0a0a0a] text-[11px] md:text-xs rounded-md py-1 px-1 md:px-2 bg-[#6ebec4] mr-3">{` ماهانه ${toLocaleNumber(
                          (item?.priceAfterDiscount / (item?.period / 30))
                            .toString()
                            ?.split(".")?.[0]
                            .slice(0, 6)
                        )} تومان`}</p>
                      }
                    </div>
                  )}
                  <span className="text-[10px] md:text-xs flex gap-1 items-center text-primary ">
                    <p>انتخاب و خرید </p>
                    <ArrowIcon fill="#3899a0" className="rotate-180" />
                  </span>
                </div>
              </div>
              <div className="hidden lg:block md:absolute w-7 h-12 right-[123px] -top-9 bg-[#000] rounded-full"></div>
              <div className="hidden lg:block md:absolute w-7 h-12 right-[123px] -bottom-9 bg-[#000] rounded-full"></div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-3">
          <span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.34301 2.34301C-0.781003 5.46702 -0.781003 10.533 2.34301 13.657C5.46702 16.781 10.533 16.781 13.657 13.657C16.781 10.533 16.781 5.46702 13.657 2.34301C10.533 -0.781003 5.46702 -0.781003 2.34301 2.34301ZM8.32084 3.3562C8.99631 3.3562 9.53668 3.91346 9.53668 4.58892C9.53668 5.26438 8.97942 5.82164 8.32084 5.82164C7.64538 5.82164 7.08813 5.26438 7.08813 4.57203C7.08813 3.89657 7.64538 3.3562 8.32084 3.3562ZM10.0602 11.6137C10.0264 11.715 9.95884 11.8332 9.89129 11.9008C9.45224 12.3567 8.91187 12.6269 8.27018 12.6269C7.96623 12.6269 7.67916 12.6269 7.3752 12.5763C6.88549 12.5087 6.26069 11.9008 6.34512 11.2591C6.41267 10.8201 6.48021 10.381 6.54776 9.94195C6.68285 9.18206 6.81794 8.40528 6.95303 7.64538C6.95303 7.59472 6.96992 7.54406 6.96992 7.4934C6.96992 7.17256 6.8686 7.05435 6.54776 7.02058C6.41267 7.00369 6.27757 6.98681 6.14248 6.95303C5.9905 6.90237 5.90607 6.76728 5.92296 6.64908C5.93984 6.51398 6.02427 6.42955 6.19314 6.39578C6.27757 6.37889 6.37889 6.37889 6.48021 6.37889C6.85172 6.37889 7.22322 6.37889 7.61161 6.37889C8.01689 6.37889 8.40528 6.37889 8.81055 6.37889C9.09763 6.37889 9.26649 6.51398 9.26649 6.80106C9.26649 7.03747 9.23272 7.27388 9.18206 7.51029C9.03008 8.38839 8.86121 9.2496 8.70924 10.1277C8.65858 10.4148 8.59103 10.7018 8.55726 10.9889C8.54037 11.124 8.55726 11.276 8.59103 11.4111C8.64169 11.5968 8.77678 11.6982 8.96253 11.6813C9.11451 11.6644 9.26649 11.6137 9.41847 11.5462C9.53668 11.4955 9.638 11.4111 9.7562 11.3773C9.95884 11.3098 10.1108 11.428 10.0602 11.6137Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
          <p className="ont-light text-xs md:text-sm lg:text-[1rem]">
            به تمامی مبالغ 10% مالیات بر ارزش افزوده اضافه خواهد شد.
          </p>
        </div>
        {!discountCode && <div className="mt-4 bg-[#242323] w-full md:w-[600px] mx-auto h-[90px] md:h-[100px] flex transition rounded-lg">
          <DiscountCode onApplyDiscount={applyDiscount} />
        </div>}
      </div>
    </>
  );
}

export default Packages;
