import { api } from "@/libs/axios";

export async function getCurrentUser(token: string) {
  try {
    const { data } = await api.get(`/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}
