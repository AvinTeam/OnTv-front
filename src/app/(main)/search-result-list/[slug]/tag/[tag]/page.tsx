import MainContent from "./components/MainContent";

export default function AllProgram({
  params,
}: {
  params: { slug: string; tag: string };
}) {
  const slug = decodeURIComponent(params.slug?.split(".")?.[0]);
  const tag = decodeURIComponent(params.tag?.split(".")?.[0]);
  return (
    <div className="bg-[black]">
     <MainContent slug={slug} tag={tag} />
    </div>
  );
}
