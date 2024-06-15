import axios from "axios";

export async function getUserById(userId: string) {
  try {
    const response = await axios.get(`http://localhost:3333/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user data for userId ${userId}:`, error);
    return null;
  }
}
