import "../globals.css";
import Live from "../_components/live/live";
import { Slider } from "../_components/slider/slider";
import { SliderPodcast } from "../_components/slider-podcast/slider-podcast";
import { SliderProgram } from "../_components/slider-program/slider-program";
import Image from "next/image";
import { Tabs } from "../_components/tabs";
import poster1 from "../../../public/images/Image 83.webp";
import poster2 from "../../../public/images/Image 90.png";
import poster3 from "../../../public/images/Image 91.png";
import poster4 from "../../../public/images/Image 92.png";
import banner1 from "../../../public/images/banner-2.png";
import banner2 from "../../../public/images/banner-1.png";
import item1 from "../../../public/images/Mask Group 38.png";
import logo1 from "../../../public/images/logo/Group 953.png";
import item2 from "../../../public/images/Mask Group 39.png";
import logo2 from "../../../public/images/logo/Group 988.png";
import item3 from "../../../public/images/Mask Group 41.png";
import logo3 from "../../../public/images/logo/Group 1011.png";
import item4 from "../../../public/images/Image 72.png";
import logo4 from "../../../public/images/logo/Group 9003.png";
import item5 from "../../../public/images/Mask Group 42.png";
import logo5 from "../../../public/images/logo/Group 1013.png";
import item6 from "../../../public/images/Mask Group 43.png";
import logo6 from "../../../public/images/logo/Group 1014.png";
import mobile1 from "../../../public/images/Mask Group 10.png";
import mobile2 from "../../../public/images/Image 27.png";
import mobile3 from "../../../public/images/Image 28.png";
import mobile4 from "../../../public/images/Mask Group 13 (2).png";
import mobile5 from "../../../public/images/Image 27.png";
import mobile6 from "../../../public/images/Mask Group 10.png";
import finalyData1 from "../../../public/images/Image 52.png";
import finalyData2 from "../../../public/images/Image 53.png";
import finalyData3 from "../../../public/images/Image 54.png";
import finalyData4 from "../../../public/images/Image 55.png";
import dataDec1 from "../../../public/images/Mask Group 29.png";
import dataDec2 from "../../../public/images/Mask Group 30.png";
import dataDec3 from "../../../public/images/Mask Group 31.png";
import dataDec4 from "../../../public/images/Mask Group 33.png";
import pro1 from "../../../public/images/Mask Group 16.png";
import pro2 from "../../../public/images/Mask Group 15.png";
import pro3 from "../../../public/images/Mask Group 17.png";

const dataPro: any = [
  {
    path: pro1,
    alt: "test",
    logo: "/images/logo/Group 368.png",
    descriptions: {
      title: "برنامه ترکیبی تکیه",
      dec: "برنامه ترکیبی / ساعت 15",
    },
  },
  {
    path: pro3,
    alt: "test",
    logo: "/images/logo/Group 392.png",
    descriptions: {
      title: "برنامه ترکیبی تکیه",
      dec: "برنامه ترکیبی / ساعت 15",
    },
  },
  {
    path: pro2,
    alt: "test",
    logo: "/images/logo/Group 415.png",
    descriptions: {
      title: "برنامه ترکیبی تکیه",
      dec: "برنامه ترکیبی / ساعت 15",
    },
  },
  {
    path: pro3,
    alt: "test",
    logo: "/images/logo/Group 368.png",
    descriptions: {
      title: "برنامه ترکیبی تکیه",
      dec: "برنامه ترکیبی / ساعت 15",
    },
  },
];
const data: any = [
  {
    path: item1,
    logo: logo1,
    alt: "test",
  },
  {
    path: item2,
    logo: logo2,
    alt: "test",
  },
  {
    path: item3,
    logo: logo3,
    alt: "test",
  },
  {
    path: item4,
    logo: logo4,
    alt: "test",
  },

  {
    path: item5,
    logo: logo5,
    alt: "test",
  },
  {
    path: item6,
    logo: logo6,
    alt: "test",
  },
];
const dataDec: any = [
  {
    path: dataDec1,
    alt: "test",
    logo: "/images/logo/Group 1011.png",
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
    logo: "/images/logo/Group 9003.png",
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
    logo: "/images/logo/Group 9003.png",
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: dataDec4,
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
    path: finalyData1,
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: finalyData2,
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: finalyData3,
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: finalyData4,
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: finalyData4,
    alt: "test",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
];
const mobile: any = [
  {
    path: mobile1,
    alt: "test",
  },
  {
    path: mobile2,
    alt: "test",
  },
  {
    path: mobile3,
    alt: "test",
  },
  {
    path: mobile4,
    alt: "test",
  },

  {
    path: mobile5,
    alt: "test",
  },

  {
    path: mobile6,
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
      <div className="container mt-4 mb-4 px-2 xl:px-0 overflow-x-auto">
        <Live />
      </div>
      <div className="h-20 md:h-40 px-2 md:px-6 overflow-x-auto ">
        <Slider data={data} />
      </div>
      <div className="mt-4 mb-2 md:mb-6 md:mt-16 py-6 md:py-10 bg-base-50 px-2 md:px-6 h-[270px] md:h-[440px] overflow-x-auto overflow-y-hidden ">
        <div className="container mx-auto h-44 md:h-80 flex flex-col justify-center items-center">
          <div className="flex w-full justify-between pt-8 my-3 md:pt-8 md:pb-1 px-2 items-center">
            <p className="text-primary text-sm md:text-xl">ویژه ها</p>
            <p className="text-base-content text-[10px] md:text-md">نمایش همه</p>
          </div>
          <hr className="w-full pb-4 border-t-base-70" />
          <Slider data={dataDec} isDescription />
        </div>
      </div>
      <div className="overflow-auto">
        <div className="container px-2 w-full h-full">
          <div className="flex flex-col lg:grid grid-cols-12 gap-2 w-full h-full justify-center items-center content-center">
            <div className="lg:col-span-6 h-full w-full md:h-[125px]">
              <Image
                className="w-full h-full "
                src={banner1}
                width={0}
                height={0}
                style={{ objectFit: "cover" }}
                alt="banner"
              />
            </div>
            <div className="lg:col-span-6  h-full w-full md:h-[125px]">
              <Image
                className="w-full h-full "
                src={banner2}
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
            <p className="text-base-content text-[10px] md:text-md">نمایش همه</p>
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
            <p className="text-base-content text-[10px] md:text-md">نمایش همه</p>
          </div>
          <hr className="w-full pb-4 border-t-[#A0ADB8]" />
          <div className="mt-5 flex flex-col xl:flex-row justify-between gap-10">
            <div className="relative h-[170px] md:h-[350px] xl:h-[350px] mx-auto">
              <Image
                alt="poster"
                src={poster1}
                width={0}
                height={0}
                style={{ objectFit: "cover" }}
                className="h-full w-auto rounded-md"
              />
              <div className="absolute bottom-0 md:bottom-6 flex justify-between items-center">
                <div>
                  <p className="text-[11px] mr-4 md:text-md xl:text-3xl md:mr-6 text-white">
                    جهانمرد
                  </p>
                  <p className="text-[10px] mr-5 md:text-sm font-thin xl:text-xl md:mr-8 text-white">
                    صحبت های شهید حسین امیرعبداللهیان در مورد شخصیت عظیم سردار
                    دلها شهید حاج قاسم سلیمانی
                  </p>
                </div>
                <p className="text-xs md:text-md mb-2 md:mb-0 ml-2 -md:mr-4 md:ml-0 xl:ml-2 mt-20 text-white">
                  32:68
                </p>
              </div>
            </div>
            <div className="ml-auto flex flex-col justify-between items-center gap-4">
              <div className="flex gap-4">
                <Image
                  alt="poster"
                  src={poster2}
                  width={0}
                  height={0}
                  className="h-[70px] md:h-[108px] w-auto rounded-md"
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
                  src={poster3}
                  width={0}
                  height={0}
                  className="h-[70px] md:h-[108px] w-auto rounded-md"
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
                  src={poster4}
                  width={0}
                  height={0}
                  className="h-[70px] md:h-[108px] w-auto rounded-md"
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
            <p className="text-base-content text-[10px] md:text-md">نمایش همه</p>
          </div>
          <hr className="w-full pb-4 border-t-base-70" />
          <Slider data={finalyData} isDescription />
        </div>
      </div>
      {/* ======================== THE END OF top of month section ============================== */}

      <div className="mt-2 md:mt-6 py-6 md:py-10 bg-base-50 px-2 md:px-6 h-[300px] md:h-[400px] overflow-x-auto overflow-y-hidden ">
        <div className="container w-[100%]">
          <p className="text-base-content text-[10px] md:text-md text-nowrap flex justify-end -mb-6 mr-auto w-[100%] px-2">
            نمایش همه
          </p>
          <div className="container mx-auto h-44 md:h-[500px] flex flex-row-reverse">
            <Tabs
              tabs={[
                {
                  label: " پادکست",
                  content: (
                    <>
                      {" "}
                      <SliderPodcast data={podCast} />{" "}
                    </>
                  ),
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
            <p className="text-base-content text-[10px] md:text-md">نمایش همه</p>
          </div>
          <hr className="w-full pb-4 border-t-base-70" />
          <Slider data={mobile} />
        </div>
      </div>
      {/* ============== THE END OF mobile section ============ */}

      <div className="mt-2 md:mt-6 py-0 md:pt-0 md:pb-4 bg-base-50 px-2 md:px-6 h-[190px] md:h-[320px] overflow-x-auto overflow-y-hidden ">
        <div className="container mx-auto h-36 md:h-60 flex flex-col justify-center items-center">
          <div className="flex w-full justify-between pt-8 my-2 md:pt-8 md:pb-1 px-2 items-center">
            <p className="text-primary text-sm md:text-xl">
              برنامه های شبکه آن
            </p>
            <p className="text-base-content text-[10px] md:text-md">نمایش همه</p>
          </div>
          <hr className="w-full pb-2 md:pb-4 border-t-[#A0ADB8]" />
          <SliderProgram data={dataPro} />
        </div>
      </div>

      <div className="px-2 md:px-6 mt-0 h-[120px] md:h-[240px] overflow-x-auto overflow-y-hidden ">
        <div className="container mx-auto h-20 md:h-56 flex flex-col justify-center items-center">
          <div className="flex w-full justify-between pt-8 my-3 md:pt-4 md:pb-1 px-2 items-center">
            <p className="text-primary text-sm md:text-xl">هشتک های داغ</p>
            <p className="text-base-content text-[10px] md:text-md">نمایش همه</p>
          </div>
          <hr className="w-full border-t-base-70" />
          <div className="flex bg-gray-100 text-nowrap [&>*]:mr-1 [&>*]:text-[8px] md:[&>*]:text-[12px] md:[&>*]:mr-3 lg:[&>*]:text-[16px] lg:[&>*]:mr-10 md:[&>*]:mt-2 p-4 rounded overflow-hidden">
            <p>#رئیس‌جمهور</p>
            <p>#انتخابات-ایران</p>
            <p>#انتخابات</p>
            <p>#تشعیع-باشکوه</p>
            <p>#رئیس‌جمهور</p>
            <p>#نمایشگاه-کتاب-تهران</p>
            <p>#فلسطین-غزه</p>
            <p>#اخبار-دست-اول</p>
            <p>#رئیس‌جمهور</p>
          </div>
          <div className="flex text-nowrap bg-gray-100 [&>*]:mr-1 [&>*]:text-[8px] md:[&>*]:text-[12px] md:[&>*]:mr-3 lg:[&>*]:text-[16px] lg:[&>*]:mr-10 p-4 rounded">
            <p>#رئیس‌جمهور</p>
            <p>#رئیس‌جمهور</p>
            <p>#رئیس‌جمهور</p>
            <p>#رئیس‌جمهور</p>
            <p>#رئیس‌جمهور</p>
            <p className="text-blue-500 text-base-content-slider mr-4">
              بیشتر...
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
