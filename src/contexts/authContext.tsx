import React, { createContext, useContext, useState } from "react";
import { authenticateUser } from "@/services/auth";
import { jwtDecode } from "jwt-decode";
import { getUserData } from "@/services/get-user-data";

interface Credentials {
  username: string;
  password: string;
}

interface AuthContextType {
  user: any;
  setUser: any;
  isTokenValid: any;
  login: (credentials: Credentials) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<any>(null);

  const login = async ({ username, password }: Credentials) => {
    try {
      const authResponse = await authenticateUser({ username, password });
      const userData = await getUserData(username);
      setUser(userData);

      window.location.reload();
      return authResponse;
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  interface DecodedToken {
    exp: number;
    [key: string]: any;
  }

  const isTokenValid = (token: string | null): boolean => {
    if (!token) {
      return false;
    }

    try {
      const decodedToken: DecodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      return decodedToken.exp > currentTime;
    } catch (error) {
      return false;
    }
  };

  const checkToken = () => {
    const token = localStorage.getItem("token");

    if (!isTokenValid(token)) {
      localStorage.setItem("token", "");
      return false;
    }

    return true;
  };

  return (
    <AuthContext.Provider value={{ setUser, user, login, isTokenValid }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
