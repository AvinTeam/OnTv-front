import { API_URL } from "@/configs/global";

export async function getAllProgram(slug: string) {
    const res = await fetch(`${API_URL}program/publicIndex?customFilter[tag_name_like][]=${slug}`, {
      cache: "no-cache",
    });
    if (res.ok) return res.json();
   }