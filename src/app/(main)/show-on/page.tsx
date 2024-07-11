import Image from "next/image";
import Live from "./_components/live";
import dataDec1 from "../../../../public/images/Mask Group 29.png";
import dataDec2 from "../../../../public/images/Mask Group 30.png";
import dataDec3 from "../../../../public/images/Mask Group 31.png";
import dataDec4 from "../../../../public/images/Mask Group 33.png";
const dataDec: any[] = [
  {
    path: dataDec1,
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: dataDec2,
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: dataDec3,
     alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: dataDec4,
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: dataDec4,
     alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: dataDec4,
     alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
];
export default function ShowOn() {
  return (
    <main>
      <div className="dark:bg-[#4B4B4B]">
        <div className="container py-3 text-link-footer-title">
          صفحه اصلی / اخبار به روز
        </div>
      </div>
      <div className="bg-base-75">
        <div className="container my-5 md:grid md:grid-cols-12 gap-2">
          <div className="flex flex-col col-span-7 md:col-span-8 lg:col-span-9 min-h-screen">
            <div className="">
              <Live />
            </div>
            <div className="mt-2 text-white bg-base-50 rounded-[12px] py-3 px-6">
              <div className="flex justify-between">
                <h1 className="text-link-footer-title text-[11px] md:text-sm lg:text-xl">
                  مجری شبکه ورزش به حواشی پرونده فساد در فوتبال واکنش نشان داد
                </h1>
                <div className="md:bg-box-slider-bg-text text-nowrap h-7 text-box-slider-text-l md:py-1.5 md:px-6 text-[11px] md:mr-auto md:rounded-[20px]">
                  <span>22 دقیقه پیش</span> <span> | </span>
                  <span> 17,526 نمایش</span>
                </div>
              </div>
              <div>
                <h2 className="text-[#606770] mt-3">
                  طلب آمرزش، عرض تسلیت، ابراز همدردی، توجه به حضور پرشور مردم در
                  مراسم تشییع شهدای خدمت، حمایت شهید جمهور از فلسطین و معمای
                  انگشتر ایشان
                </h2>
                <h2 className="text-[#606770] mt-3">
                  طلب آمرزش، عرض تسلیت، ابراز همدردی، توجه به حضور پرشور مردم در
                  مراسم تشییع شهدای خدمت، حمایت شهید جمهور از فلسطین و معمای
                  انگشتر ایشان
                </h2>
                <h2 className="text-[#606770] mt-3">
                  طلب آمرزش، عرض تسلیت، ابراز همدردی، توجه به حضور پرشور مردم در
                  مراسم تشییع شهدای خدمت، حمایت شهید جمهور از فلسطین و معمای
                  انگشتر ایشان
                </h2>
              </div>
            </div>
          </div>
          <div className="hidden md:block col-span-5 md:col-span-4 lg:col-span-3 rounded-[12px] overflow-y-auto bg-base-50 p-5 md:h-[500px] lg:h-[630px] xl-h-[700px]">
            <p className="mb-2 text-base-content-slider">جدیدترین اخبار</p>
            <hr />
            <div className="mt-4">
              {dataDec?.map((item, idx) => (
                <div key={idx} className="rounded-md mb-2 overflow-auto">
                  <Image
                    src={item.path}
                    style={{ objectFit: "cover" }}
                    width={0}
                    height={0}
                    alt={item.alt}
                    className=" w-full h-[140px]"
                  />
                   <div className="pb-[9px] md:pb-0 flex justify-center items-center flex-col w-full h-[40%] md:h-[30%]">
                    <div className=" flex flex-col md:mt-4 md:grid md:grid-cols-12 justify-start md:justify-between md:items-center gap-1 w-full mt-4">
                      <div className="col-span-3 mb-1 md:bg-box-slider-bg-text text-nowrap text-base-content-slider md:py-1 md:px-1 md:flex md:justify-center text-[10px] md:rounded-[20px]">
                        {item?.descriptions?.title}
                      </div>
                      <div className="col-span-9 md:bg-box-slider-bg-text text-nowrap text-box-slider-text-l md:py-1 md:px-2 text-[9px] md:mr-auto md:rounded-[20px]">
                        <span>22 دقیقه پیش</span> <span> | </span>{" "}
                        <span> 17,526 نمایش</span>
                      </div>
                    </div>
                    <div className=" mt-1 md:mt-2 text-justify text-[12px] md:text-[14px] max-w-[100%] md:min-w-[100%]">
                      <h3 className="mb-1 text-ellipsis dark:text-description-text md:text-clip overflow-hidden whitespace-nowrap md:text-wrap md:ml-auto ">
                        {item?.descriptions?.dec}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
