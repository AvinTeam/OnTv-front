import { OntenCard } from "@/app/_components/cards/onten-card";
import { getAllProgram } from "./_api/get-all-data";

export default async function AllProgram({
  params,
}: {
  params: { slug: string };
}) {
  const slug = decodeURIComponent(params.slug?.split(".")?.[0]);
  const programs = await getAllProgram(slug);
  console.log(programs?.programs?.data);
  return (
    <div className="bg-[black]">
      <div className="container mb-6 mt-5 flex flex-col shadow-xl p-4 w-screen overflow-auto ">
        <p>ویژه ایرانی</p>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-8 gap-2 md:gap-1.5 lg:gap-4 w-full h-full mt-4">
          {programs?.programs?.data?.map((item: any) => (
            <div className="w-full h-[280px] 2xl:h-[360px]">
              <OntenCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
