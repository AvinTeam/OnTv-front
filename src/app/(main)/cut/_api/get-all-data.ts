import { API_URL } from "@/configs/global";

export async function getCutPublicShow(id: any) {
  const res = await fetch(`${API_URL}cut/publicShow/${id}`, {
    cache: "no-cache",
  });
  if (res.ok) {
    return await res.json();
  } else {
    return null;
  }
}

export async function getAllCut(episode_id: number) {
  const res = await fetch(`${API_URL}cut/publicIndex?episode_id=${episode_id}`, {
    cache: "no-cache",
  });
  if (res.ok) {
    return await res.json();
  } else {
    return null;
  }
}
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
 