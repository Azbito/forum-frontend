import axios from "axios";

export interface AuthenticateProps {
  username?: string;
  password?: string;
}

export const authenticateUser = async ({
  username,
  password,
}: AuthenticateProps) => {
  try {
    const response = await axios.post("http://localhost:3333/login", {
      username,
      password,
    });
    const token = await response.data.accessToken;

    localStorage.setItem("token", token);

    return response.data;
  } catch (error) {
    throw error;
  }
};
