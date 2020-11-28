import React, { createContext, useCallback, useContext, useState } from "react";
import { userApi } from "../../api/User.api";
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
  const [user] = useState(null);

  const registerAccount = async (payload: RegisterDTO) => {
    const response = await userApi.register(payload);
    console.log(response);
  };

  const loginAccount = async (payload: LoginDTO) => {
    const response = await userApi.login(payload);
    console.log(response);
  };

  const isAuthenticated = useCallback(() => !!user, [user]);

  return {
    user,
    registerAccount,
    loginAccount,
    isAuthenticated,
  };
};
