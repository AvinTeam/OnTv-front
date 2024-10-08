import { API_URL } from "@/configs/global";
import axios from "@/core/axios";

export async function getAllEpisode(id: string) {
  const res = await fetch(`${API_URL}episode/publicIndex?program[slug]=${id}&f_params[orderBy][field]=order&f_params[orderBy][type]=asc`, {
    cache: "no-cache",
  });
  if (res.ok) {
    return await res.json();
  } else {
    return null;
  }
}
export async function getAllCut(episode_id: string) {
  const res = await fetch(`${API_URL}cut/publicIndex?episode[slug]=${episode_id}`, {
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
