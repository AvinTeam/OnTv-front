import { API_URL } from "@/configs/global";

export async function getAllEpisode({
  id,
  page,
}: {
  id: string;
  page: number;
}) {
  const res = await fetch(
    `${API_URL}episode/publicIndex?status=published&program[slug]=${id}&page=${page}&f_params[orderBy][field]=order&f_params[orderBy][type]=asc`,
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
