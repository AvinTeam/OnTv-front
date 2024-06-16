import "./globals.css";
import Live from "./_components/live/live";
import { Slider } from "./_components/slider/slider";

export default function Home() {
  return (
    <main className="flex flex-col w-full overflow-x-auto overflow-y-hidden">
      <div className="container mt-4 mb-4 px-2 md:px-0 overflow-x-auto">
        <Live />
      </div>
      <div className="h-20 md:h-40 px-2 md:px-6 overflow-x-auto ">
        <Slider data={[]} />
      </div>
      <div className="my-10 md:my-16 py-6 md:py-10 bg-base-50 px-2 md:px-6 h-[250px] md:h-[450px] overflow-x-auto overflow-y-hidden ">
        <div className="container mx-auto h-40 md:h-80 flex flex-col justify-center items-center">
          <div className="flex w-full justify-between pt-8 my-3 md:pt-20 md:pb-2 px-2">
            <p className="text-base-content-title text-sm md:text-xl">
              ویژه ها
            </p>
            <p className="text-base-content text-sm md:text-md">نمایش همه</p>
          </div>
          <hr className="w-full pb-4 border-t-base-70"/>
          <Slider data={[]} isDescription />
        </div>
      </div>
    </main>
  );
}
