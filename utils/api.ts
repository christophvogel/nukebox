export type APITrack = {
  id: string;
  imgSrc: string;
  title: string;
  artist: string;
  audio: string;
};

async function fetchURL<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

export async function getTracks(): Promise<APITrack[]> {
  return await fetchURL<APITrack[]>("/api/tracks");
}

export async function getTrack(id: string): Promise<APITrack> {
  return await fetchURL<APITrack>(`/api/tracks/${id}`);
}

export async function deleteTrack(id: string) {
  fetch(`/api/tracks/${id}`, {
    method: "DELETE",
  });
  return;
}

export async function addTrack(data) {
  const response = fetch("http://localhost:3000/api/tracks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response;
}
