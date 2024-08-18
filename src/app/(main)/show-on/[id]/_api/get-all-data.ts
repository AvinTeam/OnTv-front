import { API_URL } from "@/configs/global";

export async function getAllEpisode(id: string) {
    const res = await fetch(`${API_URL}episode/publicIndex?episode_id=${id}`, {
      cache: "no-cache",
    });
    if (res.ok) return res.json();
   }

  export async function gatPublicShow(id: string) {
    const res = await fetch(`${API_URL}episode/publicShow/${id}`, {
      cache: "no-cache",
    });
    if (res.ok) return res.json();
  }
  