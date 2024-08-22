import { OntenCard } from "@/app/_components/cards/onten-card";
import { getAllProgram } from "./_api/get-all-data";

export default async function AllProgram({
  params,
}: {
  params: { slug: string, tag: string };
}) {
  const slug = decodeURIComponent(params.slug?.split(".")?.[0]);
  const tag = decodeURIComponent(params.tag?.split(".")?.[0]);
  const programs = await getAllProgram({
    slug: slug == 'all' ? "" : slug,
    tag: tag == 'all' ? "" : tag
  });
  return (
    <div className="bg-[black]">
      <div className="container mb-6 mt-5 flex flex-col shadow-xl p-4 w-screen overflow-auto ">
        <p>{(slug === 'all' ? tag : slug).replaceAll('-', ' ')}</p>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-8 gap-2 md:gap-1.5 lg:gap-4 w-full h-full mt-4">
          {(programs?.programs?.data ?? []).length == 0

            ? <div>نتیجه ای یافت نشد</div>
            : programs?.programs?.data?.map((item: any, idx: any) => (
              <div key={`program-id-${idx}`} className="w-full h-[280px] 2xl:h-[360px]">
                <OntenCard data={item} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
