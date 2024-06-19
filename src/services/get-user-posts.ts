import { api } from "@/libs/axios";

export async function getMyPosts(token: string, id: string) {
  try {
    const { data } = await api.get(`/user/${id}/get-posts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    throw error;
  }
}
