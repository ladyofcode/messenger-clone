import React, { createContext, useContext, useEffect, useState } from "react";
import { UserDTO } from "../../common/dto/user-dto";
import { authApi } from "../../api/Auth.api";
import { LoginDTO, RegisterDTO } from "../../common/dto/auth-dto";

interface IUserContext {
  user: UserDTO;
  registerAccount: (payload: RegisterDTO) => void;
  loginAccount: (payload: LoginDTO) => void;
  fetchUserData: () => void;
  isAuthenticated: boolean;
  loading: boolean;
}

const userContext = createContext<IUserContext | null>(null);

interface IUserProviderProps {
  children: JSX.Element;
}

export const AuthProvider = ({ children }: IUserProviderProps) => {
  const user = useAuthProvider();
  return <userContext.Provider value={user}>{children}</userContext.Provider>;
};

// Better way (c) ian
export const useAuth = (): IUserContext => {
  return useContext(userContext) as IUserContext;
};

const useAuthProvider = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);

  const registerAccount = async (payload: RegisterDTO) => {
    const { error } = await authApi.register(payload);

    if (error) {
      console.log("Could not register account ", error);
      return;
    }
  };

  const loginAccount = async (payload: LoginDTO) => {
    setLoading(true);

    const { error, data } = await authApi.login(payload);

    if (error) {
      console.error("Could not login");
      return;
    }

    setUser(data!.user);
    setLoading(false);
  };

  const fetchUserData = async () => {
    setLoading(true);
    const userData = await authApi.me();
    setUser(userData);
    setLoading(false);
  };

  useEffect(() => {
    // auth/login
    if (!user) {
      fetchUserData();
    }
  }, [user]);

  const isAuthenticated = !!user;

  return {
    user,
    registerAccount,
    loginAccount,
    fetchUserData,
    isAuthenticated,
    loading,
  };
};
