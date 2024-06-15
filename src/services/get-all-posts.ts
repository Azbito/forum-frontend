import axios from "axios";

export async function getAllPosts() {
  try {
    const response = await axios.get("http://localhost:3333/users/get-posts");
    return response;
  } catch (error) {
    throw error;
  }
}
