import { api } from "@/libs/axios";

export async function getAllPosts() {
  try {
    const { data } = await api.get("/users/get-posts");
    return data;
  } catch (error) {}
}
