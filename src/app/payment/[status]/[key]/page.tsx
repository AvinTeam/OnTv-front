import axios from "@/core/axios";
import { CloseIcon } from "@/app/_components/icons";
import Link from "next/link";
const getPeymentDetails = (key: string) => {
  axios(`user/getUserInvoices?tracking_code=${key}`).then(
    ({data}) => {
       return data
    }
  );
};
async function Payment({
  params,
}: {
  params: { status: string; key: string };
}) {
  const paymentData: any = await getPeymentDetails(params?.key?.split(".")?.[0]);

  return (
    <div className="bg-[#2e2840] w-full min-h-screen text-white flex justify-center items-center">
      {params?.status == "success" ? (
        <div className="relative bg-[#1f1b2e] w-[320px] p-6 rounded-lg shadow-lg">
          <div className="absolute top-[-24px] left-1/2 transform -translate-x-1/2 bg-[#1f1b2e] rounded-full w-[50px] h-[50px] flex items-center justify-center shadow-md">
            <div className="bg-[#41d195] flex justify-center items-center w-7 h-7 rounded-full">
              <p className="text-[#000]">✓</p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <h2 className="font-semibold ">پرداخت شما با موفقیت انجام شد</h2>
            <div className="flex justify-between mt-8 [&>*]:text-sm [&>*]:text-[#818181]">
              <p> نوع خرید: </p>
              <p className="font-light">   {`اشتراک ${paymentData?.data?.decription || "--"}`} </p>
            </div>
            <div className="flex justify-between mt-3 [&>*]:text-sm [&>*]:text-[#818181]">
              <p> مبلغ خرید : </p>
              <p className="font-light">{paymentData?.data?.price || "--"}</p>
            </div>
            <div className="flex justify-between mt-3 [&>*]:text-sm [&>*]:text-[#818181]">
              <p> کد رهگیری : </p>
              <p className="font-light">{params?.key?.split(".")?.[0]}</p>
            </div>
            <div className="flex justify-between mt-3 [&>*]:text-sm [&>*]:text-[#818181]">
              <p> جزئیات پرداخت : </p>
              <p>---</p>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Link
              href={"/"}
              className="bg-[#1f1f35] font-light text-[14px] hover:bg-[#16162c] text-[#908db9] py-2 px-4 rounded transition-all"
            >
              بازگشت به صفحه اصلی
            </Link>
          </div>
        </div>
      ) : (
        <div className="relative bg-[#1f1b2e] w-[320px] p-6 rounded-lg shadow-lg">
          <div className="absolute top-[-24px] left-1/2 transform -translate-x-1/2 bg-[#1f1b2e] rounded-full w-[50px] h-[50px] flex items-center justify-center shadow-md">
            <div className="bg-[#d15241] flex justify-center items-center w-7 h-7 rounded-full">
              <p className="text-[#000]">
                <CloseIcon fill="#000" />
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <h2 className="font-semibold mb-2 ">
              متاسفیم ، پرداخت شما با شکست مواجه شد
            </h2>
          </div>

          <div className="mt-6 flex justify-center">
            <Link
              href={"/"}
              className="bg-[#1f1f35] text-xs hover:bg-[#16162c] text-[#7c78b3] font-light py-2 px-4 rounded transition-all"
            >
              بازگشت به صفحه اصلی
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;
