import { API_URL } from "@/configs/global";

export async function getAllEpisode({ id, page }: { id: string, page: number }) {
    const res = await fetch(`${API_URL}episode/publicIndex?program_id=${id}&page=${page}`, {
      cache: "no-cache",
    });
    if (res.ok) return res.json();
   }

  export async function gatAllProgram(id: string) {
    const res = await fetch(`${API_URL}program/publicShow/${id}`, {
      cache: "no-cache",
    });
    if (res.ok) return res.json();
  }
  