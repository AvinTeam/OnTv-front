import "./globals.css";
import Live from "./_components/live/live";
import { Slider } from "./_components/slider/slider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col w-full overflow-x-auto overflow-y-hidden">
      <div className="container mt-4 mb-4 px-2 md:px-0 overflow-x-auto">
        <Live />
      </div>
      <div className="h-20 md:h-36 px-2 md:px-6 overflow-x-auto ">
        <Slider data={[]} />
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
          <Slider data={[]} isDescription />
        </div>
      </div>
      <div className="h-[50px] md:h-[195px] overflow-auto">
        <div className="container px-2 w-full h-full">
          <div className="grid grid-cols-12 gap-2 md:gap-4 w-full h-full justify-center items-center content-center">
            <Image
              className="col-span-6 w-full h-full "
              src={"images/banner-1.png"}
              width={0}
              height={0}
              alt="banner"
            />
            <Image
              className="col-span-6 w-full h-full "
              src={"images/banner-2.png"}
              width={0}
              height={0}
              alt="banner"
            />
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
          <Slider data={[]} isDescription />
        </div>
      </div>
    </main>
  );
}
