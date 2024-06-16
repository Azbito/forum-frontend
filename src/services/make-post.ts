import { api } from "@/libs/axios";

export const makePost = async (description: string) => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.post(
      "/post",
      { description },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response;
  } catch (error) {}
};
