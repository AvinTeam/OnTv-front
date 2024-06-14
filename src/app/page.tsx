import "./globals.css";
import Live from "./_components/live/live";
import { Slider } from "./_components/slider/slider";

export default function Home() {
  return (
    <main className="flex flex-col  w-full overflow-auto">
      <div className="md:px-6 mt-4">
        <Live />
      </div>
      <div className="h-40">
        <Slider data={[]} />
      </div>
      <div className="my-16 bg-base-50">
        <div className="container mx-auto my-10 h-100 flex flex-col ">
          <div className="flex justify-between my-16">
            <p className="text-base-content-title">ویژه ها</p>
            <p className="text-base-content">نمایش همه</p>
          </div>
          <Slider data={[]} isDescription />
        </div>
      </div>
    </main>
  );
}
