import "../globals.css";
import Live from "../_components/live/live";
import { Slider } from "../_components/slider/slider";
import Image from "next/image";

const data: any= [
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

  
]
const dataDec: any= [
  {
    path: "/images/Mask Group 29.png",
    logo: "/images/logo/Group 953.png",
    alt: "test",
    descriptions:{
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم"
    }
  },
  {
    path: "/images/Mask Group 30.png",
    logo: "/images/logo/Group 1011.png",
    alt: "test",
    descriptions:{
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم"
    }
  },
  {
    path: "/images/Mask Group 31.png",
    logo: "/images/logo/Group 1013.png",
    alt: "test",
    descriptions:{
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم"
    }
  }, 
   {
    path: "/images/Mask Group 33.png",
    logo: "/images/logo/Group 9003.png",
    alt: "test",
    descriptions:{
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم"
    }
  },
   {
    path: "/images/Mask Group 33.png",
    logo: "/images/logo/Group 9003.png",
    alt: "test",
    descriptions:{
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم"
    }
  },
   {
    path: "/images/Mask Group 33.png",
    logo: "/images/logo/Group 9003.png",
    alt: "test",
    descriptions:{
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم"
    }
  },
 
 
  
]

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
          <div className="flex w-full justify-between pt-8 my-3 md:pt-8 md:pb-1 px-2">
            <p className="text-primary text-sm md:text-xl">
              ویژه ها
            </p>
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
              style={{objectFit: "cover"}}
              alt="banner"
              />
            </div>
            <div className="md:col-span-6  h-full w-full md:h-[105px]">
            <Image
              className="w-full h-full "
              src={"images/banner-2.png"}
              width={0}
              style={{objectFit: "cover"}}
              height={0}
              alt="banner"
            />   </div>
          </div>
        </div>
      </div>
      <div className="mt-2 md:mt-6 mb-8 py-6 md:py-10 bg-base-50 px-2 md:px-6 h-[250px] md:h-[440px] overflow-x-auto overflow-y-hidden ">
        <div className="container mx-auto h-36 md:h-80 flex flex-col justify-center items-center">
          <div className="flex w-full justify-between pt-8 my-3 md:pt-8 md:pb-1 px-2">
            <p className="text-primary text-sm md:text-xl">
              جدید ترین اخبار
            </p>
            <p className="text-base-content text-xs md:text-md">نمایش همه</p>
          </div>
          <hr className="w-full pb-4 border-t-base-70" />
          <Slider data={dataDec} isDescription />
        </div>
      </div>
    </main>
  );
}
