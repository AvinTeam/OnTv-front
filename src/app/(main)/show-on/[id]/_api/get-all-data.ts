import { API_URL } from "@/configs/global";
import axios from "@/core/axios";

export async function getAllEpisode(id: number) {
  const res = await fetch(`${API_URL}episode/publicIndex?program_id=${id}`, {
    cache: "no-cache",
  });
  if (res.ok) {
    return await res.json();
  } else {
    return null;
  }
}

export async function gatPublicShow(id: string) {
  const res = await fetch(`${API_URL}episode/publicShow/${id}`, {
    cache: "no-cache",
  });
  if (res.ok) {
    return await res.json();
  } else {
    return null;
  }
}
export async function storeHistory(id: string) {
  const res = await axios.post(`user/storeHistory/${id}`);
  if (res.status == 200) return res;
}
