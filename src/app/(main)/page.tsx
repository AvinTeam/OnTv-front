import "../globals.css";
import Live from "../_components/live/live";
import { Slider } from "../_components/slider/slider";
import { SliderPodcast } from "../_components/slider-podcast/slider-podcast";
import Image from "next/image";
import { Tabs } from "../_components/tabs";

const data: any = [
  {
    path: "/images/Mask Group 38.png",
    logo: "/images/logo/Group 953.png",
    alt: "test",
  },
  {
    path: "/images/Mask Group 39.png",
    logo: "/images/logo/Group 988.png",
    alt: "test",
  },
  {
    path: "/images/Mask Group 41.png",
    logo: "/images/logo/Group 1011.png",
    alt: "test",
  },
  {
    path: "/images/Image 72.png",
    logo: "/images/logo/Group 9003.png",
    alt: "test",
  },

  {
    path: "/images/Mask Group 42.png",
    logo: "/images/logo/Group 1013.png",
    alt: "test",
  },
  {
    path: "/images/Mask Group 43.png",
    logo: "/images/logo/Group 1014.png",
    alt: "test",
  },
  {
    path: "/images/Mask Group 43.png",
    logo: "/images/logo/Group 1014.png",
    alt: "test",
  },
];
const dataDec: any = [
  {
    path: "/images/Mask Group 29.png",
    logo: "/images/logo/Group 953.png",
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: "/images/Mask Group 30.png",
    logo: "/images/logo/Group 1011.png",
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: "/images/Mask Group 31.png",
    logo: "/images/logo/Group 1013.png",
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: "/images/Mask Group 33.png",
    logo: "/images/logo/Group 9003.png",
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: "/images/Mask Group 33.png",
    logo: "/images/logo/Group 9003.png",
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: "/images/Mask Group 33.png",
    logo: "/images/logo/Group 9003.png",
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
];
const finalyData: any = [
  {
    path: "/images/Image 52.png",
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: "/images/Image 53.png",
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: "/images/Image 54.png",
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: "/images/Image 55.png",
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: "/images/Mask Group 33.png",
    logo: "/images/logo/Group 9003.png",
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: "/images/Mask Group 33.png",
    logo: "/images/logo/Group 9003.png",
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
];
const mobile: any = [
  {
    path: "/images/Mask Group 10.png",
    alt: "test",
  },
  {
    path: "/images/Image 27.png",
    alt: "test",
  },
  {
    path: "/images/Image 28.png",
    alt: "test",
  },
  {
    path: "/images/Mask Group 13 (2).png",
    alt: "test",
  },

  {
    path: "/images/Image 27.png",
    alt: "test",
  },

  {
    path: "/images/Mask Group 10.png",
    alt: "test",
  },
];
const podCast: any = [
  {
    time: "22:25:43",
    description: "نماهنگ من یک بسیجی ام - گروه سرود با ما نورالمهدی همدان",
    bgColor: "#8C96D9",
  },
  {
    time: "22:25:43",
    description: "نماهنگ من یک بسیجی ام - گروه سرود با ما نورالمهدی همدان",
    bgColor: "#6ADEA0",
  },
  {
    time: "22:25:43",
    description: "نماهنگ من یک بسیجی ام - گروه سرود با ما نورالمهدی همدان",
    bgColor: "#8C96D9",
  },
  {
    time: "22:25:43",
    description: "نماهنگ من یک بسیجی ام - گروه سرود با ما نورالمهدی همدان",
    bgColor: "#C1C557",
  },
  {
    time: "22:25:43",
    description: "نماهنگ من یک بسیجی ام - گروه سرود با ما نورالمهدی همدان",
    bgColor: "#C1C557",
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col w-full overflow-x-auto overflow-y-hidden">
      <div className="container mt-4 mb-4 px-2 md:px-0 overflow-x-auto">
        <Live />
      </div>
      <div className="h-20 md:h-40 px-2 md:px-6 overflow-x-auto ">
        <Slider data={data} />
      </div>
      <div className="mt-4 mb-2 md:mb-6 md:mt-16 py-6 md:py-10 bg-base-50 px-2 md:px-6 h-[270px] md:h-[440px] overflow-x-auto overflow-y-hidden ">
        <div className="container mx-auto h-44 md:h-80 flex flex-col justify-center items-center">
          <div className="flex w-full justify-between pt-8 my-3 md:pt-8 md:pb-1 px-2 items-center">
            <p className="text-primary text-sm md:text-xl">ویژه ها</p>
            <p className="text-base-content text-xs md:text-md">نمایش همه</p>
          </div>
          <hr className="w-full pb-4 border-t-base-70" />
          <Slider data={dataDec} isDescription />
        </div>
      </div>
      <div className="overflow-auto">
        <div className="container px-2 w-full h-full">
          <div className="flex flex-col md:grid grid-cols-12 gap-2 w-full h-full justify-center items-center content-center">
            <div className="md:col-span-6 h-full w-full md:h-[105px]">
              <Image
                className="w-full h-full "
                src={"images/banner-1.png"}
                width={0}
                height={0}
                style={{ objectFit: "cover" }}
                alt="banner"
              />
            </div>
            <div className="md:col-span-6  h-full w-full md:h-[105px]">
              <Image
                className="w-full h-full "
                src={"images/banner-2.png"}
                width={0}
                style={{ objectFit: "cover" }}
                height={0}
                alt="banner"
              />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 md:mt-6 py-6 md:py-10 bg-base-50 px-2 md:px-6 h-[250px] md:h-[440px] overflow-x-auto overflow-y-hidden ">
        <div className="container mx-auto h-36 md:h-80 flex flex-col justify-center items-center">
          <div className="flex w-full justify-between pt-8 my-3 md:pt-8 md:pb-1 px-2 items-center">
            <p className="text-primary text-sm md:text-xl">جدید ترین اخبار</p>
            <p className="text-base-content text-xs md:text-md">نمایش همه</p>
          </div>
          <hr className="w-full pb-4 border-t-[#A0ADB8]" />
          <Slider data={dataDec} isDescription />
        </div>
      </div>
      {/* ========================documentry section ============================== */}
      <div className="py-6 md:py-10 bg-[#4A4A4A] px-2 md:px-6 h-[600px] md:h-[830px] xl:h-[540px] overflow-x-auto overflow-y-hidden ">
        <div className="container">
          <div className="flex justify-between px-4 mb-4 items-center">
            <p className="text-primary text-sm md:text-xl">
              {" "}
              جدیدترین مستند ها{" "}
            </p>
            <p className="text-base-content text-xs md:text-md">نمایش همه</p>
          </div>
          <hr className="w-full pb-4 border-t-[#A0ADB8]" />
          <div className="mt-5 flex flex-col xl:flex-row justify-between gap-10">
            <Image
              alt="poster"
              src={"images/Image 83.png"}
              width={0}
              height={0}
              className="h-[170px] md:h-[250px] xl:h-[350px] w-auto rounded-sm"
            />
            <div className="ml-auto flex flex-col justify-between items-center gap-4">
              <div className="flex gap-4">
                <Image
                  alt="poster"
                  src={"images/Image 90.png"}
                  width={0}
                  height={0}
                  className="h-[70px] md:h-[108px] w-auto rounded-sm"
                />
                <div className="text-link-footer-title">
                  <p className="text-sm md:text-xl">مستند نردبان</p>
                  <p className="text-xs md:text-md">
                    صحبت های شهید حسین امیرعبداللهیان در مورد شهید خصیت عظیم
                    سردار دلها حاج قاسم سلیمانی
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Image
                  alt="poster"
                  src={"images/Image 91.png"}
                  width={0}
                  height={0}
                  className="h-[70px] md:h-[108px] w-auto rounded-sm"
                />
                <div className="text-link-footer-title">
                  <p className="text-sm md:text-xl">سلاح ایرانی</p>
                  <p className="text-xs md:text-md">
                    صحبت های شهید حسین امیرعبداللهیان در مورد شهید خصیت عظیم
                    سردار دلها حاج قاسم سلیمانی
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Image
                  alt="poster"
                  src={"images/Image 92.png"}
                  width={0}
                  height={0}
                  className="h-[70px] md:h-[108px] w-auto rounded-sm"
                />
                <div className="text-link-footer-title">
                  <p className="text-sm md:text-xl">عشق شمعدانی ها</p>
                  <p className="text-xs md:text-md">
                    صحبت های شهید حسین امیرعبداللهیان در مورد شهید خصیت عظیم
                    سردار دلها حاج قاسم سلیمانی
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ======================== THE END OF documentry section ============================== */}
      {/* ========================  top of month section ============================== */}
      <div className="py-6 md:py-10 px-2 md:px-6 h-[250px] md:h-[440px] overflow-x-auto overflow-y-hidden ">
        <div className="container mx-auto h-36 md:h-80 flex flex-col justify-center items-center">
          <div className="flex w-full justify-between pt-8 my-3 md:pt-8 md:pb-1 px-2 items-center">
            <p className="text-primary text-sm md:text-xl"> برترین های ماه</p>
            <p className="text-base-content text-xs md:text-md">نمایش همه</p>
          </div>
          <hr className="w-full pb-4 border-t-base-70" />
          <Slider data={finalyData} isDescription />
        </div>
      </div>
      {/* ======================== THE END OF top of month section ============================== */}

      <div className="mt-2 md:mt-6 py-6 md:py-10 bg-base-50 px-2 md:px-6 h-[300px] md:h-[400px] overflow-x-auto overflow-y-hidden ">
        <div className="container w-[100%]">
          <p className="text-nowrap flex justify-end -mb-6 mr-auto w-[100%]">نمایش همه</p>
          <div className="container mx-auto h-44 md:h-[500px] flex flex-row-reverse">
             <Tabs
              tabs={[
                {
                  label: " پادکست",
                  content: <> <SliderPodcast data={podCast} /> </>,
                },
                {
                  label: "تحلیل روز",
                  content: (
                    <>
                      <div>منتن تست تحلیل</div>
                    </>
                  ),
                },
                {
                  label: " خبر دست اول",
                  content: (
                    <>
                      <div>متن تست خبر</div>
                    </>
                  ),
                },
                {
                  label: "انتخاب سر دبیر",
                  content: (
                    <>
                      <div>متن تست سر دبیر</div>
                    </>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </div>
      {/* ============== START mobile section ============ */}
      <div className="py-6 md:py-10 px-2 md:px-6 h-[350px] md:h-[440px] overflow-x-auto overflow-y-hidden ">
        <div className="container mx-auto h-60 md:h-80 flex flex-col justify-center items-center">
          <div className="flex w-full justify-between pt-8 my-3 md:pt-8 md:pb-1 px-2 items-center">
            <p className="text-primary text-sm md:text-xl">
              {" "}
              ویژه های موبایلی{" "}
            </p>
            <p className="text-base-content text-xs md:text-md">نمایش همه</p>
          </div>
          <hr className="w-full pb-4 border-t-base-70" />
          <Slider data={mobile} />
        </div>
      </div>
      {/* ============== THE END OF mobile section ============ */}
    </main>
  );
}
