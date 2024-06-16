import "./globals.css";
import Live from "./_components/live/live";
import { Slider } from "./_components/slider/slider";

export default function Home() {
  return (
    <main className="flex flex-col w-full overflow-x-auto overflow-y-hidden">
      <div className="mt-4 mb-4 px-2 md:px-6">
        <Live />
      </div>
      <div className="h-20 md:h-40 px-2 md:px-6">
        <Slider data={[]} />
      </div>
      <div className="my-10 md:my-16 py-6 md:py-10 bg-base-50 px-2 md:px-6 h-[250px] md:h-[400px]">
        <div className="container mx-auto h-40 md:h-80 flex flex-col justify-center items-center">
          <div className="flex w-full justify-between my-3 md:my-6 px-2">
            <p className="text-base-content-title text-sm md:text-md">ویژه ها</p>
            <p className="text-base-content text-sm md:text-md">نمایش همه</p>
          </div>
          <Slider data={[]} isDescription />
        </div>
      </div>
    </main>
  );
}
