import { ChangeEvent, useState } from "react";

interface Credentials {
  username: string;
  password: string;
}

export const useCredentials = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
  });

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleLogin = async (
    onLogin: (credentials: Credentials) => Promise<void>
  ) => {
    try {
      await onLogin(credentials);
    } catch (error) {
      console.error(error);
    }
  };

  return { credentials, handleInputChange, handleLogin };
};
