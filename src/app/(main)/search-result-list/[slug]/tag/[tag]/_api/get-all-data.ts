import { API_URL } from "@/configs/global";

export async function getAllProgram({
  slug,
  tag,
  title,
  service,
  produce_date_from,
  produce_date_to,
}: {
  slug: string;
  tag: string;
  title: string | null;
  service: string | null;
  produce_date_from: string | null;
  produce_date_to: string | null;
}) {
  const res = await fetch(
    `${API_URL}program/publicIndex?` +
      new URLSearchParams({
        ...(slug && { "service[slug][]": slug }),
        ...(tag && { "customFilter[tag_name_like][]": tag }),
        ...(title ? { "title[like]": title } : {}),
        ...(service ? { "service_id": service } : {}),
        ...(produce_date_from ? { "customFilter[date][from]": produce_date_from } : {}),
        ...(produce_date_to ? { "customFilter[date][to]": produce_date_to } : {}),
      }).toString(),
    {
      cache: "no-cache",
    }
  );
  if (res.ok) return res.json();
}
