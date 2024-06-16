import { api } from "@/libs/axios";

export async function getUserData(username: string) {
  try {
    const { data } = await api.get(`/user/${username}`);
    return data;
  } catch (error) {}
}
