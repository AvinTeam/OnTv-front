import { API_URL } from "@/configs/global";

export async function getAllProgram({ slug, tag }: { slug: string, tag: string }) {
  const res = await fetch(
    `${API_URL}program/publicIndex?` + new URLSearchParams({
      ...slug && { 'service[slug][]': slug },
      ...tag && { 'customFilter[tag_name_like][]': tag },
    }).toString(), {
    cache: "no-cache",
  });
  if (res.ok) return res.json();
}