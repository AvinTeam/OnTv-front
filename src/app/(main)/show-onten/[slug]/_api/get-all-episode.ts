import { API_URL } from "@/configs/global";

export async function getAllEpisode({
  id,
  page,
}: {
  id: string;
  page: number;
}) {
  const res = await fetch(
    `${API_URL}episode/publicIndex?program[slug]=${id}&page=${page}`,
    {
      cache: "no-cache",
    }
  );
  if (res.ok) {
    return await res.json();
  } else {
    return null;
  }
}

export async function gatAllProgram(id: string) {
  const res = await fetch(`${API_URL}program/publicShow/${id}`, {
    cache: "no-cache",
  });
  if (res.ok) {
    return await res.json();
  } else {
    return null;
  }
}
