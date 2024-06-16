import { api } from "@/libs/axios";
import { setCookie } from "cookies-next";

export interface AuthenticateProps {
  username?: string;
  password?: string;
}

export const authenticateUser = async ({
  username,
  password,
}: AuthenticateProps) => {
  try {
    const { data } = await api.post("/login", {
      username,
      password,
    });

    const token = data.accessToken;

    if (token) {
      setCookie("ticket", token);
    }

    return data;
  } catch (error) {}
};
