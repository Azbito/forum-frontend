import axios from "axios";

export const makePost = async (description: string) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      "http://localhost:3333/post",
      { description },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response;
  } catch (error) {
    throw error;
  }
};
