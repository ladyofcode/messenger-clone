import React, { createContext, useCallback, useContext, useState } from "react";
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
  const [user, setUser] = useState<any>(null);

  const registerAccount = async (payload: RegisterDTO) => {
    const { error } = await authApi.register(payload);

    if (error) {
      console.log("Could not register account ", error);
      return;
    }
  };

  const loginAccount = async (payload: LoginDTO) => {
    const { error, data } = await authApi.login(payload);
    if (error) {
      console.error("Could not login");
      return;
    }

    console.log(data);
    setUser(data!.user);
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
