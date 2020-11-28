import React, { createContext, useCallback, useContext, useState } from "react";
import { UserDTO } from "../../common/dto/user-dto";
import { authApi } from "../../api/Auth.api";
import { LoginDTO, RegisterDTO } from "../../common/dto/auth-dto";

const userContext = createContext({} as any);

interface IUserProviderProps {
  children: JSX.Element;
}

export const AuthProvider = ({ children }: IUserProviderProps) => {
  const user = useAuthProvider();
  return <userContext.Provider value={user}>{children}</userContext.Provider>;
};

export const useAuth = () => {
  return useContext(userContext);
};

const useAuthProvider = () => {
  const [user, setUser] = useState<UserDTO | null>(null);

  const registerAccount = async (payload: RegisterDTO) => {
    const { data, error } = await authApi.register(payload);

    if (error) {
      console.log("Could not register account ", error);
      return;
    }

    setUser(data);
  };

  const loginAccount = async (payload: LoginDTO) => {
    const response = await authApi.login(payload);
    console.log(response);
  };

  const fetchUserData = async () => {
    const userData = await authApi.me();
    console.log(userData);
  };

  const isAuthenticated = useCallback(() => !!user, [user]);

  return {
    user,
    registerAccount,
    loginAccount,
    isAuthenticated,
  };
};
